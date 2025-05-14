namespace Server.Model
{
    public class Article
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public required string Category { get; set; }
        public required string Description { get; set; }
        public required string ArticleName { get; set; }
        public List<string>? Tags { get; set; } = null;
        public Guid UserId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime LastUpdate { get; set; } = DateTime.UtcNow;
    }
}
