using Server.Model;
using Server.Repository;

namespace Server.Service
{
    public class ReviewService
    {
        private readonly IReviewRepository _repository;

        public ReviewService(IReviewRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<Review> GetAll() => _repository.GetAll();

        // Заменяем int на Guid
        public Review? Get(Guid id) => _repository.Get(id);

        public bool Add(Review review) => _repository.Add(review);

        // Заменяем int на Guid
        public bool Update(Guid id, Review updated) => _repository.Update(id, updated);

        // Заменяем int на Guid
        public bool Remove(Guid id) => _repository.Remove(id);
    }
}