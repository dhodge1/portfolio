import Image from 'next/image';
import DecoratedLink from '../DecoratedLink/DecoratedLink';

const FeaturedCard = ({ img, title, description }) => {
  const { src, alt, width, height } = img;
  const linkProps = {
    href: '#',
    text: title,
    className:
      'decorated-link font-serif bold text-2xl mb-3 text-text self-start',
    color: 'after:bg-primary',
  };
  return (
    <li className="relative grid grid-cols-12 gap-2.5 shadow-lg items-center md:shadow-none md:odd:alternate-feature">
      <div className="featured-content p-[40px_40px_30px] text-left flex flex-col justify-center h-full z-[5] relative row-start-1 row-end-1 col-span-full md:col-[1_/_8] md:row-span-full">
        <DecoratedLink {...linkProps} />
        <div className="md:p-6 md:bg-border md:rounded overflow-hidden md:shadow-lg text-border md:text-text">
          <p className="">{description}</p>
        </div>
      </div>
      <div className="featured-image col-span-full h-full opacity-80 shadow-xl row-start-1 row-end-1 z-[1] rounded overflow-hidden relative md:col-[6_/_-1] md:row-span-full">
        <Image
          className=""
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
        />
      </div>
    </li>
  );
};

export default FeaturedCard;
