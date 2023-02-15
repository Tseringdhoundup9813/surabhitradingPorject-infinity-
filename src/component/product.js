import React from "react";
import "../cssComponent/product.css";



function Product(){

    let product=[

        {
            img:"./Image/bettery.jpg",
            name:"something"
        },
        {
            img:"./Image/bettery.jpg",
            name:"something"
        },
        {
            img:"./Image/bettery.jpg",
            name:"something"
        },
        {
            img:"./Image/bettery.jpg",
            name:"something"
        },
        {
            img:"./Image/bettery.jpg",
            name:"something"
        },

        {
            img:"./Image/bettery.jpg",
            name:"something"
        },
        {
            img:"./Image/bettery.jpg",
            name:"something"
        },
        {
            img:"./Image/bettery.jpg",
            name:"something"
        },
        {
            img:"./Image/bettery.jpg",
            name:"doma"
        },
        {
            img:"./Image/bettery.jpg",
            name:"doma"
        },
        {
            img:"./Image/bettery.jpg",
            name:"doma"
        },
        {
            img:"./Image/bettery.jpg",
            name:"doma"
        },
        {
            img:"./Image/bettery.jpg",
            name:"Bettery"
        },
        {
            img:"./Image/bettery.jpg",
            name:"doma"
        },

    ]
    return(
    <div className="product-main-container" id="Product">

        {/* product ttitle */}
        <div className="product-title">
            <h1>Product</h1>
        </div>
        {/* end here */}


        {/* product category  */}
            <div className="product-category-container">
                <div>
                    <h1>ALL</h1>
                </div>
                <div>
                    <h1>Electry</h1>
                </div>
                <div>
                    <h1>Bettery</h1>
                </div>
            </div>

            {/* end here */}

            {/* product -list */}
           
            

            <div className="product-list">

                {product.map((product)=>{
                return  <div className="product-box">
                            <div className="product-img">
                                <img src={product.img}></img>
                            </div>
                            <div className="product-name">
                                <h1>{product.name}</h1>
                            </div>
                         </div>
                })}
               
                
            </div>

            {/* end here */}
    </div>
    )
}

export default Product;