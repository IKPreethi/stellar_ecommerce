using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Stellar.DB
{
    public class Buyer
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }
        public int UserId { get; set; }
        public List<CartProduct> CartProducts { get; set; }
        public List<OrderedProduct> OrderedProducts { get; set; }
        public string Address { get; set; }
    }
}
