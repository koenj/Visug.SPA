using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Brazil2014.Models;

namespace Brazil2014.Controllers
{
    // This controller got 'scaffolded' by right-clicking Controllers -> Add Controller -> Web API 2 controller with actions using Entity Framework.
    public class PlayersController : ApiController
    {
        private Brazil2014Context db = new Brazil2014Context();

        // GET api/Players
        public IQueryable<Player> GetPlayers()
        {
            return db.Players;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}