using Server.Model;

namespace Server.Repository.Auth
{
    public interface IJwtProvider
    {
        string GenerateToken(User user);
    }
}
