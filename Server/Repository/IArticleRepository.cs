using Server.Model;

namespace Server.Repository
{
    public interface IArticleRepository
    {
        bool Add(string title, string category, string description, Guid userId, string articleName, List<string>? tags);
        Article? Get(Guid id);
        IEnumerable<Article>? GetAll();
        bool Update(Guid id, string title, string category, string description, string articleName, List<string>? tags);
        bool Remove(Guid id);
    }
}
