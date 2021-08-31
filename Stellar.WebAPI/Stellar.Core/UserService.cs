using Microsoft.AspNet.Identity;
using Microsoft.EntityFrameworkCore;
using Stellar.Core.Utilities;
using Stellar.DB;
using System.Threading.Tasks;

namespace Stellar.Core
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;
        private readonly IPasswordHasher _passwordHasher;

        public UserService(AppDbContext context, IPasswordHasher passwordHasher)
        {
            _context = context;
            _passwordHasher = passwordHasher;
        }

        public async Task<AuthenticatedUser> SignIn(User user)
        {
            var dbUser = await _context.Users.FirstOrDefaultAsync(u => u.UserName == user.UserName);
            if (dbUser == null || _passwordHasher.VerifyHashedPassword(dbUser.Password, user.Password) == PasswordVerificationResult.Failed)
            {
                throw new InvalidUserException("Wrong password or username");
            }
            return new AuthenticatedUser()
            {
                UserName = user.UserName,
                Token = JwtGenerator.GenerateAuthToken(user.UserName, dbUser.Id.ToString())
            };

        }

        public async Task<AuthenticatedUser> SignUp(User user)
        {
            var dbUser = await _context.Users
                .FirstOrDefaultAsync(u => u.UserName == user.UserName);

            if (dbUser != null)
            {
                throw new UserNameAlreadyExistsException("User already exists");
            }

            user.Password = _passwordHasher.HashPassword(user.Password);
            await _context.AddAsync(user);
            await _context.SaveChangesAsync();
            return new AuthenticatedUser
            {
                UserName = user.UserName,
                Token = JwtGenerator.GenerateAuthToken(user.UserName, user.Id.ToString())
            };
        }
    }
}
