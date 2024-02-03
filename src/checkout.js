import React, { useState } from "react";
import { useStateValue } from "./stateProvider";
import CheckoutProduct from "./checkoutProduct";
import Subtotal from "./subtotal";
import Header from "./header";
import axios from "axios";

const Checkout = () => {
    const [showModal, setShowModal] = useState(false);
    const [{ user, basket }] = useStateValue();
    const userid = user?.email;
    return (
        <div className="bg-slate-300 w-screen min-h-screen justify-center">
            <Header />
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="flex w-60 relative my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="text-center text-lg border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/768px-Eo_circle_green_checkmark.svg.png?20200417132424" alt="green check" />
                                <h1 className="font-bold">
                                    Order Placed Successfully!
                                </h1>
                                <h1>It will be delivered in 5 days</h1>

                                {/*footer*/}
                               
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            <div className="flex flex-row w-full h-full p-10 justify-center">
                <div className="bg-white w-1/2 px-2 py-3 rounded-md">
                    <div className="px-3">
                        {basket?.length === 0 ? (
                            <div>
                                <h2 className="text-3xl">
                                    My Cart
                                </h2>
                                
                            </div>
                        ) : (
                            // display the items in the basket
                            <div>
                                <h2 className="text-3xl">My Cart</h2>
                                {basket.map((item) => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {/* component for calculating and displaying total price  */}
                <Subtotal />
            </div>
            <button
                onClick={() => {
                    setShowModal(true);
                    axios("http://localhost:5000/orders", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        data: {
                            basket: basket,
                        },
                    }).then((res) => {
                        console.log(res);
                    });
                }}
                className=" ml-60 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
            >
                PLACE ORDER
            </button>
        </div>
    );
};

export default Checkout;
