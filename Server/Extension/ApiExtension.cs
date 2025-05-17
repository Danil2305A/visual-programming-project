using Microsoft.EntityFrameworkCore;
using Server.Endpoint;
using Server.Model;
using Server.Repository;
using Server.Repository.Context;
using Server.Service;

namespace Server.Extension
{
    public static class ApiExtension
    {
        public static void AddMappendEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapArticlesEndpoints();
        }
    }
}
