namespace Server.Model
{
    public class User
    {
        public Guid Id { get; set; }
        public required string PasswordHash { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Specialization { get; set; }
        public required string Location { get; set; }
        public string? Bio { get; set; } = null;
        public List<string>? SocialLinks { get; set; } = null;
        public string Role { get; set; } = "author";
        public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
    }
}
