namespace ghanaiannamesapi.server.Models;

public class TribeName
{
    public int Id { get; set; }
    public string Name { get; }
    public string Region { get; }

    public List<Dictionary<string, string>> Male { get; set; }
    public List<Dictionary<string, string>> Female { get; set; }
}
