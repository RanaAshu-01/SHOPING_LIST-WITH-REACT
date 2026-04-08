import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import Card from "../componets/common/TempCard";

const Mobile = () => {

    const { products } = useContext(CartContext)
    const [userShuffled, setUserShuffled] = useState([])


    const mobileFilter = products.filter((item) => {
        let matchMobile = item.category?.includes("smartphones")

        return matchMobile
    })
    useEffect(() => {
        const Shuffled = mobileFilter.sort(() => 0.5 - Math.random());
        setUserShuffled(Shuffled)
    }, [])




    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 p-4 mt-15 md:mt-0">
            {userShuffled.length > 0 ? (
                userShuffled.map((elem) => (
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
    )
}

export default Mobile