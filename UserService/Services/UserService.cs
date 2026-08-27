using UserService.DTOs;
using UserService.Data;
using UserService.Models;
using Microsoft.EntityFrameworkCore;
using UserService.Exceptions;

namespace UserService.Services;

public class UserService
{
    private readonly UserDbContext _context;

    public UserService(UserDbContext context)
    {
        _context = context;
    }

    public async Task<RegisterResponseDTO> Register(RegisterRequestDTO req)
    {
        var emailExists = await _context.Users.AnyAsync(u => u.Email == req.Email);
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

        _context.Users.Add(user);
        _context.SaveChanges();

        return new RegisterResponseDTO
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email
        };

        
    }
}