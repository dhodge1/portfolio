import Head from 'next/head'
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Spotlight from '../components/Spotlight/Spotlight';
import Collection from '../components/Collection/Collection';

export default function Home() {
  const header = {
    nav: {
      items: [
        { href: '#intro', text: 'intro', isActive: true },
        { href: '#spotlight', text: 'spotlight' },
        { href: '#experiments', text: 'experiments' },
      ],
    },
    avatar: {
      text: 'dav/d',
    },
  };

  const intro = {
    id: 'intro',
    title: {
      title: 'I make garbage.',
      className: '',
    },
    byline: {
      children: 'Hi, my name is ___',
      className: '',
    },
    description: {},
  };

  const spotlight = {
    id: 'spotlight',
    title: 'Spotlight',
    cards: [
      {
        img: {
          src: 'https://picsum.photos/300',
          alt: 'Avatar',
          width: 300,
          height: 200,
        },
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
      },
      {
        img: {
          src: 'https://picsum.photos/300',
          alt: 'Avatar',
          width: 300,
          height: 200,
        },
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
      },
      {
        img: {
          src: 'https://picsum.photos/300',
          alt: 'Avatar',
          width: 300,
          height: 200,
        },
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
      },
    ],
  };

  const collection = {
    id: 'experiments',
    title: 'Experiments',
    cards: [
      {
        img: {
          src: 'https://picsum.photos/300',
          alt: 'Avatar',
          width: 300,
          height: 300,
        },
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
      },
      {
        img: {
          src: 'https://picsum.photos/300',
          alt: 'Avatar',
          width: 300,
          height: 300,
        },
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
      },
      {
        img: {
          src: 'https://picsum.photos/300',
          alt: 'Avatar',
          width: 300,
          height: 300,
        },
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
      },
      {
        img: {
          src: 'https://picsum.photos/300',
          alt: 'Avatar',
          width: 300,
          height: 300,
        },
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
      },
      {
        img: {
          src: 'https://picsum.photos/300',
          alt: 'Avatar',
          width: 300,
          height: 300,
        },
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
      },
      {
        img: {
          src: 'https://picsum.photos/300',
          alt: 'Avatar',
          width: 300,
          height: 300,
        },
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
      },
      {
        img: {
          src: 'https://picsum.photos/300',
          alt: 'Avatar',
          width: 300,
          height: 300,
        },
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
      },
      {
        img: {
          src: 'https://picsum.photos/300',
          alt: 'Avatar',
          width: 300,
          height: 300,
        },
        title: 'Lorem, ipsum.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
      },
    ],
  };

  return (
    <>
      <Head>
        <title>dav/d</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header {...header} className="container mx-auto px-4 md:px-8" />
      <div className="container mx-auto px-4 md:px-8">
        <Intro {...intro} />
        <Spotlight {...spotlight} />
        <Collection {...collection} />
      </div>
    </>
  );
}
