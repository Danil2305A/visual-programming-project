using Microsoft.EntityFrameworkCore;
using Server.Model;

namespace Server.Repository.Context
{
    public class ArticleDbContext : DbContext, IDbContext<Article>
    {
        public DbSet<Article> Articles { get; set; } = null!;

        public ArticleDbContext(DbContextOptions<ArticleDbContext> options) : base(options)
        { Database.EnsureCreated(); }

        public Article? Get(Guid id)
        { return Articles?.Find(id); }

        public IEnumerable<Article> GetAll()
        { return Articles; }

        public bool Remove(Guid id)
        {
            var findItem = Articles?.Find(id);
            if (findItem != null)
            {
                Articles?.Remove(findItem);
                SaveChanges();
                return true;
            }
            return false;
        }

        public bool Update(Guid id, Article item)
        {
            var findItem = Articles?.Find(id);
            if (findItem != null)
            {
                item.Id = id;
                findItem = item;
                findItem.LastUpdate = DateTime.UtcNow;
                Articles?.Update(findItem);
                SaveChanges();
                return true;
            }
            return false;
        }

        public async void Add(Article newItem)
        {
            if (Articles != null)
            {
                await Articles.AddAsync(newItem);
                SaveChanges();
            }
        }
    }
}
