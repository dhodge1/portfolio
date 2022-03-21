import Link from 'next/link';
import Title from '../Title/Title';
import Byline from '../Byline/Byline';
import Description from '../Description/Description';
import DecoratedLink from '../DecoratedLink/DecoratedLink';

const Intro = ({ title, byline, description, id = null }) => {
  const linkProps = {
    href: '#',
    text: 'Fancy',
    className: '',
    color: 'after:bg-primary',
  };

  return (
    <div className="relative">
      <span id={id} className="invisible absolute -mt-20">
        .
      </span>
      <div className="flex flex-[1_0_auto] flex-col justify-center m-[2rem_0_4rem] lg:min-h-[500px]">
        <div className="flex flex-col">
          <Title {...title} className="mb-4 md:mb-8" />
          <Byline {...byline} className="mb-4 -order-1" />
          <Description {...description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              <DecoratedLink {...linkProps} /> cumque minima hic. <br /> totam
              corrupti rerum aliquam. Placeat.
            </p>
          </Description>
          <div className="flex mt-3">
            <Link href="https://github.com/dhodge1">
              <a target="_blank">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="mr-3 h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                  ></path>
                </svg>
              </a>
            </Link>
            <Link href="mailto:dhodge1@gmail.com">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </Link>
            <Link href="#">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
