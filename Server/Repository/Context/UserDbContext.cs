using Microsoft.EntityFrameworkCore;
using Server.Model;

namespace Server.Repository.Context
{
    public class UserDbContext : DbContext, IDbContext<User>
    {
        private readonly DbSet<User>? _users;

        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        { Database.EnsureCreated(); }

        public User? Get(Guid id)
        { return _users?.Find(id); }

        public IEnumerable<User>? GetAll()
        { return _users; }

        public bool Remove(Guid id)
        {
            var find_item = _users?.Find(id);
            if (find_item != null)
            {
                _users?.Remove(find_item);
                SaveChanges();
            }
            return find_item != null;
        }

        public bool Update(Guid id, User item)
        {
            var find_item = _users?.Find(id);
            if (find_item != null)
            {
                item.Id = id;
                find_item = item;
                _users?.Update(find_item);
                SaveChanges();
            }
            return find_item != null;
        }

        public async void Add(User newItem)
        {
            if (_users != null)
            {
                await _users.AddAsync(newItem);
                SaveChanges();
            }
        }
    }
}
