using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("users")]
public class UserEndpoints : ControllerBase
{
    private readonly UserService _userService;

    public UserEndpoints(UserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllUsers()
    {
        var users = await _userService.GetAll();
        return Ok(users.Select(u => new { u.Id, u.Email }));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetUserById(Guid id)
    {
        var user = await _userService.Get(id);
        if (user == null)
            return NotFound();
        return Ok(new { user.Id, user.Email });
    }

    [HttpPost]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        try
        {
            var user = await _userService.Register(request.Email, request.Password);
            return CreatedAtAction(
                nameof(GetUserById),
                new { id = user.Id },
                new { user.Id, user.Email }
            );
        }
        catch (ArgumentException ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        try
        {
            var user = await _userService.Login(request.Email, request.Password);
            return Ok(new { user.Id, user.Email });
        }
        catch (ArgumentException)
        {
            return Unauthorized("Invalid credentials");
        }
        catch (UnauthorizedAccessException)
        {
            return Unauthorized("Invalid credentials");
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> ChangeUserData(Guid id, [FromBody] UpdateUserRequest request)
    {
        try
        {
            var user = await _userService.Update(
                id,
                u =>
                {
                    if (!string.IsNullOrEmpty(request.Email))
                        u.Email = request.Email;
                    if (!string.IsNullOrEmpty(request.Password))
                        u.PasswordHash = _userService.HashPassword(u, request.Password);
                }
            );
            return Ok(new { user.Id, user.Email });
        }
        catch (ArgumentException)
        {
            return NotFound();
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> RemoveUser(Guid id)
    {
        var result = await _userService.Remove(id);
        if (!result)
            return NotFound();
        return NoContent();
    }
}

public class RegisterRequest
{
    public string Email { get; set; }
    public string Password { get; set; }
}

public class LoginRequest
{
    public string Email { get; set; }
    public string Password { get; set; }
}

public class UpdateUserRequest
{
    public string Email { get; set; }
    public string Password { get; set; }
}
