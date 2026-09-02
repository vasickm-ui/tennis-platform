namespace UserService.Exceptions;

public class UserDoesNotExistsException : Exception
{
    public UserDoesNotExistsException() 
        : base($"User does not exists!")
    {
        
    }
}
