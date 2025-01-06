export default function Home() {
    return (
      <div>
        <section
          className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center px-4 sm:px-8 md:px-12"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?technology,nature')",
          }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-md text-cyan-400">
            Welcome to My Web App
          </h2>
          <p className="text-md sm:text-xl mt-4 mb-6 drop-shadow-md text-cyan-400">
            Discover amazing products and learn more about us.
          </p>
          <button className="bg-cyan-500 text-md sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-cyan-800 transition duration-300 shadow-md">
            Get Started
          </button>
        </section>
      </div>
    );
  }
  