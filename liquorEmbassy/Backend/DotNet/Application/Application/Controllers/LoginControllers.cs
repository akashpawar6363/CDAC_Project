using Application.Data;
using Application.Models;
using Microsoft.AspNetCore.Mvc;


using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Connections;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;

namespace Application.Controllers
{
    [EnableCors("AllowReactApp")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
       private readonly ApplicationDbContext _context;

        public LoginController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        [HttpPost("verify")]


        public async Task<IActionResult> VerifyLogin([FromBody] LoginModel loginModel)
        {
            
            if (loginModel == null)
            {
                return BadRequest("Invalid request data.");
            }

            // Find a user with the provided login ID (e.g., username or email)
            var user = await _context.LoginModels.FirstOrDefaultAsync(u =>
                  u.Username == loginModel.Username && u.Password == loginModel.Password);

            if (user == null)
            {
                return NotFound("Invalid userId/Password");
            }
            

            return Ok(user.User_type);
        }


    }

}
