using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stellar.Core;
using Stellar.DB;
using System.Threading.Tasks;

namespace Stellar.WebAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;

        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            return Ok(await _productService.GetProducts());
        }


        [HttpPost]
        public async Task<IActionResult> AddProduct(Product product)
        {
            return Ok(await _productService.AddProduct(product));
        }
    }
}
