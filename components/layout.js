import Link from 'next/link';
import { useRouter } from 'next/router';
import About from 'C:/Users/kelvi/Downloads/hashtag-generator-app/pages/about.js';
import { AuthContextProvider } from 'C:/Users/kelvi/Downloads/hashtag-generator-app/context/AuthContext.js'

export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/',
      title: 'Homepage',
    },
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/challenge',
      title: 'Challange',
    },
    {
        href: '/signinpage',
        title: 'Login',
      },
  ];

  return (
    <div classnsame='min-h-screen flex flex-col'>
      <header className='bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
        Tiktok Analytic Dashboard
      </header>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-fuchsia-100 w-full md:w-60'>
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className='m-2' key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer ${
                        router.asPath === href && 'bg-fuchsia-600 text-white'
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}