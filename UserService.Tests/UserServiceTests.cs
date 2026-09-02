using Moq;
using UserService.Repositories;
using UserService.DTOs;
using UserService.Exceptions;
using UserService.Services;

namespace UserService.Tests;

public class UserServiceTests
{
    [Fact]
    public async Task Register_ShouldThrowException_WhenEmailAlreadyExists()
    {
        var mockRepository = new Mock<IUserRepository>();

        mockRepository
            .Setup(r => r.EmailExistsAsync("mile@gmail.com"))
            .ReturnsAsync(true);
            
        var jwt = new JwtService();
        var service = new UserService.Services.UserService(mockRepository.Object, jwt);

        var request = new RegisterRequestDTO
        {
            FirstName = "Mile",
            LastName = "Jankovic",
            Email = "mile@gmail.com",
            Password = "12345678"
        };

        await Assert.ThrowsAsync<EmailAlreadyExistsException>(
            () => service.Register(request)
        );

    }
}