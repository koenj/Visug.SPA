using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using Brazil2014.Models.Configuration;

namespace Brazil2014.Models
{
    public class Brazil2014Context : DbContext
    {
        static Brazil2014Context()
        {
            Database.SetInitializer(new DatabaseInitializer());
        }

        public DbSet<Player> Players { get; set; }
        public DbSet<PlayerProfile> PlayerProfiles { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Configurations.Add(new PlayerConfiguration());
            modelBuilder.Configurations.Add(new PlayerProfileConfiguration());
        }

        class PlayerProfileConfiguration : EntityTypeConfiguration<PlayerProfile>
        {
            public PlayerProfileConfiguration()
            {
                this.HasKey(x => x.PlayerId);
                this.HasRequired(x => x.Player)
                   .WithOptional()
                   .WillCascadeOnDelete(true);
            }
        }

        class PlayerConfiguration : EntityTypeConfiguration<Player>
        {
            public PlayerConfiguration()
            {
            }
        }
    }
}