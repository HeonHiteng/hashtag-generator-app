// pages/index.js
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>

      <main>
        <section>
          <h1>Welcome to My Next.js App</h1>
          <p>
            This is a simple home page created using Next.js. Feel free to
            explore the app!
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} My Next.js App</p>
      </footer>
    </div>
  );
};

export default About;