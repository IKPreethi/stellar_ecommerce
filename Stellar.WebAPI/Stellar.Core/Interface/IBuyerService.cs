using Stellar.DB;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Stellar.Core
{
    public interface IBuyerService
    {
        Task<Buyer>GetBuyer();
        Task<Buyer> AddBuyer(Buyer buyer);
        Task<Buyer> EditBuyerCartProducts(Buyer buyer);
    }
}
