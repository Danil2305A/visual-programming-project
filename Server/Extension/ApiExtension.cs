using Server.Endpoint;

namespace Server.Extension
{
    public static class ApiExtension
    {
        public static void AddMappendEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapUsersEndpoints();
            app.MapArticlesEndpoints();
            app.MapReviewEndpoints();
        }
    }
}
