namespace UserService.Events;

public class UserRegisteredEvent
{
    public string EventType { get; set; } = "UserRegistered";
    public int UserId { get; set; }
    public string Email { get; set; } = string.Empty;
}