import Card from "./TempCard";
import Filter from "./Filter";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import AutoScroll from "./AutoScroll";
import BannerSlider from "./BannerSlider";


const MainSection = () => {


  const [brands, setBrands] = useState([])
  const [priceRange, setsetPriceRange] = useState([])
  const [highAndLow, setHighAndLow] = useState("")
  const { category, searchTerm, users } = useContext(CartContext)
  const [shuffledData, setShuffledData] = useState([]);


  useEffect(() => {
    const userShuffled = users.sort(() => 0.5 - Math.random());
    setShuffledData(userShuffled)
  }, [])

  const filteredUsers = shuffledData.filter((item) => {

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
        return false;
      });

    return matchBrands && matchSearch && matchPrice

  });


  let finalData = [...filteredUsers];

  if (highAndLow === "low") {
    finalData.sort((a, b) => a.price - b.price);
  } else if (highAndLow === "high") {
    finalData.sort((a, b) => b.price - a.price);
  }



  if (category !== "All") {
    finalData = finalData.filter((item) => {
      return item.category === category || item.subCategory === category;
    });
  }





  return (
    <>
    <div >
      <BannerSlider />
      <AutoScroll />

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 p-4">
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


        <div className="fixed bottom-12  m-3 bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 hover:scale-110 transition">
          <Filter setBrands={setBrands} brands={brands} setPriceRange={setsetPriceRange} setHighAndLow={setHighAndLow} highAndLow={highAndLow} priceRange={priceRange} />
        </div>
      </div>
    </div>
    </>
  );
};

export default MainSection;