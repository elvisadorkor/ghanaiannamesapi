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

    // [HttpGet(template: "{id}")] //Get one tribe using id param
    // public ActionResult<Tribe> GetOneTribe(string id)
    // {
    //     Tribe selectedTribe = GhanaianNamesService.GetOneTribe(id);
    //     if (selectedTribe == null)
    //     {
    //         return NotFound();
    //     }
    //     return Ok(value: selectedTribe);
    // }

    [HttpGet(template: "{tribe}")] //Get one tribe using id param and a specific gender using Model Binding
    public ActionResult<List<string>> Get(string tribe, string gender)
    {
        Dictionary<string, List<string>> GenderNames = GhanaianNamesService.GetTribeGenderNames(
            tribe: tribe,
            gender: gender
        );
        if (GenderNames == null)
        {
            return NotFound();
        }
        return Ok(value: GenderNames);
    }
}
