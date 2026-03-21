import Card from "./TempCard";
import HeroSection from "./HeroSection";
import Filter from "./Filter";
import { useState } from "react";

const MainSection = ({ users, searchTerm }) => {


  const [brands, setBrands] = useState([])
  const [priceRange, setsetPriceRange] = useState([])
  const [highAndLow, setHighAndLow] = useState("")


  const filteredUsers = users.filter((item) => {

    let matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
    let matchBrands = brands.length === 0 || brands.includes(item.Brand);

    const matchPrice =
      priceRange.length === 0 ||
      priceRange.some((range) => {

        if (range === "0-100") {
          return item.price <= 100;
        }
        if (range === "100-500") {
          return item.price > 100 && item.price <= 500;
        }
        if (range === "500-1000") {
          return item.price > 500 && item.price <= 1000;
        }
        if (range === "1000+") {
          return item.price > 1000;
        }

      });

    return matchBrands && matchSearch && matchPrice

  });


  let finalData = [...filteredUsers];

  if (highAndLow === "low") {
    finalData.sort((a, b) => a.price - b.price);
  } else if (highAndLow === "high") {
    finalData.sort((a, b) => b.price - a.price);
  }



  return (
    <div>
      <HeroSection searchTerm={searchTerm} />

      <div className="relative">
        <div className="flex flex-wrap justify-center">
          {finalData.length > 0 ? (
            finalData.map((elem) => (
              <Card
                key={elem.id}
                id={elem.id}
                image={elem.image}
                title={elem.title}
                price={elem.price}
              />
            ))
          ) : (
            <h2 className="text-xl mt-10 text-gray-500">
              No products found 😢
            </h2>
          )}
        </div>

        {/* Floating Filter Button */}
        <div className="fixed bottom-10  m-3 bg-green-500 p-3 rounded-full hover:bg-green-600 hover:scale-110 transition">
          <Filter setBrands={setBrands} setPriceRange={setsetPriceRange} setHighAndLow={setHighAndLow} highAndLow={highAndLow} />
        </div>
      </div>
    </div>
  );
};

export default MainSection;