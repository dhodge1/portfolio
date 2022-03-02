import Image from 'next/image';

const Avatar = ({ img, text }) => {
  const { src, alt, width, height } = img;
  return (
    <div className="flex flex-row items-center">
      {img && (
        <div className="mr-2">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-full"
          />
        </div>
      )}
      {text && <p className="font-bold">{text}</p>}
    </div>
  );
};

export default Avatar;
