import { useState } from "react";

export const Pickle = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Handle mouse enter
  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClick = (itemName) => {
    alert(`${itemName} clicked`);
  };
  return (
    <div className="pt-10">
      <div className="bg-gradient-to-r from-rose-50 to-red-100">
        <div className="flex justify-center items-center text-2xl pt-10 text-yellow-500 font-semibold">
          Handpicked to satisfy your pickle cravings
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-4 justify-items-center pt-5">
            {/* Tomato Pickle */}
            <div className="pt-4">
              <div className="flex flex-col items-center">
                <div
                  className="relative w-44 h-full overflow-hidden bg-white flex justify-center items-center hover:shadow-2xl transition-shadow duration-300"
                  onMouseEnter={() => handleMouseEnter("TOMATO PICKLE")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("TOMATO PICKLE")}
                >
                  <img
                    src="https://cdn.zeptonow.com/production///tr:w-600,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/9b99e8a4-18ce-407a-9ca8-3ae6939f1e1e.jpeg"
                    alt="Tomato Pickle"
                    className={`max-w-full max-h-full object-contain transform transition-transform duration-300 ease-in-out ${
                      hoveredItem === "TOMATO PICKLE"
                        ? "scale-110"
                        : "scale-100"
                    }`} // Zoom effect
                  />
                  {hoveredItem === "TOMATO PICKLE" && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300">
                      <button className="bg-white text-sm text-black h-[5vh] w-[8vw] rounded-full mb-2 transition-colors duration-300 hover:bg-black hover:text-white">
                        Quick View
                      </button>
                      {/* <RemoveRedEyeIcon className={`transition-transform duration-300 ${showIcons ? "rotate-0" : "rotate-[-90deg]"}`} /> */}
                      <button className="bg-white text-sm text-black  h-[5vh] w-[8vw] rounded-full transition-colors duration-300 hover:bg-black hover:text-white">
                        Quick Shop
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-sm text-black pt-5">TOMATO PICKLE</span>
                <span className="pt-1 text-gray-500">
                  Rs.100.00 - Rs.306.90
                </span>
              </div>
            </div>

            {/* Gongura Pickle */}
            <div className="pt-4">
              <div className="flex flex-col items-center">
                <div
                  className="relative w-44 h-full overflow-hidden bg-white flex justify-center items-center hover:shadow-2xl transition-shadow duration-300"
                  onMouseEnter={() => handleMouseEnter("GONGURA PICKLE")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("GONGURA PICKLE")}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7f_AxvJgRcReivKaigazCqwtigQw2O1F9Jg&s"
                    alt="Gongura Pickle"
                    className={`max-w-full max-h-full object-contain transform transition-transform duration-300 ease-in-out ${
                      hoveredItem === "GONGURA PICKLE"
                        ? "scale-110"
                        : "scale-100"
                    }`} // Zoom effect
                  />
                  {hoveredItem === "GONGURA PICKLE" && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300">
                      <button className="bg-white text-sm text-black h-[5vh] w-[8vw] rounded-full mb-2 transition-colors duration-300 hover:bg-black hover:text-white">
                        Quick View
                      </button>
                      {/* <RemoveRedEyeIcon className={`transition-transform duration-300 ${showIcons ? "rotate-0" : "rotate-[-90deg]"}`} /> */}
                      <button className="bg-white text-sm text-black  h-[5vh] w-[8vw] rounded-full transition-colors duration-300 hover:bg-black hover:text-white">
                        Quick Shop
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-sm text-black pt-5">GONGURA PICKLE</span>
                <span className="pt-1 text-gray-500">
                  Rs.100.00 - Rs.306.90
                </span>
              </div>
            </div>

            {/* Mango Avakaya Pickle */}
            <div className="pt-4">
              <div className="flex flex-col items-center">
                <div
                  className="relative w-44 h-full overflow-hidden bg-white flex justify-center items-center hover:shadow-2xl transition-shadow duration-300"
                  onMouseEnter={() => handleMouseEnter("MANGO AVAKAYA PICKLE")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("MANGO AVAKAYA PICKLE")}
                >
                  <img
                    src="https://priyafoods.com/cdn/shop/products/MangoAvakayaWG300g.jpg?v=1689145579"
                    alt="Mango Avakaya Pickle"
                    className={`max-w-full max-h-full object-contain transform transition-transform duration-300 ease-in-out ${
                      hoveredItem === "MANGO AVAKAYA PICKLE"
                        ? "scale-110"
                        : "scale-100"
                    }`} // Zoom effect
                  />
                  {hoveredItem === "MANGO AVAKAYA PICKLE" && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300">
                      <button className="bg-white text-sm text-black h-[5vh] w-[8vw] rounded-full mb-2 transition-colors duration-300 hover:bg-black hover:text-white">
                        Quick View
                      </button>
                      {/* <RemoveRedEyeIcon className={`transition-transform duration-300 ${showIcons ? "rotate-0" : "rotate-[-90deg]"}`} /> */}
                      <button className="bg-white text-sm text-black  h-[5vh] w-[8vw] rounded-full transition-colors duration-300 hover:bg-black hover:text-white">
                        Quick Shop
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-sm text-black pt-5">
                  MANGO AVAKAYA PICKLE
                </span>
                <span className="pt-1 text-gray-500">
                  Rs.100.00 - Rs.306.90
                </span>
              </div>
            </div>

            {/* Cut Mango Pickle */}
            <div className="pt-4">
              <div className="flex flex-col items-center">
                <div
                  className="relative w-44 h-full overflow-hidden bg-white flex justify-center items-center hover:shadow-2xl transition-shadow duration-300"
                  onMouseEnter={() => handleMouseEnter("CUT MANGO PICKLE")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick("CUT MANGO PICKLE")}
                >
                  <img
                    src="https://fetchnbuy.in/cdn/shop/files/51NSqTdBfSL._SX679_grande.jpg?v=1689942931"
                    alt="Cut Mango Pickle"
                    className={`max-w-full max-h-full object-contain transform transition-transform duration-300 ease-in-out ${
                      hoveredItem === "CUT MANGO PICKLE"
                        ? "scale-110"
                        : "scale-100"
                    }`} // Zoom effect
                  />
                  {hoveredItem === "CUT MANGO PICKLE" && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300">
                      <button className="bg-white text-sm text-black h-[5vh] w-[8vw] rounded-full mb-2 transition-colors duration-300 hover:bg-black hover:text-white">
                        Quick View
                      </button>
                      {/* <RemoveRedEyeIcon className={`transition-transform duration-300 ${showIcons ? "rotate-0" : "rotate-[-90deg]"}`} /> */}
                      <button className="bg-white text-sm text-black  h-[5vh] w-[8vw] rounded-full transition-colors duration-300 hover:bg-black hover:text-white">
                        Quick Shop
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-sm text-black pt-5">
                  CUT MANGO PICKLE
                </span>
                <span className="pt-1 text-gray-500">
                  Rs.110.00 - Rs.306.90
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* View more button */}
        <div className="flex justify-center items-center pt-5 pb-5">
          <button className="flex justify-center items-center border-white rounded-full h-12 w-36 bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition-colors duration-300">
            View more
          </button>
        </div>

        {/* Display selected pickle */}
        {/* {selectedPickle && (
          <div className="flex justify-center items-center pt-5 text-lg text-green-700 font-bold">
            You selected: {selectedPickle}
          </div>
        )} */}
      </div>
    </div>
  );
};
