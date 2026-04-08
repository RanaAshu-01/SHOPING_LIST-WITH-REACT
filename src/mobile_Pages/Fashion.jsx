import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Card from "../componets/common/TempCard";
import HeroSection from '../componets/common/FashinHeroSection';

const Fashion = () => {
   const { products } = useContext(CartContext)

    const fashionFilter = products.filter((item) => {
        const fashionCategories = ["mens-shoes", "mens-shirts", "mens-watches", "womens-watches", "sunglasses", "tops"]
        let matchFashion = fashionCategories.includes(item.category)

        return matchFashion
    })


    return (
        <>
          <HeroSection/>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 p-4">
            { fashionFilter.length > 0 ? (
                 fashionFilter.map((elem) => (
                    <Card
                        key={elem.id}
                        id={elem.id}
                        image={elem.images[0]}
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
        </>
    )
}

export default Fashion