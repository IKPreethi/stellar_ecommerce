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
        private readonly string _userId;

        public BuyerService(IDbClient dbClient, IHttpContextAccessor httpContextAccessor, IUserService userService)
        {
            _buyer = dbClient.GetBuyerCollection();
            _userId = httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }
        public async Task<Buyer> GetBuyer()
        {
            return await _buyer.Find(buyer => buyer.UserId == Int32.Parse(_userId)).FirstOrDefaultAsync();
        }

        public async Task<Buyer> AddBuyer(Buyer buyer)
        {
            buyer.UserId = Int32.Parse(_userId);
            _buyer.InsertOne(buyer);
            return buyer;

        }

    }
}
