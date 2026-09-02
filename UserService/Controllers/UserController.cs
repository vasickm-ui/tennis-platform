using Microsoft.AspNetCore.Authorization;
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

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequestDTO request)
    {
        var result = await _userService.Login(request);
        return Ok(result);
    }

    [Authorize(Roles = "USER")]
    [HttpGet("testJWT")]
    public IActionResult Test()
    {
        return Ok("This can be done only with jwt! Which means you are authenticated or hacked haha");
    }
}