using Stellar.DB;
using System.Threading.Tasks;

namespace Stellar.Core
{
    public interface IUserService
    {
        Task<AuthenticatedUser> SignUp(User user);
        Task<AuthenticatedUser> SignIn(User user);
    }
}
