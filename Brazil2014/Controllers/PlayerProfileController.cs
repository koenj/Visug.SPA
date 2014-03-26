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
    public class PlayerProfileController : ApiController
    {
        private Brazil2014Context db = new Brazil2014Context();

        // GET api/PlayerProfile
        public IQueryable<PlayerProfile> GetPlayerProfiles()
        {
            return db.PlayerProfiles;
        }

        // GET api/PlayerProfile/5
        [ResponseType(typeof(PlayerProfile))]
        public IHttpActionResult GetPlayerProfile(int id)
        {
            PlayerProfile playerprofile = db.PlayerProfiles.Include(x => x.Player).Single(x => x.PlayerId == id);
            if (playerprofile == null)
            {
                return NotFound();
            }
            return Ok(playerprofile);
        }

        // PUT api/PlayerProfile/5
        public IHttpActionResult PutPlayerProfile(int id, PlayerProfile playerprofile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != playerprofile.PlayerId)
            {
                return BadRequest();
            }
            db.Entry(playerprofile).State = EntityState.Modified;
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlayerProfileExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlayerProfileExists(int id)
        {
            return db.PlayerProfiles.Count(e => e.PlayerId == id) > 0;
        }
    }
}