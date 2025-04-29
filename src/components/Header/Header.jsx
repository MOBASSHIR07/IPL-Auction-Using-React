import logo from '../../assets/logo.png';
import banner from '../../assets/banner-main.png';
import bgshadow from '../../assets/bg-shadow.png';

const Header = ({ claimFreecoin, coin }) => {
  return (
    <>
      {/* Header Nav */}
      <div className="header-container flex flex-col sm:flex-row justify-between items-center p-4">
        <div className="logo-container mb-4 sm:mb-0">
          <img src={logo} alt="Website Logo" className="h-10 sm:h-12" />
        </div>

        <div className="nav-links flex flex-wrap justify-center gap-4 items-center text-sm sm:text-base">
          <h1>Home</h1>
          <h1>Fixture</h1>
          <h1>Teams</h1>
          <h1>Schedules</h1>

          <div className="flex items-center bg-amber-50 p-2 rounded-2xl shadow-2xl">
            <h1 className="mr-2">{coin} Coin</h1>
            <img
              className="h-6"
              src="https://img.icons8.com/?size=100&id=OFHwDWASQWmX&format=png&color=000000"
              alt="Coin icon"
            />
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative w-full h flex flex-col items-center justify-center text-center px-4 py-6">
      <img
  src={bgshadow}
  alt="Background Shadow"
  className="w-full h-[200px] sm:h-[280px] md:h-[350px] object-cover"
/>

        {/* Banner, Text & Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <img
            src={banner}
            alt="Banner"
            className="w-2/3 sm:w-1/2 max-w-[300px] mb-4"
          />
          <h1 className="text-base sm:text-xl md:text-2xl font-semibold  drop-shadow-lg">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-sm md:text-base drop-shadow-md">
            Beyond Boundaries Beyond Limits
          </p>
          <button
            onClick={claimFreecoin}
            className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-6 md:px-8 rounded-full transition duration-300"
          >
            Claim Free Coins
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
