using Model;
using Microsoft.Extensions.Options;

namespace Server.Repository.Auth {
    public class JwtProvider(IOptions<JwtOptions> options) : IJwtProvider {
        private readonly JwtOptions _options = options.Value;
        
        
        public string GenerateToken(User user) {
            Claim[] claims = [new("userId", user.Id.ToString())];

            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.Secretkey)),
                SecurityAlgorithms.HmacSha256
            );
            
            var token = new JwtSecurityToken(
                claims: claims,
                signingCredentials: signingCredentials,
                expires: Datetime.UtcNow.AddHours(_options.ExpiresHours)
            );

            var tokenValue = new JwtSecurityTokenHandler().WriteToken(token);

            return tokenValue;
        }
    }
}