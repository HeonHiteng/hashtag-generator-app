import Link from 'next/link';
import { useRouter } from 'next/router';
import About from 'C:/Users/kelvi/Downloads/hashtag-generator-app/pages/about.js';
import { AuthContextProvider } from 'C:/Users/kelvi/Downloads/hashtag-generator-app/context/AuthContext.js'
import {
  HomeIcon,
  InformationCircleIcon,
  LightningBoltIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'
import PredictForm from 'C:/Users/kelvi/Downloads/hashtag-generator-app/pages/predictpage.js';



export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/',
      title: 'Homepage',
      icon: HomeIcon,
    },
    {
      href: '/about',
      title: 'Video Analyse',
      icon: InformationCircleIcon,
    },
    {
      href: '/challenge',
      title: 'Challenge',
      icon: LightningBoltIcon,
    },
    {
      href: '/signinpage',
      title: 'Sign In',
      icon: UserCircleIcon,
    },
    {
      href: '/predictpage',
      title: 'Predict',
      icon: UserCircleIcon,
    },
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
        Tiktok Analytic Dashboard
      </header>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-blue-900 w-full md:w-60 shadow-lg'>
          <nav>
            <ul>
              {menuItems.map(({ href, title, icon: Icon }) => (
                <li className='m-2' key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-2 bg-blue-800 rounded hover:bg-blue-700 cursor-pointer ${
                        router.asPath === href && 'bg-blue-700 text-white'
                      }`}
                    >
                      <Icon className='w-6 h-6 mr-2 text-white' />
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