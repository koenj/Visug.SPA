using System;
using System.Linq;

namespace Brazil2014.Models
{
    public class PlayerProfile
    {
        public int PlayerId { get; set; }
        public Player Player { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string PlaceOfBirth { get; set; }
        public string CurrentTeam { get; set; }
        public int NbGoals { get; set; }
        public int NbSelections { get; set; }
        public int Appreciation { get; set; }
        public int Length { get; set; }
        public int Weight { get; set; }
    }
}