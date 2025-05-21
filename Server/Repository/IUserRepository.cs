using Server.Model;

namespace Server.Repository
{
    public interface IUserRepository
    {
        void Add(User user);
        User? Get(Guid id);
        User? Get(string email);
        IEnumerable<User> GetAll();
        void Update(Guid id, User user);
        void Remove(Guid id);
    }
}
