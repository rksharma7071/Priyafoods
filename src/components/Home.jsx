import React, { useEffect } from "react";
import SlickSlider from "./SlickSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Foods } from "./Foods";
import { Seller } from "./Seller";
import { Pickle } from "./Pickle";
import Slider from "react-slick";

function Home() {
  var settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(()=>{
    document.title="Priya Foods | Buy Pickles, Masalas, Instant Mixes, Roti Pachadi Online";
  }, [])
  return (
    <>
      <SlickSlider />
      <div className="bg-white pt-7">
        <div className="flex justify-center items-center text-2xl pt-5 text-yellow-500 font-semibold">
          There's something for everyone
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 bg-white pt-5">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center">
                <img
                  className="object-contain rounded-2xl h-[300px] w-[100%]"
                  src="//priyafoods.com/cdn/shop/files/The_Go-getter_720x.jpg?v=1651340826"
                  alt="The Go-Getter"
                />
              </div>
              <span className="text-lg pt-3 text-black font-semibold">
                The Go-Getter
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center">
                <img
                  className="object-contain rounded-2xl h-[300px] w-[100%]"
                  src="//priyafoods.com/cdn/shop/files/The_Master_Chef_720x.jpg?v=1651340811"
                  alt="The Master Chef"
                />
              </div>
              <span className="text-lg pt-3 text-black font-semibold">
                The Master Chef
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center">
                <img
                  className="object-contain rounded-2xl h-[300px] w-[100%]"
                  src="//priyafoods.com/cdn/shop/files/The_Healthy_One_720x.jpg?v=1651340777"
                  alt="The Healthy One"
                />
              </div>
              <span className="text-lg pt-3 text-black font-semibold">
                The Healthy One
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <img
          className="h-[50vh] w-full"
          src="https://priyafoods.com/cdn/shop/files/b_2_1512x.jpg?v=1632811777"
          alt="img"
        />
      </div>
      <Foods />
      <div className="pt-16">
        <img
          className="w-[100vw] h-[60vh]"
          src="https://priyafoods.com/cdn/shop/collections/Roti_Pachadi_900x.jpg?v=1668865183"
          alt="img"
        />
      </div>

      <Seller />
      <div className="pt-7">
        <Pickle />
        <div>
          <div className="flex justify-center items-center text-2xl pt-10 text-yellow-500 font-semibold">
            The Priya Promise
          </div>
          <div className="pt-7 flex justify-center items-center">
            <img
              src="https://priyafoods.com/cdn/shop/files/1500_x_500_1950x_b8a91c0d-6d47-4e3b-8616-8afc7420e589_2700x.jpg?v=1651482905"
              alt="img"
            />
          </div>
        </div>
      </div>

      <div className="bg-white pt-10">
        <span className="flex text-sm text-black justify-center items-center ">
          Traditional food is timeless. It is not only deeply nourishing, it is
          a pleasure to savour, and share! Nothing beats the enticing aroma of a
          slowly simmering pot of sambar
        </span>
        <span className="flex text-sm text-black justify-center items-center">
          {" "}
          rice, the tempting look of the red hot mango pickle, or the
          soul-warming deliciousness of the tangy rasam. Truth be told,
          traditional recipes are no less than precious
        </span>
        <span className="flex text-sm text-black justify-center items-center">
          {" "}
          heirlooms passed down from generation to generation!
        </span>

        <span className="flex text-sm text-black justify-center items-center pt-7">
          Priya Foods has its roots in tradition. A tradition of good, wholesome
          food prepared with minimally processed ingredients in a manner as
          close as possible to how your
        </span>
        <span className="flex text-sm text-black justify-center items-center">
          {" "}
          great-grandmother would have made it for you. With love, with
          diligence, and with no room for the slightest compromise - be it in
          the goodness of the ingredients, in the
        </span>
        <span className="flex text-sm text-black justify-center items-center">
          {" "}
          method of preparation, or in the time taken.
        </span>

        <span className="flex text-sm text-black justify-center items-center pt-7">
          Priya Foods brings to you and to your family...the Joy of Traditional
          Taste! In particular, Telugu taste from the two states of Telangana
          and Andhra Pradesh. Because we
        </span>
        <span className="flex text-sm text-black justify-center items-center">
          {" "}
          believe that the beauty of food nostalgia keeps hearts connewed
          wherever we are. Our recipes, the spices and ingredients we pick, the
          methods we follow, even the
        </span>
        <span className="flex text-sm text-black justify-center items-center">
          {" "}
          implements we use, are the kind that would get the nod of approval
          from even the purists.
        </span>

        <span className="flex text-sm text-black justify-center items-center pt-7">
          Established in 1980 with the aim of reintroducing authentic,
          traditional Telugu dishes to busy Indian households, Priya Foods has
          managed to find a place in Indian kitchens
        </span>
        <span className="flex text-sm text-black justify-center items-center">
          {" "}
          across the country. Especially sought after, Priya Foods' Chutneys and
          Pickles serve nostalgia along with delectability to the Indian
          diaspora across the world.
        </span>

        <span className="flex text-sm text-black justify-center items-center pt-7">
          Priya Foods' state-of-the-art manufacturing facility holding multiple
          national and international certifications is an ode to its commitment
          to freshness, quality, hygiene, and
        </span>
        <span className="flex text-sm text-black justify-center items-center">
          {" "}
          safety. Priya Foods has successfully integrated traditional science
          with modern-day scientific manufacturing to keep the Telugu culinary
          flag flying high unfazed by time
        </span>
        <span className="flex text-sm text-black justify-center items-center">
          {" "}
          and distance. And all this comes at a price point that delivers value
          beyond expectations in order to enable every Indian culinary lover to
          bring home the real taste of Indian
        </span>
        <span className="flex text-sm text-black justify-center items-center">
          cuisine, hospitality, and trust{" "}
        </span>
      </div>
      <div className="pt-7">
        <div className="flex justify-center items-center text-2xl pt-5 text-yellow-500 font-semibold">
          Customer Delight
        </div>
        <div className="grid grid-cols-2 pt-5 pl-36 h-[40vh] w-[80vw] pb-5">
          <div className="flex flex-col box-border border  justify-center items-center">
            <span className="flex text-sm text-gray-400">
              I'm on the go almost all the time & Priya's new Quick
            </span>
            <span className="flex text-sm text-gray-400">
              {" "}
              Foods range has been a savior! All the products are easy
            </span>
            <span className="flex text-sm text-gray-400">
              {" "}
              to make,healthy,tasty-even my mother would approve!
            </span>
            <span className="flex justify-center items-center text-sm text-black font-semibold pt-7">
              Niharika B, Architect
            </span>
          </div>

          <div className="flex flex-col box-border border  justify-center items-center">
            <span className="flex text-sm text-gray-400">
              I'm on the go almost all the time & Priya's new Quick
            </span>
            <span className="flex text-sm text-gray-400">
              {" "}
              Foods range has been a savior! All the products are easy
            </span>
            <span className="flex text-sm text-gray-400">
              {" "}
              to make,healthy,tasty-even my mother would approve!
            </span>
            <span className="flex justify-center items-center text-sm text-black font-semibold pt-7">
              Niharika B, Architect
            </span>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="bg-red-50 flex h-[50vh]  w-[100vw] justify-center items-center pt-5 pb-5 px-32 overflow-x-auto mb-4 gap-40">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <img
                src="//priyafoods.com/cdn/shop/files/home-icons3_720x.jpg?v=1657867745"
                alt="Home Icon"
                className="object-contain"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
            <span className="text-gray-500 font-semibold text-lg pt-2">
              Fast Shipping
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <img
                src="//priyafoods.com/cdn/shop/files/home-icons2_720x.jpg?v=1657867769"
                alt="Home Icon"
                className="object-contain"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>

            <span className="text-gray-500 font-semibold text-lg pt-2">
              Safe Payment
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <img
                src="//priyafoods.com/cdn/shop/files/home-icons4_720x.jpg?v=1657867784"
                alt="Home Icon"
                className="object-contain"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>

            <span className="text-gray-500 font-semibold text-lg pt-2">
              24*7 Support
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <img
                src="//priyafoods.com/cdn/shop/files/home-icons1_180x.jpg?v=1657867802"
                alt="img"
                className="object-contain"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>

            <span className="text-gray-500 font-semibold text-lg pt-2">
              Spill Prof Packaging
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center   items-center text-2xl pt-5 text-yellow-500 font-semibold bg-white">
        Follow us on Instagram
      </div>
      <div className=" pt-12 pb-20">
        {/* Header Section */}
        <div className="flex flex-col bg-gray-100 w-full">
          {/* Title Section */}
          <div className="font-semibold flex justify-center text-2xl text-yellow-500 pt-7">
            BLOGS
          </div>

          {/* Image Section */}
          <div className="w-full mx-auto">
            <div className="pt-5">
              <Slider {...settings1}>
                {/* //first// */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkw5FfZUqPrDDnckLtcnVZXTC7j2oYb7D09A&s"
                    alt="Exploring the cultural and traditional roots of Roti Pachadi"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Set a fixed height here
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Exploring the cultural and traditional
                    </p>
                    <p className="text-black font-semibold">
                      roots of Roti Pachadi
                    </p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        August 23, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Exploring the cultural and traditional roots
                    </p>
                    <p className="text-gray-400">
                      of Roti Pachadi, the warm embrace of
                    </p>
                    <p className="text-gray-400">
                      Indian kitchens, where tradition...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>

                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaE8PRZ0Kp_SmE1-ysiLFwmV9bE8OpCBLWA&s"
                    alt="Spicing up your dishes: Innovative uses of Priya Masalas"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Spicing up your dishes: Innovative
                    </p>
                    <p className="text-black font-semibold">
                      uses of Priya Masalas
                    </p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        June 25, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Fresh, homemade foods. Perfect weather. A
                    </p>
                    <p className="text-gray-400">
                      family weekend. What's missing? A little
                    </p>
                    <p className="text-gray-400">
                      spice? Welcome to flavourful...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Priya_1st_blog_banner_for_June_1600x.jpg?v=1718881291"
                    alt="5 quick and easy instant mixes for a healthy breakfast"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      5 quick and easy instant mixes for a
                    </p>
                    <p className="text-black font-semibold">
                      healthy breakfast
                    </p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        June 20, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Early mornings, busy mornings, lazy
                    </p>
                    <p className="text-gray-400">
                      mornings! How do we make them
                    </p>
                    <p className="text-gray-400">
                      interesting and healthy? Priya Foods is the
                    </p>
                    <p className="text-gray-400">answer...</p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  pl-7 items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqXycFYm_Yj3QUYI80kyPVwDESNNh_KyL6A&s"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Ever find yourself wishing you could whip up
                    </p>
                    <p className="text-gray-400">
                      something deliciously authentic without
                    </p>
                    <p className="text-gray-400">spending all day over a hot</p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                {/* //second// */}
                <div className="flex flex-col  pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Travel_with_Priya_360x.jpg?v=1716814420"
                    alt="Exploring the cultural and traditional roots of Roti Pachadi"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Set a fixed height here
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold ">
                      Travel with Priya - Take your comfort
                    </p>
                    <p className="text-black font-semibold ">
                      food wherever you go!
                    </p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 27, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Home is where heart is.And the heart is{" "}
                    </p>
                    <p className="text-gray-400">
                      where comfort food is..Travelling is a
                    </p>
                    <p className="text-gray-400">
                      thrilling advanture for multi...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/WhatsApp_Image_2024-04-23_at_5.45.22_PM_360x.jpg?v=1714454779"
                    alt="Spicing up your dishes: Innovative uses of Priya Masalas"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Spicing up your dishes: Innovative
                    </p>
                    <p className="text-black font-semibold">
                      uses of Priya Masalas
                    </p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        June 25, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      {" "}
                      Ah, the arrival of summer means the return of mangoes,
                      filling the air with their sweet fragrance and stirring up
                      m...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Why_is_ammamma_always_right_Let_s_find_out_360x.jpg?v=1713874700"
                    alt="5 quick and easy instant mixes for a healthy breakfast"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      5 quick and easy instant mixes for a
                    </p>
                    <p className="text-black font-semibold">
                      healthy breakfast
                    </p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        June 20, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      There's something magical about those summer holidays,
                      isn't there? The laughter echoing through the halls, the
                      sme...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Mango-vavakaya_pickle_360x.jpg?v=1710331468"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Summer is when the days stretch lazily, the streets come
                      alive with the tinkling bells of ice gola carts, and the
                      k...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                {/* //third// */}
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/On_the_trail_of_Telugu_land_s_traditional_Culinary_Powders_360x.jpg?v=1706772054"
                    alt="Exploring the cultural and traditional roots of Roti Pachadi"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Set a fixed height here
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Exploring the cultural and traditional
                    </p>
                    <p className="text-black font-semibold">
                      roots of Roti Pachadi
                    </p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        August 23, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      South Indian cuisine, particularly Telugu cuisine, is
                      celebrated for its intricate flavours and unique spice
                      blends...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>

                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Go_On_A_Time_Travel_With_Roti_Pachadis_360x.jpg?v=1706771869"
                    alt="Spicing up your dishes: Innovative uses of Priya Masalas"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Spicing up your dishes: Innovative
                    </p>
                    <p className="text-black font-semibold">
                      uses of Priya Masalas
                    </p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        June 25, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      As you step into the quaint village home of your
                      grandparents, the familiar, enticing aromas wafting from
                      the kitch...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Priya-foods_84045124-de07-4a06-9ab2-86540f3938e7_360x.jpg?v=1704263041"
                    alt="5 quick and easy instant mixes for a healthy breakfast"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      5 quick and easy instant mixes for a
                    </p>
                    <p className="text-black font-semibold">
                      healthy breakfast
                    </p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        June 20, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      In today's fast-paced and health-conscious world, food
                      preferences and dietary needs are getting more and more
                      dive...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src=" https://priyafoods.com/cdn/shop/articles/Panner_360x.jpg?v=1703848539"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Picture this: You are racing against time, your stomach’s
                      grumbling, your taste buds are asking for something
                      flavo...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                {/* //fourth// */}
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Priya_Foods-_Black_Pepper_Powder_360x.jpg?v=1702637862"
                    alt="Exploring the cultural and traditional roots of Roti Pachadi"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Set a fixed height here
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Exploring the cultural and traditional
                    </p>
                    <p className="text-black font-semibold">
                      roots of Roti Pachadi
                    </p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        August 23, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      THE INDIAN SPICE ODYSSEY In the grand tapestry of world
                      cuisine, Indian spices boast a spectrum of flavours that
                      tr...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>

                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Priya_Foods-_Gongura_Pickle_360x.jpg?v=1702637615"
                    alt="Spicing up your dishes: Innovative uses of Priya Masalas"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Spicing up your dishes: Innovative
                    </p>
                    <p className="text-black font-semibold">
                      uses of Priya Masalas
                    </p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        June 25, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      GONGURA PICKLE: TRADITIONAL INDIAN CUISINE AT ITS ZESTY
                      BEST! Welcome to the piquant pages of Indian pickles,
                      where...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Priya-Foods-Diwli_360x.jpg?v=1698816669"
                    alt="5 quick and easy instant mixes for a healthy breakfast"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      5 quick and easy instant mixes for a
                    </p>
                    <p className="text-black font-semibold">
                      healthy breakfast
                    </p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        June 20, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Deepavali or Diwali, India’s ‘Festival of Lights,’ is one
                      of the most celebrated festivals in the country. But
                      beyo...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Explore_The_Exquisite_Festive_Dishes_Of_India_360x.jpg?v=1698211059"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      EXPLORE THE EXQUISITE FESTIVE DISHES OF INDIA Festivals in
                      India are not just about rituals and celebrations; they
                      ...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                {/* //fifth/ */}
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/What_s_Life_Without_Some_Masal_360x.jpg?v=1695800871"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Indian cuisine is celebrated for its rich and diverse
                      flavours, and at the heart of this culinary tradition lies
                      th...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Priya_Foods_Blog_-_Telangana_Cuisine_360x.jpg?v=1694598491"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Picture this: You are savouring a warm, freshly-made jowar
                      roti or jonna rotte, its tender texture and smoky aroma
                      ...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Sibling-blog_360x.jpg?v=1692968952"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      In the colourful tapestry of Indian festivals, Rakhi or
                      Rakshabandhan stands as a sparkling gem that celebrates
                      the...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Independence_day-blog_360x.jpg?v=1692006508"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      As we hoist the tricolour on the momentous occasion of our
                      Independence Day on August 15th, we are reminded of the
                      ...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                {/* //sixth// */}
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Moonsoon_360x.jpg?v=1690353723"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Raindrops streaking down the window pane, a fragrant
                      breeze, a cosy ambience and a thrilling book to read. What
                      els...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/5_Millets_360x.jpg?v=1689659453"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Rainy days can be a mood dampener, but they don't have to
                      be a digestive downpour, if we pay adequate attention to
                      ...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Roti_360x.jpg?v=1687169763"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      If you have ever been to a typical Telugu village, you
                      would recall with fondness, the fragrance of Nature at its
                      p...{" "}
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Masalas_360x.jpg?v=1686574817"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Indian cuisine is a sensory gastronomic journey through a
                      veritable tapestry of vibrant flavours, aromatic spices,
                      ...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                {/* //seventh// */}
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Winning-receipes_from_priya_s_millet_360x.jpg?v=1686305899"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Once staple traditional crops, millets lost ground rapidly
                      to wheat, rice and maize that have ruled the world and
                      o...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Summer-the-aroma_of_mango_pickle_360x.jpg?v=1686304520"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      It’s Summer. The season of lazy afternoons, family
                      gatherings, childhood innocence, and…mangoes! The king of
                      fruits...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Badam-milk-mixer_360x.jpg?v=1685101741"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      Indian parents and their unwavering belief in the power of
                      homemade goodness is legendary! Whenit comes to fizzy
                      &amp;a...
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pl-7 items-center">
                  <img
                    src="https://priyafoods.com/cdn/shop/articles/Mothersday_360x.jpg?v=1683799374"
                    alt="Effortless flavor: Priya Foods' pastes for busy cooks!"
                    className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:brightness-105 w-full h-60 flex-shrink-0" // Same fixed height
                  />
                  <div className="text-sm pt-4 text-center">
                    <p className="text-black font-semibold">
                      Effortless flavor: Priya Foods' pastes
                    </p>
                    <p className="text-black font-semibold">for busy cooks!</p>
                    <p className="text-gray-400 pt-2">
                      By{" "}
                      <span className="text-black font-semibold">
                        Priya Foods
                      </span>{" "}
                      on{" "}
                      <span className="text-black font-semibold">
                        May 31, 2024
                      </span>
                    </p>
                    <p className="text-gray-400 pt-4">
                      We are heading towards Mother's Day, which gives us the
                      perfect chance to turn to the first person we ever loved,
                      a...{" "}
                    </p>
                    <p className="text-lg text-black pt-7 hover:text-red-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
