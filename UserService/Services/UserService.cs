using UserService.DTOs;
using UserService.Data;
using UserService.Models;

namespace UserService.Services;

public class UserService
{
    private readonly UserDbContext _context;

    public UserService(UserDbContext context)
    {
        _context = context;
    }

    public RegisterResponseDTO Register(RegisterRequestDTO req)
    {
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