using Microsoft.AspNetCore.Http;
using MongoDB.Driver;
using Stellar.DB;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Stellar.Core
{
    public class ProductService : IProductService
    {
        private readonly IMongoCollection<Product> _products;
        private readonly string _userId;

        public ProductService(IDbClient dbClient, IHttpContextAccessor httpContextAccessor, IUserService userService)
        {
            _products = dbClient.GetProductCollection();
            _userId = httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }
        public async Task<List<Product>> GetProducts()
        {
            return await _products.Find(product => true).ToListAsync();
        }

        public async Task<Product> AddProduct(Product product)
        {
            _products.InsertOne(product);
            return product;

        }

    }
}
