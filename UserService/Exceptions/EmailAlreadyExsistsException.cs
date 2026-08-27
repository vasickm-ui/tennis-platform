namespace UserService.Exceptions;

public class EmailAlreadyExistsException : Exception
{
    public EmailAlreadyExistsException(string email) 
        : base($"Email {email} already exists!")
    {
        
    }
}
