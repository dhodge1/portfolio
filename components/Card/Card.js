import Link from 'next/link';
import Image from 'next/image';

const Card = ({ img, title, description, href = '#' }) => {
  const { src, alt, width, height } = img;
  const textClass =
    'relative opacity-0 transition-opacity group-hover:opacity-100 group-hover:transform-none hover:translate-x-0 hover:translate-y-0';
  return (
    <Link href={href}>
      <a>
        <div className="group rounded relative block overflow-hidden transition-all ease-in-out text-background hover:bg-secondary bg-transparent hover:cursor-pointer md:hover:scale-110">
          <Image
            className="mix-blend-multiply grayscale-0 hover:grayscale hover:contrast-100 hover:brightness-90 hover:drop-shadow-lg"
            src={src}
            alt={alt}
            width={width}
            height={height}
            layout="responsive"
          />
          <div className="absolute flex top-0 left-0 w-full h-full text-left flex-col justify-end px-4 pb-4 opacity-0 invisible transition-all group-hover:visible group-hover:opacity-100">
            <h3 className={`${textClass} font-bold`}>{title}</h3>
            <p className={textClass}>{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
