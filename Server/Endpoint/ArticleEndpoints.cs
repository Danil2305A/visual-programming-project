using Server.Model;
using Server.Service;
using Server.Contracts;

namespace Server.Endpoint
{
    public static class ArticleEndpoints
    {
        public static IEndpointRouteBuilder MapArticlesEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapGet("/articles", GetAllArticles);
            app.MapGet("/articles/{id}", GetArticleById);
            app.MapGet("/articles/file/{id}", GetArticleFileById);

            app.MapPost("/articles", AddNewArticle);
            app.MapPost("/articles/file/{id}", AddNewArticleFile);

            app.MapPut("/articles/{id}", ChangeArticleData);

            app.MapDelete("/articles/{id}", RemoveArticle);

            return app;
        }

        public static IResult GetAllArticles(ArticleService articleService)
        { return Results.Ok(articleService.GetAll()); }

        public static IResult GetArticleById(Guid id, ArticleService articleService)
        {
            var article = articleService.Get(id);
            if (article != null)
                return Results.Ok(new Dictionary<string, object?>
                {
                    { "id", id.ToString() },
                    { "title", article.Title },
                    { "category", article.Category },
                    { "description", article.Description },
                    { "tags", article.Tags },
                    { "userId", article.UserId },
                    { "createdAt", article.CreatedAt },
                    { "lastUpdate", article.LastUpdate }
                });
            return Results.NotFound();
        }

        public static IResult GetArticleFileById(Guid id, ArticleService articleService)
        {
            var article = articleService.Get(id);
            if (article != null)
            {
                using var fileStream = new FileStream(article.ArticleName, FileMode.Open, FileAccess.Read);
                return Results.Ok(new FormFile(fileStream, 0, fileStream.Length, "file", fileStream.Name));
            }
            return Results.NotFound();
        }

        public static async Task<IResult> AddNewArticle(Article article, ArticleService articleService)
        {
            //var article = await request.ReadFromJsonAsync<ArticleRequest>();
            if (articleService.Add(article.Title, article.Category, article.Description, article.UserId, article.ArticleName, article.Tags))
                return Results.Created();
            return Results.Conflict();
        }

        public static IResult AddNewArticleFile(Guid id, HttpRequest request, ArticleService articleService)
        {
            articleService.AddFile(id, request.Form.Files[0]);
            return Results.Created();
        }

        public static IResult ChangeArticleData(Guid id, Article article, ArticleService articleService)
        {
            if (articleService.Update(id, article.Title, article.Category, article.Description, article.ArticleName, article.Tags))
                return Results.Ok();
            return Results.NotFound();
        }

        public static IResult RemoveArticle(Guid id, ArticleService articleService)
        {
            if (articleService.Remove(id))
                return Results.Ok();
            return Results.NotFound();
        }
    }
}
