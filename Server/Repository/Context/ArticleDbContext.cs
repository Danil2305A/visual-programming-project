using Microsoft.EntityFrameworkCore;
using Server.Model;

namespace Server.Repository.Context
{
    public class ArticleDbContext : DbContext, IDbContext<Article>
    {
        private readonly DbSet<Article>? _articles;

        public ArticleDbContext(DbContextOptions<ArticleDbContext> options) : base(options)
        { Database.EnsureCreated(); }

        public Article? Get(Guid id)
        { return _articles?.Find(id); }

        public IEnumerable<Article>? GetAll()
        { return _articles; }

        public bool Remove(Guid id)
        {
            var find_item = _articles?.Find(id);
            if (find_item != null)
            {
                _articles?.Remove(find_item);
                SaveChanges();
            }
            return find_item != null;
        }

        public bool Update(Guid id, Article item)
        {
            var find_item = _articles?.Find(id);
            if (find_item != null)
            {
                item.Id = id;
                find_item = item;
                find_item.LastUpdate = DateTime.UtcNow;
                _articles?.Update(find_item);
                SaveChanges();
            }
            return find_item != null;
        }

        public async void Add(Article newItem)
        {
            if (_articles != null)
            {
                await _articles.AddAsync(newItem);
                SaveChanges();
            }
        }
    }
}
