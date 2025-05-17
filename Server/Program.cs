using Microsoft.EntityFrameworkCore;
using Server.Extension;
using Server.Model;
using Server.Repository;
using Server.Repository.Auth;
using Server.Repository.Context;
using Server.Service;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

string? connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
services.AddDbContext<IDbContext<User>, UserDbContext>(options => options.UseNpgsql(connectionString));
services.AddDbContext<IDbContext<Article>, ArticleDbContext>(options => options.UseNpgsql(connectionString));
services.AddDbContext<IDbContext<Review>, ReviewDbContext>(options => options.UseNpgsql(connectionString));

services.AddScoped<IArticleRepository, ArticleRepository>();
services.AddScoped<ArticleService>(options =>
    new ArticleService(options.GetService<IArticleRepository>(), builder.Configuration["FileStorage:ArticlePathDirectory"]));

services.AddScoped<IJwtProvider, JwtProvider>();
services.AddScoped<IPasswordHasher, PasswordHasher>();

var app = builder.Build();

app.UseCors();

app.AddMappendEndpoints();

app.Run();
