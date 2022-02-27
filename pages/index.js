import Head from 'next/head'
import Countdown from '../components/Countdown'

const Home = () => {
  return (
    <div className="relative flex-col justify-center  ">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute top-0 my-4 flex w-full justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hover: h-6 w-6 fill-current transition "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
      <div className="flex h-screen w-full max-w-4xl">
        <Countdown />
      </div>

      <footer className="absolute bottom-0 my-10 flex w-full justify-center">
        <div>
          Did you like?
          <span className="font-medium"> Feel free to leave me feedbacks</span>
        </div>
        <div></div>
      </footer>
    </div>
  )
}

export default Home
