using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

public class UserService
{
    private readonly DbContext _context;
    private readonly IPasswordHasher<User> _passwordHasher;

    public UserService(DbContext context, IPasswordHasher<User> passwordHasher)
    {
        _context = context;
        _passwordHasher = passwordHasher;
    }

    public async Task<User> Register(string email, string password)
    {
        if (await _context.Set<User>().AnyAsync(u => u.Email == email))
        {
            throw new ArgumentException("Email already exists");
        }

        var user = new User { Email = email };
        user.PasswordHash = _passwordHasher.HashPassword(user, password);

        _context.Set<User>().Add(user);
        await _context.SaveChangesAsync();

        return user;
    }

    public async Task<User> Login(string email, string password)
    {
        var user = await _context.Set<User>().FirstOrDefaultAsync(u => u.Email == email);
        if (user == null)
        {
            throw new ArgumentException("User not found");
        }

        var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, password);
        if (result != PasswordVerificationResult.Success)
        {
            throw new UnauthorizedAccessException("Invalid credentials");
        }

        return user;
    }

    public async Task<User> Get(Guid id)
    {
        return await _context.Set<User>().FindAsync(id);
    }

    public async Task<User> Get(string email)
    {
        return await _context.Set<User>().FirstOrDefaultAsync(u => u.Email == email);
    }

    public async Task<IEnumerable<User>> GetAll()
    {
        return await _context.Set<User>().ToListAsync();
    }

    public async Task<User> Update(Guid id, Action<User> updateAction)
    {
        var user = await _context.Set<User>().FindAsync(id);
        if (user == null)
        {
            throw new ArgumentException("User not found");
        }

        updateAction(user);
        await _context.SaveChangesAsync();

        return user;
    }

    public async Task<bool> Remove(Guid id)
    {
        var user = await _context.Set<User>().FindAsync(id);
        if (user == null)
        {
            return false;
        }

        _context.Set<User>().Remove(user);
        await _context.SaveChangesAsync();

        return true;
    }
}
