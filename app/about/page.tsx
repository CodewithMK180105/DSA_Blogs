import Head from 'next/head';

const About: React.FC = () => {
  return (
    <div className="px-8">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company and team." />
      </Head>
      <main className="min-h-screen py-16 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <p className="text-center my-16 text-xl">
          Welcome to our company! We are dedicated to providing the best service possible.
        </p>
        <section className="my-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to deliver high-quality products that bring value to our customers.
          </p>
        </section>
        <section className="my-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg">
            We have a diverse team of professionals who are passionate about what they do.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;