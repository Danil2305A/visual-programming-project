public interface IUserRepository
{
    Task Add(User user);
    Task<User> Get(Guid id);
    Task<User> Get(string email);
    Task<IEnumerable<User>> GetAll();
    Task Update(User user);
    Task Remove(Guid id);
}

// db context у нас scope, не singleton
