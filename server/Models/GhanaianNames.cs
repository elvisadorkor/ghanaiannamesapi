namespace ghanaiannamesapi.server.Models;

public class Tribe
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Region { get; set; }
    public Dictionary<string, List<string>> MaleNames { get; set; }
    public Dictionary<string, List<string>> FemaleNames { get; set; }
}
