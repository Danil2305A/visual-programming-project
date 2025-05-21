namespace Server.Contracts
{
    public record UserRequest(string Name, string Email, string Password, string Specialization, string Location);

    public record UserChangeRoleRequest(string Role);
}
