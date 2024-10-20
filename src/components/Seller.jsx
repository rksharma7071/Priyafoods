import { useState } from "react";

export const Seller = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Handle hover enter
  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  // Handle hover leave
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const products = [
    {
      name: "INSTANT PULIHORA PASTE",
      price: "Rs.50.00-Rs.78.00",
      image:
        "https://priyafoods.com/cdn/shop/files/PulihoraPaste_1_1200x1200.jpg?v=1702112360",
    },
    {
      name: "BIRYANI MASALA PASTE - 100G (PACK OF 2)",
      price: "Rs.80.00",
      image: "https://m.media-amazon.com/images/I/61-atdzawZL.jpg",
    },
    {
      name: "NON VEG CURRY MASALA PASTE - 100G (PACK OF 2)",
      price: "Rs.70.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrEXkesYr6d2UdxRU1oh4mf3HMBoX_FKwIA&s",
    },
    {
      name: "VEG CURRY MASALA PASTE - 100G (PACK OF 2)",
      price: "Rs.70.00",
      image:
        "https://priyafoods.com/cdn/shop/files/100gVegcurryMasalaPastesFront.jpg?v=1703226806",
    },
  ];

  return (
    <div className="bg-white pt-7 ">
      <div className="flex justify-center items-center text-2xl pt-5 text-yellow-500 font-semibold">
        BEST SELLER
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-4 pt-5 gap-4 justify-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative pt-4"
              onMouseEnter={() => handleMouseEnter(product.name)} // Hover enter
              onMouseLeave={handleMouseLeave} // Hover leave
            >
              {/* Product image */}
              <div className="flex flex-col items-center">
                <div className="w-52 h-54 border-2 bg-white shadow-black shadow-md border-white flex justify-center items-center cursor-pointer relative transition-transform transform duration-300 ease-in-out rounded-none">
                  {" "}
                  {/* Removed rounded */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`max-w-full max-h-full object-contain transform transition-transform duration-300 ease-in-out ${
                      hoveredItem === product.name ? "scale-110" : "scale-100"
                    }`}
                  />
                  {/* Conditionally rendered overlay (on hover) */}
                  {hoveredItem === product.name && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-50 text-black text-sm transition-opacity duration-300 ease-in-out">
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

                {/* Product name and price */}
                <span className="text-sm text-black pt-5 text-center">
                  {product.name}
                </span>
                <span className="pt-1 text-gray-500 text-center">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
