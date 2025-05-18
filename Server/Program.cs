using Microsoft.EntityFrameworkCore;
using Server.Extension;
using Server.Model;
using Server.Repository;
using Server.Repository.Context;
using Server.Service;

var builder = WebApplication.CreateBuilder(args);

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

builder.Services.AddDbContext<IDbContext<User>, UserDbContext>(options => options.UseNpgsql(connectionString));
builder.Services.AddDbContext<IDbContext<Article>, ArticleDbContext>(options => options.UseNpgsql(connectionString));
builder.Services.AddDbContext<IDbContext<Review>, ReviewDbContext>(options => options.UseNpgsql(connectionString));

builder.Services.AddScoped<IArticleRepository, ArticleRepository>();
builder.Services.AddScoped<ArticleService>(options =>
    new ArticleService(options.GetService<IArticleRepository>(), builder.Configuration["FileStorage:ArticlePathDirectory"]));

builder.Services.AddScoped<IReviewRepository, ReviewRepository>();
builder.Services.AddScoped<ReviewService>();

var app = builder.Build();

app.UseCors();

app.AddMappendEndpoints();

app.Run();
