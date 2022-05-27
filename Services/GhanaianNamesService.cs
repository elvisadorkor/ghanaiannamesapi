using ghanaiannamesapi.Models;

namespace ghanaiannamesapi.Services;

public static class GhanaianNamesService
{
    static List<Tribe> Tribes {get; }
    static int nextId = 4;
    static GhanaianNamesService()
        {
            Tribes = new List<Tribe>
            {
            new Tribe {
                            id = 1,
                            Name = "Akan",
                            Region = "Ashanti, Western, Central, Eastern and Brong Ahafo Regions",
                            MaleDayNames = new Dictionary<string, List<string>>
                                {
                                    {"Sunday", new List<string> { "Kwesi" }},
                                    {"Monday", new List<string> { "Kwadwo" }},
                                    {"Tuesday", new List<string> { "Kwabena", "Ebo" }},
                                    {"Wednesday", new List<string> { "Kwaku", "Yooku"} },
                                    {"Thursday", new List<string> { "Yaw" }},
                                    {"Friday", new List<string> { "Kofi" }},
                                    {"Saturday", new List<string> { "Kwame" }}
                                },
                            FemaleDayNames = new Dictionary<string, List<string>>
                                {
                                    {"Sunday", new List<string> { "Akosua", "Esi" }},
                                    {"Monday", new List<string> { "Adwoa" }},
                                    {"Tuesday", new List<string> { "Abena" }},
                                    {"Wednesday", new List<string> { "Akua"} },
                                    {"Thursday", new List<string> { "Yaa" }},
                                    {"Friday", new List<string> { "Efua" }},
                                    {"Saturday", new List<string> { "Amba", "Ama" }}
                                }
                            
                    }
        };

        }

}