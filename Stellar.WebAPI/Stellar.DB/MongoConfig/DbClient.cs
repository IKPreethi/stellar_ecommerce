using Microsoft.Extensions.Options;
using MongoDB.Driver;


namespace Stellar.DB
{
    public class DbClient : IDbClient
    {
        private readonly IMongoCollection<Product> _Product;
        private readonly IMongoCollection<Buyer> _Buyer;

        public DbClient(IOptions<ApplicationDBConfig> ApplicationDBConfig)
        {
            var client = new MongoClient(ApplicationDBConfig.Value.Mongo_Connection_String);
            var database = client.GetDatabase(ApplicationDBConfig.Value.Database_Name);
            _Product = database.GetCollection<Product>(ApplicationDBConfig.Value.Product_Collection_Name);
            _Buyer = database.GetCollection<Buyer>(ApplicationDBConfig.Value.Buyer_Collection_Name);
        }

        public IMongoCollection<Product> GetProductCollection() => _Product;

        public IMongoCollection<Buyer> GetBuyerCollection() => _Buyer;
    }
}
