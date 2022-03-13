import Card from '../Card/Card';

const Collection = ({ cards }) => {
  return (
    <div className="grid w-full gap-12 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
      {cards.map((card) => (
        <Card {...card} key={card.title} />
      ))}
    </div>
  );
};

export default Collection;
