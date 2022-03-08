import Image from 'next/image';

const Card = ({ img, title, description }) => {
  const { src, alt, width, height } = img;
  const textClass =
    ' relative opacity-0 transition-opacity group-hover:opacity-100 group-hover:transform-none hover:translate-x-0 hover:translate-y-0';
  return (
    <div className="group rounded relative block overflow-hidden text-background grayscale-0 hover:cursor-pointer hover:grayscale hover:drop-shadow-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
      />
      <div className="absolute px-2.5 flex top-0 left-0 w-full h-full text-left flex-col justify-center opacity-0 invisible transition-all group-hover:visible group-hover:opacity-100">
        <h3 className={`${textClass} font-bold`}>{title}</h3>
        <p className={textClass}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
