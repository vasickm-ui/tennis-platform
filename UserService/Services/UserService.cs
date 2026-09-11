using UserService.DTOs;
using UserService.Data;
using UserService.Models;
using Microsoft.EntityFrameworkCore;
using UserService.Exceptions;
using UserService.Repositories;
using UserService.Events;

namespace UserService.Services;

public class UserService
{
    private readonly IUserRepository _repository;
    private readonly JwtService _jwtService;

    private readonly KafkaProducerService _kafkaProducerService;

    public UserService(IUserRepository repo, JwtService jwt, KafkaProducerService kafka)
    {
        _repository = repo;
        _jwtService = jwt;
        _kafkaProducerService = kafka;
    }

    public async Task<RegisterResponseDTO> Register(RegisterRequestDTO req)
    {
        var emailExists = await _repository.EmailExistsAsync(req.Email);
        if (emailExists)
        {
            throw new EmailAlreadyExistsException(req.Email);
        }

        var user = new User
        {
            FirstName = req.FirstName,
            LastName = req.LastName,
            Email = req.Email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(req.Password)
        };

        await _repository.AddAsync(user);

        var userEvent = new UserRegisteredEvent
        {
            UserId = user.Id,
            Email = user.Email
        };

        await _kafkaProducerService.SendUserRegisteredEventAsync(userEvent);
      

        return new RegisterResponseDTO
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email
        };

        
    }
    
    public async Task<LoginResponseDTO> Login(LoginRequestDTO request)
    {
        User user = await _repository.UserWithEmailAsync(request.Email);

        if(user == null)
        {
            throw new UserDoesNotExistsException();
        }

        bool valid = BCrypt.Net.BCrypt.Verify(
            request.Password,
            user.PasswordHash
        );

        if (!valid)
        {
            throw new InvalidPasswordException();
        }

        var token = _jwtService.GenerateToken(user);

        return new LoginResponseDTO
        {
            Token = token
        };

    }

}
