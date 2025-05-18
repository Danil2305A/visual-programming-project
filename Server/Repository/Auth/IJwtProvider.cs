using Model;

namespace Server.Repository.Auth {
    public interface IJwtProvider {
        public string GenerateToken(User user);
    }
}