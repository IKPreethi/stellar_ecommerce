using System;
using System.Collections.Generic;
using System.Text;

namespace Stellar.DB
{
    public class OrderedProduct
    {
        public string ProductId { get; set; }
        public int Quantity { get; set; }
        public int Size { get; set; }
        public int OrderStatus { get; set; }
        public DateTime ExpectedDeliveryDate { get; set; }
    }
}
