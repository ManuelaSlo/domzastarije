namespace API.DTOs
{
    public class NjegovateljDto
    {
        public int Id { get; set; }
        public required string Ime { get; set; }
        public required string Prezime { get; set; }
        public required string Oib { get; set; }
    }
}
