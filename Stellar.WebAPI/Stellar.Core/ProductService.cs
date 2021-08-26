using MongoDB.Driver;
using Stellar.DB;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Stellar.Core
{
    public class ProductService: IProductService
    {
        private readonly IMongoCollection<Product> _products;

        public ProductService(IDbClient dbClient)
        {
            _products = dbClient.GetProductCollection();
        }
        public async Task<List<Product>> GetProducts()
        {
            return await _products.Find(book => true).ToListAsync();
        }

        public async Task<Product> AddProduct(Product product)
        {
            _products.InsertOne(product);
            return product;

        }
    }
}
