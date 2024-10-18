namespace API.Entities
{
    public class Korisnik
    {
        public int Id { get; set; }
        public required string Ime { get; set; }
        public required string Prezime { get; set; }
        public required string Oib { get; set; }
        public DateTime DatumRodenja { get; set; }
        public required Njegovatelj Njegovatelj { get; set; }
    }
}
