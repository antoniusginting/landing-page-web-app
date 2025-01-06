export default function Footer() {
return(<footer className="bg-gray-800 text-white py-4 sm:py-6">
  <div className="text-center">
    <p className="text-sm sm:text-base mb-2 sm:mb-4">
      &copy; 2025 My Web App. All rights reserved.
    </p>
    <div className="flex justify-center gap-4">
    <a href="https://github.com/antoniusginting"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white">
        Github
      </a>
      <a href="https://www.facebook.com/antoniusgin"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white">
        Facebook
      </a>
      <a href="https://www.instagram.com/antoniusginting13"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white">
        Instagram
      </a>  
    </div>
  </div>
</footer>);
}