using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Application.Models
{
    [Table("Credential")]
    public class LoginModel
    {
        [Key]
        public string Username { get; set; }
        public string Password { get; set; }
        public string User_type { get; set; }
    }
}

