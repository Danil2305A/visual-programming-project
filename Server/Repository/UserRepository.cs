using Server.Model;
using Server.Repository.Context;

namespace Server.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly IDbContext<User> _context;

        public UserRepository(IDbContext<User> context)
        {
            _context = context;
        }

        public void Add(User user)
        {
            _context.Add(user);
        }

        public User? Get(Guid id)
        {
            return _context.Get(id);
        }

        public User? Get(string email)
        {
            var users = _context.GetAll().Where(u => u.Email == email);
            if (users.Any()) return users.First();
            return null;
        }

        public IEnumerable<User> GetAll()
        {
            return _context.GetAll();
        }

        public void Update(Guid id, User user)
        {
            _context.Update(id, user);
        }

        public void Remove(Guid id)
        {
            _context.Remove(id);
        }
    }
}
