import React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Divider } from "@mui/material";

function Shop() {
  return (
    <div>
      <div>
        <div>
          <img
            src="https://priyafoods.com/cdn/shop/files/Banner_1512x.jpg?v=1640768859"
            alt="img"
          />
        </div>
        <div className="grid grid-cols-2 pt-5 justify-between">
          <div></div>
          <div className="flex rounded-full text-sm text-gray-200">
            <span>Alphabetically,A-Z</span>
            <ExpandLessIcon />
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col bg-white">
              <div>
                <span>Search by name</span>
                <Divider />
              </div>
              <div className="flex box-border border-2 border-black">
                Search for product title
              </div>
            </div>
            <div> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
