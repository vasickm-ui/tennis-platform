using Microsoft.AspNetCore.Mvc;
using UserService.DTOs;
using UserService.Services;

namespace UserService.Controllers;

[ApiController]
[Route("users")]
public class UserController : ControllerBase
{
    private readonly UserService.Services.UserService _userService;

    public UserController(UserService.Services.UserService service)
    {
        _userService = service;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequestDTO req)
    {

        var result = await _userService.Register(req);
        return Ok(result);
    }
}