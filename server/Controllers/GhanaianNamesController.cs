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

    // [HttpGet] //Get one tribe using id param and a specific gender
    // [Route(template: "{id}", "{gender}")]
    // public ActionResult<List<string>> GetTribeGenderNames(int id, string gender)
    // {
    //     List<string> GenderNames = GhanaianNamesService.GetTribeGenderNames(id: id, gender: gender);
    //     if (GenderNames == null)
    //     {
    //         return NotFound();
    //     }
    //     return Ok(value: GenderNames);
    // }
}
