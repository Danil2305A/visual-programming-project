using System.ComponentModel.DataAnnotations;

namespace Server.Contracts
{
    public record ArticleRequest(
        [Required] string Title,
        [Required] string Category,
        [Required] string Description,
        [Required] string ArticleName,
        [Required] Guid UserId,
        List<string>? Tags);
}
