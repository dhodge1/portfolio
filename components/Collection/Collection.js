import Card from '../Card/Card';

const Collection = ({ cards, title = null, id = null }) => {
  return (
    <div className="relative">
      <span id={id} className="invisible absolute -mt-20">
        .
      </span>
      <div className="mb-[4rem]">
        {title && (
          <h1 className={`font-serif bold text-3xl md:text-4xl mb-10`}>
            {title}
          </h1>
        )}
        <div className="grid w-full gap-12 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {cards.map((card) => (
            <Card {...card} key={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
