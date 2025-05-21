using Server.Contracts;
using Server.Model;
using Server.Service;

namespace Server.Endpoint
{
    public static class UserEndpoints
    {
        public static IEndpointRouteBuilder MapUsersEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapGet("/users", GetAllUsers);
            app.MapGet("/users/{id}", GetUserById);
            app.MapGet("/users/{login}/{password}", Login);

            app.MapPost("/users", Register);

            app.MapPut("/users/{id}", ChangeUserData);
            app.MapPut("/users/{id}/role", ChangeUserRole);

            app.MapDelete("/users/{id}", RemoveUser);

            return app;
        }

        public static IResult GetAllUsers(UserService userService)
        { return Results.Ok(userService.GetAll()); }

        public static IResult GetUserById(Guid id, UserService userService)
        {
            var user = userService.Get(id);
            if (user == null) return Results.NotFound();
            user.PasswordHash = "";
            return Results.Ok(user);
        }

        public static IResult Login(string login, string password, UserService userService)
        {
            var user = userService.Login(login, password);
            if (user != null) return Results.Ok(user);
            return Results.NotFound();
        }

        public static IResult Register(UserRequest newUser, UserService userService)
        {
            var res = userService.Register(newUser.Email, newUser.Password, newUser.Name, newUser.Specialization, newUser.Location);
            if (res == null) return Results.Conflict();
            res.PasswordHash = "";
            return Results.Ok(res);
        }

        public static IResult ChangeUserData(Guid id, UserRequest newUser, UserService userService)
        {
            userService.Update(id, new User
            {
                Email = newUser.Email,
                Name = newUser.Name,
                PasswordHash = newUser.Password,
                Specialization = newUser.Specialization,
                Location = newUser.Location
            });
            return Results.Ok();
        }

        public static IResult ChangeUserRole(Guid id, UserChangeRoleRequest newRole, UserService userService)
        {
            var user = userService.Get(id);
            if (user == null) return Results.NotFound();
            user.Role = newRole.Role;
            userService.Update(id, user);
            return Results.Ok();
        }

        public static IResult RemoveUser(Guid id, UserService userService)
        {
            if (userService.Remove(id))
                return Results.Ok();
            return Results.NotFound();
        }
    }
}
