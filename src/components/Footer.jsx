import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <>
      <div style={{
        backgroundImage: `url('https://priyafoods.com/cdn/shop/files/bottom_strip_3000x.png?v=1632825707')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        height:'200px'
      }}></div>
      <footer
        className="bg-[#e51e25] text-white py-10 px-4 flex items-end"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 w-[1200px]">
          {/* Left Column: Links */}
          <div className="flex flex-col space-y-2">
            <a href="/" className="hover:text-gray-300 uppercase">
              Home
            </a>
            <a href="/products" className="hover:text-gray-300 uppercase">
              Shop
            </a>
            <a href="/about" className="hover:text-gray-300 uppercase">
              About Us
            </a>
            <a href="/services" className="hover:text-gray-300 uppercase">
              Contact
            </a>
          </div>

          {/* Middle Column: Policies */}
          <div className="flex flex-col space-y-2">
            <a href="/terms" className="hover:text-gray-300">
              Terms & Conditions
            </a>
            <a href="/shipping" className="hover:text-gray-300">
              Shipping Policy
            </a>
            <a href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="/refunds" className="hover:text-gray-300">
              Return & Refund Policy
            </a>
            <a href="/certifications" className="hover:text-gray-300">
              FSSAI
            </a>
          </div>

          {/* Right Column: Contact and Social Links */}
          <div className="flex flex-col space-y-4">
            <p className="text-sm">
              CONTACT US <br />
              040 2359 7777 <br />
              <a href="mailto:info@example.com" className="hover:text-gray-300">
                EMAIL: response@priyafoods.com{" "}
              </a>
            </p>
            <p className="text-sm">
              Write to us at: <br />
              Ushodaya Enterprises Pvt. Ltd. (Foods Division), <br />
              3rd Floor Corporate Building, Ramoji Film City
              <br />
              Anajpur Village, Hayathnagar Mandal <br />
              Ranga Reddy District Telangana State - 501512, India. <br />
              Zip Code.
            </p>
            <br />
            <p>Follow us on social media</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                <FacebookRoundedIcon />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-300">
                <TwitterIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300"
              >
                <InstagramIcon />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-300">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col space-y-4">
            <p className="text-lg">Newsletter Signup</p>
            <div className="flex items-center space-x-2 border border-white p-1">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full md:w-auto rounded-md bg-transparent text-white"
              />
              <button className="bg-white text-red-600 px-4 py-2  hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
