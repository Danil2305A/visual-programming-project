using Server.Model;
using Server.Repository.Context;

namespace Server.Repository
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly IDbContext<Review> _db;

        public ReviewRepository(IDbContext<Review> db)
        {
            _db = db;
        }

        public bool Add(Review review)
        {
            var exists = _db.GetAll().Any(r =>
                r.ArticleId == review.ArticleId &&
                r.ReviewerId == review.ReviewerId);

            if (exists) return false;

            _db.Add(review);
            return true;
        }

        public Review? Get(Guid id) => _db.Get(id);

        public IEnumerable<Review> GetAll() => _db.GetAll();

        public bool Update(Guid id, Review updatedReview)
        {
            updatedReview.LastUpdate = DateTime.UtcNow;
            return _db.Update(id, updatedReview);
        }

        public bool Remove(Guid id) => _db.Remove(id);
    }
}