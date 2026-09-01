using System.Net;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Mvc.Testing;
using UserService.DTOs;

public class UserControllerIntegrationTests
{
     [Fact]
    public async Task Register_ShouldReturnBadRequest_WhenPasswordIsTooShort()
    {
        var factory = new WebApplicationFactory<Program>();
        var client = factory.CreateClient();

        var request = new RegisterRequestDTO
        {
            FirstName = "Mile",
            LastName = "Jankovic",
            Email = "mile@gmail.com",
            Password = "123"
        };

        var response = await client.PostAsJsonAsync(
            "users/register",
            request
        );

        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
    }
    
}