using System.Collections.Generic;
using ghanaiannamesapi.server.Models;
using ghanaiannamesapi.server.Services;
using Microsoft.AspNetCore.Mvc;

namespace ghanaiannamesapi.Controllers;

[ApiController]
[Route("/api/[tribenames]")]
public class GhanaianNamesController : ControllerBase
{
    public GhanaianNamesController() { }

    [HttpGet]
    public ActionResult<List<Tribe>> Get()
    {
        return GhanaianNamesService.GetAllTribeNames();
    }

    [HttpGet("{id}")]
    public ActionResult<List<Dictionary<string, string>>> Get()
    {
        return GetGenderSpecificNames();
    }
}
