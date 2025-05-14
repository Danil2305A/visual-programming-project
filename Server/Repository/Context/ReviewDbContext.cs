using Microsoft.EntityFrameworkCore;
using Server.Model;

namespace Server.Repository.Context
{
    public class ReviewDbContext : DbContext, IDbContext<Review>
    {
        private readonly DbSet<Review>? _reviews;

        public ReviewDbContext(DbContextOptions<ReviewDbContext> options) : base(options)
        { Database.EnsureCreated(); }

        public Review? Get(Guid id)
        { return _reviews?.Find(id); }

        public IEnumerable<Review>? GetAll()
        { return _reviews; }

        public bool Remove(Guid id)
        {
            var find_item = _reviews?.Find(id);
            if (find_item != null)
            {
                _reviews?.Remove(find_item);
                SaveChanges();
            }
            return find_item != null;
        }

        public bool Update(Guid id, Review item)
        {
            var find_item = _reviews?.Find(id);
            if (find_item != null)
            {
                item.Id = id;
                find_item = item;
                _reviews?.Update(find_item);
                SaveChanges();
            }
            return find_item != null;
        }

        public async void Add(Review newItem)
        {
            if (_reviews != null)
            {
                await _reviews.AddAsync(newItem);
                SaveChanges();
            }
        }
    }
}
