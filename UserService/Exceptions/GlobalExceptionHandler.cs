using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using UserService.Exceptions;

namespace UserService.Exceptions;

public class GlobalExceptionHandler : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext,
        Exception exception,
        CancellationToken cancellationToken)
    {
        if (exception is EmailAlreadyExistsException)
        {
            httpContext.Response.StatusCode = StatusCodes.Status409Conflict;

            await httpContext.Response.WriteAsJsonAsync(
                new
                {
                    message = "Email already exists."
                },
                cancellationToken);

            return true;
        }

        return false;
    }
}