using UserService.DTOs;
using UserService.Data;
using UserService.Models;
using Microsoft.EntityFrameworkCore;
using UserService.Exceptions;
using UserService.Repositories;

namespace UserService.Services;

public class UserService
{
    private readonly IUserRepository _repository;

    public UserService(IUserRepository repo)
    {
        _repository = repo;
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
      

        return new RegisterResponseDTO
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email
        };

        
    }
}