using System;
using System.Data.Entity;
using System.Linq;

namespace Brazil2014.Models.Configuration
{
    class DatabaseInitializer : DropCreateDatabaseIfModelChanges<Brazil2014Context>
    {
        protected override void Seed(Brazil2014Context context)
        {
            base.Seed(context);
            foreach (var playerProfile in playerProfiles)
                context.PlayerProfiles.Add(playerProfile);
        }

        #region data

        // Taken from http://www.belgianfootball.be/nl/selectie-rode-duivels
        private static readonly PlayerProfile[] playerProfiles =
        {
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Vincent",
                    LastName = "Kompany",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5071.jpg",
                },
                Appreciation = 5,
                CurrentTeam = "Manchester City FC",
                DateOfBirth = new DateTime(1986, 4, 10),
                PlaceOfBirth = "Ukkel",
                NbSelections = 58,
                NbGoals = 4,
                Length = 190,
                Weight = 85,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Romelu",
                    LastName = "Lukaku",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5590.jpg",
                },
                Appreciation = 3,
                CurrentTeam = "Everton FC",
                DateOfBirth = new DateTime(1993, 5, 13),
                PlaceOfBirth = "Antwerp",
                NbSelections = 33,
                NbGoals = 5,
                Length = 190,
                Weight = 93,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Toby",
                    LastName = "Alderweireld",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5257.jpg",
                },
                Appreciation = 3,
                CurrentTeam = "Atletico Madrid",
                DateOfBirth = new DateTime(1989, 3, 2),
                PlaceOfBirth = "Wilrijk",
                NbSelections = 40,
                NbGoals = 1,
                Length = 186,
                Weight = 81,
            },            
            new PlayerProfile()
            {
                Player =
                    new Player()
                    {
                        FirstName = "Thibaut",
                        LastName = "Courtois",
                        ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5771.jpg",
                    },
                Appreciation = 5,
                CurrentTeam = "Atletico Madrid",
                DateOfBirth = new DateTime(1992, 5, 11),
                PlaceOfBirth = "Bree",
                NbSelections = 25,
                NbGoals = 0,
                Length = 196,
                Weight = 84,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Kevin",
                    LastName = "De Bruyne",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5733.jpg",
                },
                Appreciation = 4,
                CurrentTeam = "VfL Wolfsburg",
                DateOfBirth = new DateTime(1991, 6, 28),
                PlaceOfBirth = "Ghent",
                NbSelections = 22,
                NbGoals = 4,
                Length = 180,
                Weight = 68,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Moussa",
                    LastName = "Dembélé",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5138.jpg",
                },
                Appreciation = 3,
                CurrentTeam = "Tottenham Hotspur FC",
                DateOfBirth = new DateTime(1991, 6, 28),
                PlaceOfBirth = "Antwerp",
                NbSelections = 59,
                NbGoals = 5,
                Length = 185,
                Weight = 78,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Marouane",
                    LastName = "Fellaini",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5216.jpg",
                },
                Appreciation = 4,
                CurrentTeam = "Manchester United FC",
                DateOfBirth = new DateTime(1987, 11, 22),
                PlaceOfBirth = "Brussels",
                NbSelections = 50,
                NbGoals = 8,
                Length = 193,
                Weight = 85,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Eden",
                    LastName = "Hazard",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5464.jpg",
                },
                Appreciation = 4,
                CurrentTeam = "Chelsea FC",
                DateOfBirth = new DateTime(1991, 1, 7),
                PlaceOfBirth = "La Louvière",
                NbSelections = 47,
                NbGoals = 5,
                Length = 170,
                Weight = 69,
            },            
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Dries",
                    LastName = "Mertens",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5218.jpg",
                },
                Appreciation = 4,
                CurrentTeam = "SSC Napoli",
                DateOfBirth = new DateTime(1987, 5, 6),
                PlaceOfBirth = "Leuven",
                NbSelections = 31,
                NbGoals = 2,
                Length = 169,
                Weight = 72,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Kevin",
                    LastName = "Mirallas",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5331.jpg",
                },
                Appreciation = 3,
                CurrentTeam = "Everton FC",
                DateOfBirth = new DateTime(1987, 10, 5),
                PlaceOfBirth = "Liège",
                NbSelections = 44,
                NbGoals = 9,
                Length = 179,
                Weight = 68,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Axel",
                    LastName = "Witsel",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5254.jpg",
                },
                Appreciation = 4,
                CurrentTeam = "FC Zenit St-Petersburg",
                DateOfBirth = new DateTime(1989, 1, 12),
                PlaceOfBirth = "Liège",
                NbSelections = 48,
                NbGoals = 5,
                Length = 186,
                Weight = 81,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Jan",
                    LastName = "Vertonghen",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5110.jpg",
                },
                Appreciation = 1,
                CurrentTeam = "Tottenham Hotspur FC",
                DateOfBirth = new DateTime(1987, 4, 24),
                PlaceOfBirth = "Sint-Niklaas",
                NbSelections = 58,
                NbGoals = 4,
                Length = 189,
                Weight = 79,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Christian",
                    LastName = "Benteke",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5621.jpg",
                },
                Appreciation = 2,
                CurrentTeam = "Aston Villa FC",
                DateOfBirth = new DateTime(1990, 12, 3),
                PlaceOfBirth = "Kinshasa",
                NbSelections = 21,
                NbGoals = 6,
                Length = 191,
                Weight = 86,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Nacer",
                    LastName = "Chadli",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5814.jpg",
                },
                Appreciation = 2,
                CurrentTeam = "Tottenham Hotspur FC",
                DateOfBirth = new DateTime(1989, 8, 2),
                PlaceOfBirth = "Lüttich",
                NbSelections = 20,
                NbGoals = 2,
                Length = 187,
                Weight = 76,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Daniel",
                    LastName = "Van Buyten",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/2477.jpg",
                },
                Appreciation = 2,
                CurrentTeam = "FC Bayern München",
                DateOfBirth = new DateTime(1978, 2, 7),
                PlaceOfBirth = "Chimay",
                NbSelections = 90,
                NbGoals = 10,
                Length = 196,
                Weight = 96,
            },
            new PlayerProfile()
            {
                Player = new Player()
                {
                    FirstName = "Simon",
                    LastName = "Mignolet",
                    ImageUrl = "http://static.belgianfootball.be/project/publiek/internationals/footmen/5247.jpg",
                },
                Appreciation = 4,
                CurrentTeam = "Liverpool FC",
                DateOfBirth = new DateTime(1988, 3, 6),
                PlaceOfBirth = "Sint-Truiden",
                NbSelections = 30,
                NbGoals = 0,
                Length = 193,
                Weight = 88,
            }
        };

        #endregion
    }
}