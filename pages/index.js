import Head from 'next/head'
import Countdown from '../components/Countdown'
import Social from '../components/Social'
import useDarkMode from '../components/useDarkMode'

const Home = () => {
  const [colorTheme, setTheme] = useDarkMode()
  return (
    <div className="relative flex justify-center dark:bg-black">
      <div className="flex h-screen w-full max-w-7xl flex-col">
        <Head>
          <title>Luigi's Birthday Countdown</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="z-10 mx-10 mt-10 flex cursor-pointer justify-end">
          {colorTheme === 'light' ? (
            <svg
              onClick={() => setTheme('light')}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8  stroke-white "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setTheme('dark')}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </div>
        <div className="-mt-36 flex h-full w-full">
          <Countdown />
        </div>
        <footer className="absolute bottom-0 mb-10 flex-col self-center">
          <div className="flex select-none justify-center dark:text-white">
            Did you like?
            <span className="ml-1 select-none font-medium">
              Feel free to leave me feedbacks
            </span>
          </div>
          <div className="flex justify-center">
            <Social />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
