import Card from '../Card/Card';

const Collection = ({ cards }) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {cards.map((card) => (
        <Card {...card} key={card.title} />
      ))}
    </div>
  );
};

export default Collection;
