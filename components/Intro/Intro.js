import Title from '../Title/Title';
import Byline from '../Byline/Byline';
import Description from '../Description/Description';
import DecoratedLink from '../DecoratedLink/DecoratedLink';

const Intro = ({ title, byline, description }) => {
  const linkProps = {
    href: '#',
    text: 'Fancy',
    className: '',
    color: 'after:bg-primary',
  };

  return (
    <div className="flex flex-[1_0_auto] flex-col justify-center p-[2rem_0_4rem] min-h-[500px]">
      <div className="flex flex-col">
        <Title {...title} className="mb-8" />
        <Byline {...byline} className="mb-4 -order-1" />
        <Description {...description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            <DecoratedLink {...linkProps} /> cumque minima hic. <br /> totam
            corrupti rerum aliquam. Placeat.
          </p>
        </Description>
      </div>
    </div>
  );
};

export default Intro;
