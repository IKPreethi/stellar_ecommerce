using Microsoft.AspNetCore.Mvc;
using Stellar.Core;
using Stellar.DB;
using System.Threading.Tasks;

namespace Stellar.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly IUserService _userService;
            public AuthenticationController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp([FromBody] User user)
        {
            try
            {
                var result = await _userService.SignUp(user);
                return Created("", result);
            }
            catch (InvalidUserException e)
            {
                return StatusCode(401, e.Message);
            }
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignIn([FromBody] User user)
        {
            try
            {
                var result = await _userService.SignIn(user);
                return Created("", result);
            }
            catch (UserNameAlreadyExistsException e)
            {
                return StatusCode(409, e.Message);
            }
        }


    }
}
