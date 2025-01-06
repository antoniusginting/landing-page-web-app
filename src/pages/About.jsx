export default function About() {
    return (
      <div className="p-4 sm:p-8 bg-white min-h-screen">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          About Us
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
          Welcome to My Web App! We aim to provide the best products and services
          for our customers. Feel free to contact us if you have any questions or
          suggestions.
        </p>
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h3 className="text-lg sm:text-2xl font-bold mb-4">Contact Us</h3>
          <p>
            Email:{" "}
            <a href="antoniusginting13@gmail.com" className="text-blue-500 hover:underline">
              antoniusginting13@gmail.com
            </a>
          </p>
          <p>Phone: <span className="text-blue-500">+6285156266240</span></p>
          <p>Address: Jalan Jamin Ginting No 211A</p>
        </div>
      </div>
    );
  }
  