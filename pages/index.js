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
      title: 'I make stuff.',
      className: '',
    },
    byline: {
      children: 'Hey, my name is dav/d',
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
          src: '/discosuite.png',
          alt: 'Discovery',
          width: 300,
          height: 200,
        },
        title: 'Discovery CORE',
        href: 'https://www.discovery.com/',
        description:
          'Scalable sitebuilder platform consisting of an extensible theming system + component library + custom content management systems used to build rich multimedia & commerce experiences across the full suite of Discovery brands including the Discovery, HGTV, Food Network & Travel Channel.',
      },
      {
        img: {
          src: '/fnk.png',
          alt: 'Food Network Kitchen',
          width: 300,
          height: 200,
        },
        title: 'Food Network Kitchen',
        href: 'https://kitchen.foodnetwork.com/#/get-cooking',
        description:
          'Direct-to-consumer web app built with GraphQL + Next.js + React + Styled Components that offered live streaming cooking classes, interactive Q&A, shopping lists & personalized meal planning. Supported by a standalone subscription + user management SPA written in Vue.',
      },
      {
        img: {
          src: '/magnolia.png',
          alt: 'Magnolia',
          width: 300,
          height: 200,
        },
        title: 'Magnolia',
        href: 'https://magnolia.com/',
        description:
          'Express API + Next.js web client + headless Shopify client supporting personalized workshops, interactive multimedia experiences and commerce across a variety of platforms supported that offer the Magnolia Network.',
      },
    ],
  };

  const collection = {
    id: 'experiments',
    title: 'Experiments',
    cards: [
      {
        img: {
          src: '/scraper.png',
          alt: 'Product Scraper Extension',
          width: 300,
          height: 300,
        },
        title: 'Product Ingest Extension',
        description:
          'Neat little chrome extension to scrape product metadata for affiliate commerce purposes.',
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
