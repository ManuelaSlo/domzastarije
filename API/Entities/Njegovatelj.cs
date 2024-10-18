namespace API.Entities
{
    public class Njegovatelj
    {
        public int Id { get; set; }
        public required string Ime { get; set; }
        public required string Prezime { get; set; }
        public required string Oib { get; set; }
    }
}
