import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const LogoutPopUp = () => {

    const { showPopUp, setShowPopUp, setUser } = useContext(CartContext)
   ;



    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem("user")
        setShowPopUp(false)
    }

    return (
        <>
            {showPopUp && (
                <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-10">

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-black mb-4">Are you sure you want to logout?</p>

                        <div className="flex justify-center gap-3">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded"
                                onClick={() => {setShowPopUp(false)}}
                            >Cancel
                            </button>

                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded"
                                onClick={handleLogout}
                            >Logout
                            </button>
                        </div>
                    </div>

                </div>)}
        </>
    )
}

export default LogoutPopUp
