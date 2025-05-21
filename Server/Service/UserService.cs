using Server.Model;
using Server.Repository;
using Server.Repository.Auth;

namespace Server.Service
{
    public class UserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher _passwordHasher;

        public UserService(IUserRepository userRepository, IPasswordHasher passwordHasher)
        {
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
        }

        public User? Register(string email, string password, string name, string specialization, string location)
        {
            if (_userRepository.Get(email) == null)
            {
                var user = new User
                {
                    Email = email,
                    PasswordHash = _passwordHasher.Generate(password),
                    Name = name,
                    Specialization = specialization,
                    Location = location
                };
                _userRepository.Add(user);
                return user;
            }
            return null;
        }

        public User? Login(string email, string password)
        {
            var user = _userRepository.Get(email);
            if (user != null && _passwordHasher.Verify(password, user.PasswordHash))
                return user;
            return null;
        }

        public User? Get(Guid id)
        {
            return _userRepository.Get(id);
        }

        public User? Get(string email)
        {
            return _userRepository.Get(email);
        }

        public IEnumerable<User> GetAll()
        {
            return _userRepository.GetAll();
        }

        public User? Update(Guid id, User newUserData)
        {
            var user = _userRepository.Get(id);
            if (user != null && (_userRepository.Get(newUserData.Email) == null || user.Email == newUserData.Email))
            {
                newUserData.PasswordHash = user.PasswordHash;
                _userRepository.Update(id, newUserData);
            }
            return _userRepository.Get(id);
        }

        public bool Remove(Guid id)
        {
            if (_userRepository.Get(id) == null)
                return false;
            _userRepository.Remove(id);
            return true;
        }
    }
}
