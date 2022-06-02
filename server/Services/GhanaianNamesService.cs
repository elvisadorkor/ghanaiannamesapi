using ghanaiannamesapi.server.Models;

namespace ghanaiannamesapi.server.Services;

public static class GhanaianNamesService
{
    static List<Tribe> Tribes { get; }

    static GhanaianNamesService()
    {
        //AKAN NAMES
        Dictionary<string, List<string>> AkanMaleNames = new Dictionary<string, List<string>>()
        {
            {
                "Sunday",
                new List<string> { "Kwesi", "Kwasi", "Akwasi", "Akwesi" }
            },
            {
                "Monday",
                new List<string> { "Kwadwo", "Kojo" }
            },
            {
                "Tuesday",
                new List<string> { "Kwabena", "Ebo" }
            },
            {
                "Wednesday",
                new List<string> { "Kwaku", "Yooku", "Kuuku" }
            },
            {
                "Thursday",
                new List<string> { "Yaw", "Kwaw", "Ekow" }
            },
            {
                "Friday",
                new List<string> { "Kofi", "Yoofi", "Fiifi", "Fii" }
            },
            {
                "Saturday",
                new List<string> { "Kwame" }
            }
        };
        Dictionary<string, List<string>> AkanFemaleNames = new Dictionary<string, List<string>>()
        {
            {
                "Sunday",
                new List<string> { "Esi", "Akosua", "Akos" }
            },
            {
                "Monday",
                new List<string> { "Adwoa" }
            },
            {
                "Tuesday",
                new List<string> { "Abena", "Maabena" }
            },
            {
                "Wednesday",
                new List<string> { "Akua", "Kuukua" }
            },
            {
                "Thursday",
                new List<string> { "Yaa", "Yaaba", "Aba" }
            },
            {
                "Friday",
                new List<string> { "Afua", "Efua" }
            },
            {
                "Saturday",
                new List<string> { "Amba", "Ama" }
            }
        };

        //EWE NAMES
        Dictionary<string, List<string>> EweMaleNames = new Dictionary<string, List<string>>()
        {
            {
                "Sunday",
                new List<string> { "Kosi" }
            },
            {
                "Monday",
                new List<string> { "Kwadwo", "Kudjoe" }
            },
            {
                "Tuesday",
                new List<string> { "Korbla" }
            },
            {
                "Wednesday",
                new List<string> { "Korku" }
            },
            {
                "Thursday",
                new List<string> { "Yao" }
            },
            {
                "Friday",
                new List<string> { "Kofi" }
            },
            {
                "Saturday",
                new List<string> { "Kwami" }
            }
        };
        Dictionary<string, List<string>> EweFemaleNames = new Dictionary<string, List<string>>()
        {
            {
                "Sunday",
                new List<string> { "Esse", "Essenam", "Esiman" }
            },
            {
                "Monday",
                new List<string> { "Adjo" }
            },
            {
                "Tuesday",
                new List<string> { "Abla" }
            },
            {
                "Wednesday",
                new List<string> { "Aku" }
            },
            {
                "Thursday",
                new List<string> { "Aba" }
            },
            {
                "Friday",
                new List<string> { "Afi" }
            },
            {
                "Saturday",
                new List<string> { "Ama" }
            }
        };

        //GA NAMES


        Tribes = new List<Tribe>
        {
            new Tribe() //Akan
            {
                Id = 1,
                Name = "Akan",
                Region = "Ashanti, Western, Central, Eastern, and Brong Ahafo",
                MaleNames = AkanMaleNames,
                FemaleNames = AkanFemaleNames
            },
            new Tribe() //Ewe
            {
                Id = 2,
                Name = "Ewe",
                Region = "Volta",
                MaleNames = EweMaleNames,
                FemaleNames = EweFemaleNames
            }
        };
    }

    //Function to return all tribes. Later it should return names for a single tribe
    public static List<Tribe> GetAll()
    {
        Console.WriteLine("here");
        return Tribes;
    }

    //Function to get one tribe given an id
    public static Tribe GetOneTribe(string tribe)
    {
        Tribe selectedTribe = Tribes.FirstOrDefault(predicate: t => t.Name == tribe);
        return selectedTribe;
    }

    //Function to get one tribe and specific gender names
    public static Dictionary<string, List<string>> GetTribeGenderNames(string tribe, string gender)
    {
        Tribe selectedTribe = Tribes.FirstOrDefault(predicate: t => t.Name == tribe);

        if (gender == "Male")
        {
            Dictionary<string, List<string>> GenderNames = selectedTribe.MaleNames;
            return GenderNames;
        }
        else
        {
            Dictionary<string, List<string>> GenderNames = selectedTribe.FemaleNames;
            return GenderNames;
        }
    }
}
