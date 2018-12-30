using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LiveStreamNew.Models
{
    public class StreamingModel
    {
        public int IDStream { get; set; }
        public string UserName { get; set; }
        public int StreamType { get; set; }
    }

    public class User
    {
        public string Username;
        public string ConnectionId;
        public bool InCall;
    }

    public class UserCall
    {
        public List<User> Users;
    }

    public class CallOffer
    {
        public User Caller;
        public User Callee;
    }

}