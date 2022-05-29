using ghanaiannamesapi.server.Models;
using ghanaiannamesapi.server.Services;
using Microsoft.AspNetCore.Mvc;

namespace ghanaiannamesapi.server.Controllers;

[ApiController]
[Route("/api/tribenames")]
public class GhanaianNamesController : ControllerBase
{
    public GhanaianNamesController() { }

    [HttpGet]
    public ActionResult<List<Tribe>> GetAll()
    {
        return Ok(value: GhanaianNamesService.GetAll());
    }

    [HttpGet]
    [Route(template: "{id}")]
    public ActionResult<Tribe> GetOneTribe(int id)
    {
        Tribe selectedTribe = GhanaianNamesService.GetOneTribe(id: id);
        if (selectedTribe == null)
        {
            return NotFound();
        }
        return Ok(value: selectedTribe);
    }
}
