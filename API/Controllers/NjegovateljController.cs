using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NjegovateljController(DataContext context, IMapper mapper) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NjegovateljDto>>> GetNjegovatelje()
        {
            try
            {
                var njegovatelji = await context.Njegovatelji.ToListAsync();
                if(njegovatelji == null) return NotFound();

                var njegovateljiToReturn = mapper.Map<IEnumerable<NjegovateljDto>>(njegovatelji);

                return Ok(njegovateljiToReturn);

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                                ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<NjegovateljDto>> GetNjegovatelj(int id)
        {
            var njegovatelj = await context.Njegovatelji.FirstOrDefaultAsync(n => n.Id == id);

            if(njegovatelj == null) return NotFound();

            return mapper.Map<NjegovateljDto>(njegovatelj);
        }

        [HttpPost]
        public async Task<ActionResult<Njegovatelj>> Insert(NjegovateljInsertDto njegovateljInsertDto)
        {
            try
            {
                var njegovatelj = mapper.Map<Njegovatelj>(njegovateljInsertDto);

                context.Njegovatelji.Add(njegovatelj);
                await context.SaveChangesAsync();

                return Ok(njegovatelj);
            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                         ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteNjegovatelj(int id)
        {
            try
            {
                var njegovatelj = await context.Njegovatelji.FindAsync(id);
                if (njegovatelj == null) return NotFound();

                context.Njegovatelji.Remove(njegovatelj);
                context.SaveChanges();

                return Ok();
            }catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> UpdateNjegovatelj(int id, NjegovateljUpdateDto updateDto)
        {
            try
            {

                var njegovatelj = await context.Njegovatelji.FirstOrDefaultAsync(n => n.Id == id);

                if(njegovatelj == null) { return NotFound(); }

                mapper.Map(updateDto, njegovatelj);

                context.Njegovatelji.Update(njegovatelj);
                await context.SaveChangesAsync();

                return StatusCode(StatusCodes.Status200OK);

            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }


    }
}
