using Stellar.DB;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Stellar.Core
{
    public interface IProductService
    {
        Task<List<Product>> GetProducts();
        Task<Product> AddProduct(Product product);
    }
}
