using Server.Service;
using Server.Model;

namespace Server.Endpoint
{
    public static class ReviewEndpoints
    {
        public static void MapReviewEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/reviews");

            group.MapGet("/", (ReviewService service) =>
            {
                var reviews = service.GetAll();
                return Results.Ok(reviews);
            });

            // Заменяем int на Guid
            group.MapGet("/{id:guid}", (Guid id, ReviewService service) =>
            {
                var review = service.Get(id);
                return review is not null ? Results.Ok(review) : Results.NotFound();
            });

            group.MapPost("/", (Review review, ReviewService service) =>
            {
                var result = service.Add(review);
                return result ? Results.Created($"/reviews/{review.Id}", review) : Results.BadRequest();
            });

            // Заменяем int на Guid
            group.MapPut("/{id:guid}", (Guid id, Review updated, ReviewService service) =>
            {
                var result = service.Update(id, updated);
                return result ? Results.NoContent() : Results.NotFound();
            });

            // Заменяем int на Guid
            group.MapDelete("/{id:guid}", (Guid id, ReviewService service) =>
            {
                var result = service.Remove(id);
                return result ? Results.NoContent() : Results.NotFound();
            });
        }
    }
}