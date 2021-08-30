using System;
using System.Runtime.Serialization;

namespace Stellar.Core
{
    public class UserNameAlreadyExistsException : Exception
    {
        public UserNameAlreadyExistsException()
        {
        }

        public UserNameAlreadyExistsException(string message) : base(message)
        {
        }

        public UserNameAlreadyExistsException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected UserNameAlreadyExistsException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
