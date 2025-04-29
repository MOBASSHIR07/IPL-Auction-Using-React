
import logo from '../../assets/logo.png'; 
import banner from '../../assets/banner-main.png'
import bgshadow from '../../assets/bg-shadow.png'

const Header = ({claimFreecoin,coin}) => {

    // const [coin,setCoin] = useState(0);
    // const claimFreecoin = () => {
    
    //     setCoin(prevCoin => prevCoin + 60000000);
    // };



    return (
        <>
        <div className="header-container flex justify-between items-center  p-4">
            <div className="logo-container">
                <img src={logo} alt="Website Logo" />
            </div>
            <div className="nav-links  flex gap-4 items-center">
                <h1>Home</h1>
                <h1>Fixture</h1>
                <h1>Teams</h1>
                <h1>Schedules</h1>
                <div className='flex items-center bg-amber-50 p-2 rounded-2xl shadow-2xl'>
                <h1>
                    {coin} Coin   </h1>
                    <img className='h-6 '
                        src="https://img.icons8.com/?size=100&id=OFHwDWASQWmX&format=png&color=000000" 
                        alt="Coin icon" 
                    />
                </div>
              
            </div>
        </div>


        <div className='relative p-10 ml-13'>
           <img src={bgshadow} alt="" />
            </div>
          
        
           
           <div className='p-10 ml-13'>
           <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
<img className='transform translate-x-[50%]' src={banner} alt="" />
           <div className='text-center'>
           <h1 className='text-2xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p>Beyond Boundaries Beyond Limits</p>
            
            <button onClick={claimFreecoin} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-8 rounded-full transition duration-300">
            Claim Free Coins
</button>

           </div>
</div>

           
           </div>
        


        
        </>
        
    );
};

export default Header;