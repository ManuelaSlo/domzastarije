namespace API.DTOs
{
    public class KorisnikUpdateDto
    {
        public required string Ime { get; set; }
        public required string Prezime { get; set; }
        public required string Oib { get; set; }
        public DateTime DatumRodenja { get; set; }
        public required int NjegovateljId { get; set; } // FK
    }
}
