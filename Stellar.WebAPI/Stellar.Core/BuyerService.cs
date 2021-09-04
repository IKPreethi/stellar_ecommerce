using Microsoft.AspNetCore.Http;
using MongoDB.Driver;
using Stellar.DB;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Stellar.Core
{
    public class BuyerService : IBuyerService
    {
        private readonly IMongoCollection<Buyer> _buyer;
        private readonly int _userId;

        public BuyerService(IDbClient dbClient, IHttpContextAccessor httpContextAccessor, IUserService userService)
        {
            _buyer = dbClient.GetBuyerCollection();
            _userId = Int32.Parse(httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        }
        public async Task<Buyer> GetBuyer()
        {
            return await _buyer.Find(buyer => buyer.UserId == _userId).FirstOrDefaultAsync();
        }

        public async Task<Buyer> AddBuyer(Buyer buyer)
        {
            buyer.UserId = _userId;
            await _buyer.InsertOneAsync(buyer);
            return buyer;

        }
        public async Task<Buyer> EditBuyerCartProducts(Buyer buyer)
        {
            buyer.UserId = _userId;
            UpdateDefinition<Buyer> updateDefinition = Builders<Buyer>.Update.Set(ele => ele.CartProducts, buyer.CartProducts);
            UpdateResult updateResult = await _buyer.UpdateOneAsync(x => x.UserId == _userId, updateDefinition,
                  new UpdateOptions() { IsUpsert = true, });
            return buyer;

        }

    }
}
