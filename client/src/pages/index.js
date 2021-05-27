import ContactBar from '@components/ContactBar';
import Image from 'next/image';
import HomeData from '@content/home.json';

export default function Home({ taglines }) {
  return (
    <>
      <div
      // className="flex justify-center items-center flex-col"
      >
        <Image
          src="assets/shrimp.png"
          alt="picture of my succulent"
          width={200}
          height={200}
        />
        <h1 className="leading-relaxed text-6xl font-bold">
          Hi! I&rsquo;m{' '}
          <span className="text-shadow text-dark-spring-green">Sam Ping</span>,
          a...
        </h1>
        <ul className="flex flex-col items-center">
          {taglines.map((tagline) => (
            <li key={tagline.position} className="leading-normal text-lg">
              {tagline.position} @{' '}
              <a
                href={tagline.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline"
              >
                {tagline.place}
              </a>
            </li>
          ))}
        </ul>
        <ContactBar />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      taglines: HomeData.taglines,
    },
  };
}
