using Microsoft.EntityFrameworkCore;
using Server.Extension;
using Server.Model;
using Server.Repository;
using Server.Repository.Auth;
using Server.Repository.Context;
using Server.Service;

var builder = WebApplication.CreateBuilder();
var services = builder.Services;
var configuration = builder.Configuration;

services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

string? connectionString = configuration.GetConnectionString("DefaultConnection");
services.AddDbContext<IDbContext<User>, UserDbContext>(options => options.UseNpgsql(connectionString));
services.AddDbContext<IDbContext<Article>, ArticleDbContext>(options => options.UseNpgsql(connectionString));
services.AddDbContext<IDbContext<Review>, ReviewDbContext>(options => options.UseNpgsql(connectionString));

services.AddScoped<IPasswordHasher, PasswordHasher>();

services.AddScoped<IJwtProvider, JwtProvider>();

services.AddScoped<IUserRepository, UserRepository>();
services.AddScoped<UserService>();

services.AddScoped<IArticleRepository, ArticleRepository>();
services.AddScoped<ArticleService>(options =>
    new ArticleService(options.GetService<IArticleRepository>(), configuration["FileStorage:ArticlePathDirectory"]));

builder.Services.AddScoped<IReviewRepository, ReviewRepository>();
builder.Services.AddScoped<ReviewService>();

var app = builder.Build();

app.UseCors();

app.AddMappendEndpoints();

app.Run();
