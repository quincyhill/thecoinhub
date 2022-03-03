import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <section className="relative flex flex-row justify-center">
        <img className="w-full h-96 bg-green-200" />
        <div className="container flex flex-row absolute top-0 m-8">
          <div className="w-1/2 flex flex-col">
            <span className="font-semibold text-4xl">
              Discover Crypto, trade NFTs
            </span>
            <span className="text-lg text-slate-700">
              The Coinhub is the marketplace for such activities
            </span>
            <div className="flex flex-row">
              <button className="bg-teal-500 py-2 px-8 m-2 rounded-md text-white hover:bg-teal-600 hover:shadow-md">
                Explore
              </button>
              <button className="border-2 border-teal-500 m-2 py-2 px-8 rounded-md text-teal-500 hover:border-teal-600 hover:text-teal-600 hover:shadow-md">
                Create
              </button>
            </div>
          </div>
          {/* this is going to be a card so eventaully move it to its own component */}
          <div className="w-1/2 flex flex-row bg-green-200">
            <div className="w-full flex flex-col">
              <img className="h-24 bg-green-400" />
              <div className="flex flex-row">
                <div className="mr-2">
                  <img className="w-12 h-12 rounded-full bg-rose-200" />
                </div>
                <div className="flex flex-col">
                  <span>Artpiece Name</span>
                  <span>User</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
