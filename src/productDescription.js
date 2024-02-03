import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./header";
import { useStateValue } from "./stateProvider";

const ProductDescription = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const [{}, dispatch] = useStateValue();

    const addToBasket = (id, title, image, price, rating) => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    
    console.log(id);
    useEffect(() => {
        async function fetchData() {
            await axios
                .get("http://localhost:5000/products")
                .then((res) => {
                    console.log(res.data);
                    setProducts(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);
    return (
        <div>
            <Header/>
        <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
             
             {products != 0 ? ( <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                  <div className="relative flex items-center justify-center">
                    <img
                      alt="Product gallery 1"
                      src={products[id].image}
                      width={650}
                      height={590}
                      className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                    />
                  </div>
                  <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
                    
                  </div>
                </div>
                
              </div>
            </div>
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-5">
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">{products[id].title}</h2>
                <p className="mt-4 font-semibold">{"₹" + products[id].amount}</p>
              </div>
             
              <div className="pb-2" />
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
               
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() =>
                        addToBasket(
                            products[id].id,
                            products[id].title,
                            products[id].image,
                            products[id].amount,
                            products[id].rating
                        )
                    }
                    className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black border-2 border-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                   
                    <span className="block">Buy Now</span>
                  </button>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        addToBasket(
                            products[id].id,
                            products[id].title,
                            products[id].image,
                            products[id].amount,
                            products[id].rating
                        )
                    }
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      
                      <span className="block">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-6 xl:pt-8">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <p className="text-sm">
                {products[id].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : null}
    </div>
    </div>
        // <div className="min-h-screen bg-slate-300 items-center">
        //     <Header />
        //     {/* getting id parameter and using it to retrieve details of a specific product */}
        //     {products != 0 ? (
        //         <div className="flex h-full flex-row justify-evenly mt-20 p-10">
        //             <div className="w-1/2">
        //                 <img
        //                     className=" w-9/12 h-56"
        //                     src={products[id].image}
        //                 />
        //             </div>
        //             <div className="w-1/2">
        //                 <h1 className="text-4xl font-bold">
        //                     {products[id].title}
        //                 </h1>
        //                 <p className="text-lg mt-3">
        //                     {products[id].description}
        //                 </p>
        //                 <p className="text-3xl mt-5">
        //                     {"₹" + products[id].amount}
        //                 </p>
        //                 <div className="flex mt-5 w-5/12 justify-between">
                           
        //                     <button
        //                         onClick={() =>
        //                             addToBasket(
        //                                 products[id].id,
        //                                 products[id].title,
        //                                 products[id].image,
        //                                 products[id].amount,
        //                                 products[id].rating
        //                             )
        //                         }
        //                         className="self-end bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded"
        //                     >
        //                         <a href="#">Add to Cart</a>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     ) : null}
        // </div>
    );
};

export default ProductDescription;
