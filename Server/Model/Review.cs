namespace Server.Model
{
    public class Review
    {
        public Guid Id { get; set; }
        public Guid ArticleId { get; set; }
        public Guid ReviewerId { get; set; }
        public int Rating { get; set; }
        public string? Recommendation { get; set; } = null;
        public string? TechnicalMerit { get; set; } = null;
        public string? Originality { get; set; } = null;
        public string? PresentationQuality { get; set; } = null;
        public string? CommentsToAuthors { get; set; } = null;
        public string? ConfidentialCommentsToEditor { get; set; } = null;
        public bool IsDraft { get; set; } = false;
        public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
        public DateTime LastUpdate { get; set; } = DateTime.UtcNow;
    }
}
