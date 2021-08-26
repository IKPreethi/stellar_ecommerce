using System;
using System.Collections.Generic;
using System.Text;

namespace Stellar.DB
{
    public class ApplicationDBConfig
    {
        public string Database_Name { get; set; }
        public string Books_Collection_Name { get; set; }
        public string Mongo_Connection_String { get; set; }
        public string Product_Collection_Name { get; set; }
    }
}
