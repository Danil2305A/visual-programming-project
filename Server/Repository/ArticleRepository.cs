using Server.Model;
using Server.Repository.Context;

namespace Server.Repository
{
    public class ArticleRepository(IDbContext<Article> db) : IArticleRepository
    {
        private readonly IDbContext<Article> _db = db;

        public bool Add(string title, string category, string description, Guid userId, string articleName, List<string>? tags)
        {
            var findItem = _db.GetAll().Where(article => (article.Title == title && article.UserId == userId));
            if (!findItem.Any())
            {
                _db.Add(new Article
                {
                    Title = title,
                    Category = category,
                    Description = description,
                    UserId = userId,
                    Tags = tags,
                    ArticleName = articleName
                });
                return true;
            }
            return false;
        }

        public Article? Get(Guid id)
        { return _db.Get(id); }

        public IEnumerable<Article>? GetAll()
        { return _db.GetAll(); }

        public bool Remove(Guid id)
        { return _db.Remove(id); }

        public bool Update(Guid id, string title, string category, string description, string articleName, List<string>? tags)
        {
            return _db.Update(id, new Article
            {
                Id = id,
                Title = title,
                Category = category,
                Description = description,
                ArticleName = articleName,
                Tags = tags,
            });
        }
    }
}
