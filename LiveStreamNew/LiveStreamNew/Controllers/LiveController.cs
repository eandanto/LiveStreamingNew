using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using LiveStreamNew.Models;

namespace LiveStreamNew.Controllers
{
    public class LiveController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SingleStream(int IDStream)
        {
            StreamingModel result = new StreamingModel();
            result.IDStream = IDStream;
            result.UserName = "Dummy_" + IDStream;
            return View("index", result);
        }
    }
}