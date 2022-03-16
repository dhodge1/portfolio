import Head from 'next/head'
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Collection from '../components/Collection/Collection';

export default function Home() {
  const header = {
    nav: {
      items: [
        { href: '#intro', text: 'first', isActive: true },
        { href: '#experiments', text: 'second' },
        { href: '#third', text: 'third' },
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
        <Collection {...collection} />
      </div>
    </>
  );
}
