using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KorisnikController(DataContext context, IMapper mapper) : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<IEnumerable<KorisnikDto>>> GetKorisnike()
        {
            try
            {
                var korisnici = await context.Korisnici.Include(k => k.Njegovatelj).ToListAsync();
                if(korisnici == null) return NotFound();

                var korisniciToReturn = mapper.Map<IEnumerable<KorisnikDto>>(korisnici);

                return Ok(korisniciToReturn);
            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                                 ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<KorisnikDto>> GetKorisnik(int id)
        {
            var korisnik = await context.Korisnici.Include(k => k.Njegovatelj).FirstOrDefaultAsync();

            if (korisnik == null) return NotFound();

            return mapper.Map<KorisnikDto>(korisnik);
        }

        [HttpPost]
        public async Task<ActionResult<Korisnik>> Insert(KorisnikInsertDto korisnikInsertDto)
        {
            try
            {
                var korisnik = mapper.Map<Korisnik>(korisnikInsertDto);

                if(korisnikInsertDto.NjegovateljId != 0)
                {
                    var njegovatelj = await context.Njegovatelji.FindAsync(korisnikInsertDto.NjegovateljId);
                    if(njegovatelj == null) return NotFound("Njegovatelj nije pronađen");
                    korisnik.Njegovatelj = njegovatelj;
                }

                context.Korisnici.Add(korisnik);
                await context.SaveChangesAsync();

                return Ok(korisnik);

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                         ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteKorisnik(int id)
        {
            try
            {
                var korisnik = await context.Korisnici.FindAsync(id);
                if(korisnik != null)
                {
                    context.Korisnici.Remove(korisnik);
                    context.SaveChanges();
                }
                else
                {
                    return NotFound();
                }

                return Ok();

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> UpdateKorisnik(int id, KorisnikUpdateDto korisnikUpdateDto)
        {
            try
            {
                var korisnik = await context.Korisnici.Include(k => k.Njegovatelj)
                    .FirstOrDefaultAsync();

                if (korisnik == null) return NotFound();

                mapper.Map(korisnikUpdateDto, korisnik);

                if(korisnikUpdateDto.NjegovateljId != 0)
                {
                    korisnik.Njegovatelj = await context.Njegovatelji.FindAsync(korisnikUpdateDto.NjegovateljId);

                    if(korisnik.Njegovatelj == null)
                    {
                        return NotFound("Njegovatelj nije pronađen");
                    }
                }

                context.Korisnici.Update(korisnik);

                await context.SaveChangesAsync();

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }

    }
}
