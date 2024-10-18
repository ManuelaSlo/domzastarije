using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Njegovatelj> Njegovatelji { get; set; }
        public DbSet<Korisnik> Korisnici { get; set; }
    }
}
