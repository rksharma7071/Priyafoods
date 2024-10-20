import { useState } from "react";
import { Navigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Foods = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  // const navigate = Navigate();

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

  const [hover, setHover] = useState(false);
  const [imageClicked, setImageClicked] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  // Product data
  const products = [
    {
      id: 1,
      name: "QUICK MILLET UPMA",
      price: "Rs.20.00-Rs.65.00",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6lp7yz_ZraSAOmcUoEgoyXOkmz04PWOgUA&s",
    },
    {
      id: 2,
      name: "QUICK PULIHORA POHA",
      price: "Rs.40.00-Rs.65.00",
      imgSrc:
        "https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_1.jpg?v=1703309863",
    },
    {
      id: 3,
      name: "QUICK UPMA",
      price: "Rs.40.00-Rs.65.00",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTwqKKPW_0DR0YH6pzTAI7in66EJnafUEjQ&s",
    },
    {
      id: 4,
      name: "QUICK MILLET POHA",
      price: "Rs.20.00-Rs.65.00",
      imgSrc:
        "https://priyafoods.com/cdn/shop/files/MILLETPOHA_1_1500x.jpg?v=1703309944",
    },
    {
      id: 4,
      name: "QUICK POHA",
      price: "Rs.40.00-Rs.65.00",
      imgSrc: "https://priyafoods.com/cdn/shop/files/POHA_1.jpg?v=1703309893",
    },
  ];

  return (
    <div className="bg-white pt-7">
      <div className="flex justify-center  items-center text-2xl pt-7 text-yellow-500 font-semibold">
        Just Launched
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-5 justify-items-center">
          {products.map((item) => (
            <div key={item.id} className="pt-4">
              <div className="flex flex-col items-center">
                <div className="relative w-42 h-36 rounded-md overflow-hidden border bg-white shadow-black shadow-md flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain"
                    onClick={() => Navigate(`/FoodProduct/${item.id}`)}
                  />
                  <div
                    className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 bg-black bg-opacity-70 ${
                      showIcons ? "opacity-100" : "opacity-0"
                    }`}
                    onMouseEnter={() => setShowIcons(true)}
                    onMouseLeave={() => setShowIcons(false)}
                  >
                    <button className="bg-white text-sm text-black h-[5vh] w-[8vw] rounded-full mb-2 transition-colors duration-300 hover:bg-black hover:text-white">
                      Quick View
                    </button>
                    <RemoveRedEyeIcon
                      className={`transition-transform duration-300 ${
                        showIcons ? "rotate-0" : "rotate-[-90deg]"
                      }`}
                    />
                    <button className="bg-white text-sm text-black  h-[5vh] w-[8vw] rounded-full transition-colors duration-300 hover:bg-black hover:text-white">
                      Quick Shop
                    </button>
                    <ShoppingCartIcon
                      className={`transition-transform duration-300 ${
                        showIcons ? "rotate-0" : "rotate-[-90deg]"
                      }`}
                    />
                  </div>
                </div>
                <span className="text-sm text-black pt-5 text-center">
                  {item.name}
                </span>
                <span className="pt-1 text-gray-500 text-center">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
