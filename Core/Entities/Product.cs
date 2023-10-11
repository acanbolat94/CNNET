using System.ComponentModel.DataAnnotations;
using System.Runtime.ConstrainedExecution;

namespace Core.Entities
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}