using Server.Model;
using Server.Repository;

namespace Server.Service
{
    public class ArticleService
    {
        private readonly IArticleRepository _articleRepository;
        public string ArticlesPath { get; private set; }

        public ArticleService(IArticleRepository articleRepository, string articleDir)
        {
            _articleRepository = articleRepository;
            ArticlesPath = $"{Directory.GetCurrentDirectory()}/{articleDir}";
            Directory.CreateDirectory(articleDir);
        }

        public bool Add(string title, string category, string description, Guid userId, string articleName, List<string>? tags = null)
        {
            var filePath = $"{ArticlesPath}/{title}{userId}{articleName}";
            return _articleRepository.Add(title, category, description, userId, filePath, tags);
        }

        public async void AddFile(Guid id, IFormFile articleFile)
        {
            var article = _articleRepository.Get(id);
            if (article != null)
            {
                var filePath = $"{ArticlesPath}/{article.Title}{article.UserId}{articleFile.FileName}";
                var fileStream = new FileStream(filePath, FileMode.Create);
                await articleFile.CopyToAsync(fileStream);
                fileStream.Close();
            }
        }

        public bool Remove(Guid id)
        {
            var fileName = _articleRepository.Get(id)?.ArticleName;
            if (fileName != null)
            {
                _articleRepository.Remove(id);
                File.Delete(fileName);
                return true;
            }
            return false;
        }

        public bool Update(Guid id, string title, string category, string description, string articleName, List<string>? tags)
        {
            var oldArticle = _articleRepository.Get(id);
            if (oldArticle != null)
            {
                File.Delete(oldArticle.ArticleName);
                var filePath = $"{ArticlesPath}/{title}{oldArticle.UserId}{articleName}";
                _articleRepository.Update(id, title, category, description, filePath, tags);
                return true;
            }
            return false;
        }

        public Article? Get(Guid id)
        { return _articleRepository.Get(id); }

        public IEnumerable<Article>? GetAll()
        { return _articleRepository.GetAll(); }
    }
}
