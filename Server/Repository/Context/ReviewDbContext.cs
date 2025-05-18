using Microsoft.EntityFrameworkCore;
using Server.Model;

namespace Server.Repository.Context
{
    public class ReviewDbContext : DbContext, IDbContext<Review>
    {
        public DbSet<Review> Reviews { get; set; } = null!;

        public ReviewDbContext(DbContextOptions<ReviewDbContext> options) : base(options)
        { Database.EnsureCreated(); }

        public Review? Get(Guid id)
        { return Reviews?.Find(id); }

        public IEnumerable<Review> GetAll()
        { return Reviews; }

        public bool Remove(Guid id)
        {
            var find_item = Reviews?.Find(id);
            if (find_item != null)
            {
                Reviews?.Remove(find_item);
                SaveChanges();
            }
            return find_item != null;
        }

        public bool Update(Guid id, Review item)
        {
            var find_item = Reviews?.Find(id);
            if (find_item != null)
            {
                item.Id = id;
                find_item = item;
                Reviews?.Update(find_item);
                SaveChanges();
            }
            return find_item != null;
        }

        public async void Add(Review newItem)
        {
            if (Reviews != null)
            {
                await Reviews.AddAsync(newItem);
                SaveChanges();
            }
        }
    }
}
