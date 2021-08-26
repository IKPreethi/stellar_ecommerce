using MongoDB.Driver;


namespace Stellar.DB
{
    public interface IDbClient
    {
        IMongoCollection<Product> GetProductCollection();

    }
}
