import FeaturedCard from '../FeaturedCard/FeaturedCard';

const Spotlight = ({ cards, title = null, id = null }) => {
  return (
    <div className="relative">
      <span id={id} className="invisible absolute -mt-20">
        .
      </span>
      <div className="mb-[4rem] md:mb-[10rem]">
        {title && (
          <h1 className={`font-serif bold text-3xl md:text-4xl mb-10`}>
            {title}
          </h1>
        )}
        <ul className="grid w-full gap-12 grid-cols-1 group">
          {cards.map((card) => (
            <FeaturedCard {...card} key={card.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Spotlight;
