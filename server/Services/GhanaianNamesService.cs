using System.Collections.Generic;
using ghanaiannamesapi.server.Models;

namespace ghanaiannamesapi.server.Services;

public static class GhanaianNamesService
{
    static List<TribeName> Tribes { get; }
    static int nextId = 2;
    static GhanaianNamesService() => GhanaianNames = new List<TribeName>
        {
        new Tribe
        {
            Id = 1,
            Name = "Akan",
            Region = "Ashanti, Western, Central, Eastern, and Brong Ahafo Regions",
            Male ={{ "Sunday", "Kwesi" },{ "Monday", "Kwadwo" },{ "Tuesday", "Kwabena, Ebo" },{ "Wednesday", "Kwaku, Yooku" },{ "Thursday", "Yaw" },{ "Friday", "Kofi" },{ "Saturday", "Kwame" }},
            Female =
            {{"Sunday","Akosua, Esi"},{"Monday","Adwoa"},{"Tuesday","Abena"},{"Wednesday","Akua"},{"Thursday","Yaa"},{"Friday","Efua"},{"Saturday","Amba, Ama"}
            }
        }
    };

    //Get all male and female names for a given tribe
    public static List<TribeName> GetAllTribeNames(string tribeName) =>
        GhanaianNames.FirstOrDefault(n => n.Name == tribeName);

    //Get gender-specific names for a trine
    public static List<Dictionary<string, string>> GetGenderSpecificNames(string tribeName, string gender)
    {
        var tribe = GhanaianNames.FirstOrDefault(t => t.Name == tribeName);
        var gender = tribe.gender;
    }
}

