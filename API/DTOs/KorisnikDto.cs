using API.Entities;

namespace API.DTOs
{
    public class KorisnikDto
    {
        public int Id { get; set; }
        public required string Ime { get; set; }
        public required string Prezime { get; set; }
        public required string Oib { get; set; }
        public DateTime DatumRodenja { get; set; }
        public Njegovatelj Njegovatelj { get; set; }
    }
}
