using Microsoft.EntityFrameworkCore;
using Server.Model;

namespace Server.Repository.Context
{
    public class UserDbContext : DbContext, IDbContext<User>
    {
        public DbSet<User> Users { get; set; } = null!;

        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        { Database.EnsureCreated(); }

        public User? Get(Guid id)
        { return Users?.Find(id); }

        public IEnumerable<User> GetAll()
        { return Users; }

        public bool Remove(Guid id)
        {
            var find_item = Users?.Find(id);
            if (find_item != null)
            {
                Users?.Remove(find_item);
                SaveChanges();
            }
            return find_item != null;
        }

        public bool Update(Guid id, User item)
        {
            var find_item = Users?.Find(id);
            if (find_item != null)
            {
                item.Id = id;
                find_item = item;
                Users?.Update(find_item);
                SaveChanges();
            }
            return find_item != null;
        }

        public async void Add(User newItem)
        {
            await Users.AddAsync(newItem);
            SaveChanges();
        }
    }
}
