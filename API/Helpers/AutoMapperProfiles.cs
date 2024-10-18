using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Njegovatelj, NjegovateljDto>();
            CreateMap<NjegovateljDto, Njegovatelj>();
            CreateMap<NjegovateljInsertDto, Njegovatelj>();
            CreateMap<NjegovateljUpdateDto, Njegovatelj>();
            CreateMap<Korisnik, KorisnikDto>();
            CreateMap<KorisnikDto, Korisnik>();
            CreateMap<KorisnikInsertDto, Korisnik>();
            CreateMap<KorisnikUpdateDto, Korisnik>();
        }

            
    }
}
