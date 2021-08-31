using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stellar.Core;
using Stellar.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stellar.WebAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class BuyerController : Controller
    {
        private readonly IBuyerService _buyerService;
        public BuyerController(IBuyerService buyerService)
        {
            _buyerService = buyerService;

        }

        [HttpGet]
        public async Task<IActionResult> GetBuyer()
        {
            return Ok(await _buyerService.GetBuyer());
        }

        [HttpPost]
        public async Task<IActionResult> AddBuyer(Buyer buyer)
        {
            return Ok(await _buyerService.AddBuyer(buyer));
        }
    }
}
