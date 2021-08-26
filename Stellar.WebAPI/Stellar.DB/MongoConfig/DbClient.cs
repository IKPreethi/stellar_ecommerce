using Microsoft.Extensions.Options;
using MongoDB.Driver;


namespace Stellar.DB
{
    public class DbClient: IDbClient
    {
        private readonly IMongoCollection<Product> _Product;

        public DbClient(IOptions<ApplicationDBConfig> ApplicationDBConfig)
        {
            var client = new MongoClient(ApplicationDBConfig.Value.Mongo_Connection_String);
            var database = client.GetDatabase(ApplicationDBConfig.Value.Database_Name);
            _Product = database.GetCollection<Product>(ApplicationDBConfig.Value.Product_Collection_Name);
        }

        public IMongoCollection<Product> GetProductCollection() => _Product;
    }
}
