using UserService.Models;

namespace UserService.Repositories;

public interface IUserRepository
{
    Task<bool> EmailExistsAsync(string email);
    Task<User?> UserWithEmailAsync(string email);
    Task AddAsync(User user);
}