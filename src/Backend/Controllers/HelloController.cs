using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class HelloController : Controller
    {
        [Route("/api/hello")]
        public string Hello()
        {
            return "Hello World";
        }
    }
}