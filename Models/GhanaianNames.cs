namespace ghanaiannamesapi.Models;

public class Tribe
{
    public int id {get; set; }
    public string Name {get; }
    public string Region {get; }

    public Dictionary<string, string[]> MaleDayNames {get; set; }
    public Dictionary<string, string[]> FemaleDayNames {get; set; } 
}