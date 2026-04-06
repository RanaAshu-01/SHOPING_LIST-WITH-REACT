import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import Card from "../componets/common/TempCard";



const ElectronicItems = () => {
    const { users } = useContext(CartContext)
    const [userShuffled, setUserShuffled] = useState([])


    const electronicsFilter = users.filter((item) => {
        let matchElectronics = item.category?.includes("Electronics")

        return matchElectronics
    })
    useEffect(() => {
        const Shuffled = electronicsFilter.sort(() => 0.5 - Math.random());
        setUserShuffled(Shuffled)
    }, [])






    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 p-4 mt-14 sm:mt-0">
            {userShuffled.length > 0 ? (
                userShuffled.map((elem) => (
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
    )
}

export default ElectronicItems