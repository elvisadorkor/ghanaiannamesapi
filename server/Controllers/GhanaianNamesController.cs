using ghanaiannamesapi.server.Models;
using ghanaiannamesapi.server.Services;
using Microsoft.AspNetCore.Mvc;

namespace ghanaiannamesapi.server.Controllers;

[ApiController]
[Route(template: "/api/tribenames")]
public class GhanaianNamesController : ControllerBase
{
    public GhanaianNamesController() { }

    [HttpGet] //Get all tribes
    public ActionResult<List<Tribe>> GetAll()
    {
        return Ok(value: GhanaianNamesService.GetAll());
    }

    [HttpGet] //Get one tribe using id param
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
