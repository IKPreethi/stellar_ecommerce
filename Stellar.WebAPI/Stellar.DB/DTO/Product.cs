using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Stellar.DB
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }
        public string ProductName { get; set; }
        public double ProductPrice { get; set; }
        public string Category { get; set; }
        public string ProductDescription { get; set; }
        public string ProductImage { get; set; }
    }
}
