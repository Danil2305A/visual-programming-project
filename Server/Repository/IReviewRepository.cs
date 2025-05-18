using Server.Model;

namespace Server.Repository
{
    public interface IReviewRepository
    {
        bool Add(Review review);
        Review? Get(Guid id);
        IEnumerable<Review> GetAll();
        bool Update(Guid id, Review updatedReview);
        bool Remove(Guid id);
    }
}