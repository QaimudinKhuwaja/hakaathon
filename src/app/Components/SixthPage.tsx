import Image from 'next/image';
import road from '../assets/road.png'; 
import carr from '../assets/carr.png';
import umbrella from '../assets/umbrella.png'; 

// Card Component
const Card = ({ imageSrc }) => {
  return (


    <>
    <div className="w-full md:w-[328px] h-[606px] bg-white rounded-lg shadow-lg overflow-hidden mb-4"> {/* mb-4 adds spacing between cards */}
      {/* Image Section */}
      <div className="relative w-full h-[300px]">
        <Image 
          src={imageSrc} 
          alt="Card Image" 
          layout="fill" 
          objectFit="cover" 
        />
        <div className="absolute top-0 left-0 m-2 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
          NEW
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex justify-start space-x-3 p-3 text-sm text-gray-600">
        <span>Google Trending</span>
        <span>&bull;</span>
        <span>New</span>
      </div>

      {/* Heading */}
      <h3 className="px-3 text-lg font-semibold text-black">
        Loudest à la Madison #1 (L'integral)
      </h3>

      {/* Paragraph */}
      <p className="px-3 py-2 text-sm text-gray-700">
        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
      </p>

      {/* Footer Section */}
      <div className="flex justify-between items-center px-3 py-2 text-sm text-gray-500">
        <span>22 April 2021</span>
        <span>10 comments</span>
      </div>

      {/* Learn More Button */}
      <div className="px-3 pb-3">
        <button className="w-full py-2 text-[#737373] text-sm font-medium rounded transition-all text-left">
          Learn More
        </button>
      </div>
    </div>
    </>
  );
};

// Parent Container with Cards
const CardLayout = () => {
  return (
    <>
    <div className="text-center mt-10">
              <h2 className='text-[#737373] text-xl'>Featured Products</h2>
          <h1 className="text-3xl sm:text-1xl font-bold mt-[8px]"> Featured Posts</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
          Problems trying to resolve the conflict between 
             </p>
          </div>
    <div className="flex flex-col justify-center items-center min-h-screen p-4 mt-[30px]">
      <div className="flex flex-wrap justify-center gap-4">
        <Card imageSrc={road} />         
        <Card imageSrc={carr} />  
        <Card imageSrc={umbrella} />    
      </div>
    </div>
    </>
  );
}

export default CardLayout;
