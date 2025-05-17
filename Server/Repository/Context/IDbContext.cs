namespace Server.Repository.Context
{
    public interface IDbContext<Model>
    {
        void Add(Model newItem);
        bool Update(Guid id, Model item);
        bool Remove(Guid id);
        Model? Get(Guid id);
        IEnumerable<Model> GetAll();
    }
}
