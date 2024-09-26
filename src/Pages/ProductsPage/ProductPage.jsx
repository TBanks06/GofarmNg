import { useState } from "react";
import React from "react";
import Banana from "./../../assets/Banana.png";
import Bana from "./../../assets/banna.PNG";
import bannna from "./../../assets/bannna.PNG";
import "./ProductPage.css";
import Star from "../../Components/Star";
import Increment from "../../Components/IncrementDecrement";
import Button from "../../Components/Button";
import BreadFruit from "../../assets/BreadFruit.png";
import Orange from "../../assets/Orange.png";
import Golden from "../../assets/GoldenMelon.png";
import Apple from "../../assets/apple.png";
import Tomato from "../../assets/Tomato.png";
import Guava from "../../assets/Guava.png";
import Pawpaw from "../../assets/pawpaw.png";
import LikedComponent from "../../Components/LikedComponent"
// import Pawpaw from "../../assets/Pawpaw.png"
import Carrot from "../../assets/carrot.png";
import ProductCardDetails from "../../Components/ProductCardDetails/ProductCardDetails";
import CartCounter from "../../Components/CartCounter"

const ProductPage = () => {
  const imgs = [
    { id: 0, value: Bana },
    { id: 1, value: bannna },
    { id: 2, value: bannna },
  ];
  const [sliderData, setSliderData] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };

  const [data]=useState([{
    image:BreadFruit,
    heading: 'Fresh Bread Fruit',
    prices: '#1000',
  },
  {
    image:Orange,
    heading: 'Fresh Orange',
    prices: '#1000',
  },
  {
    image:Apple,
    heading: 'Fresh Apple',
    prices: '#1000',
  },
  {
    image:Golden,
    heading: 'Fresh Guava',
    prices: '#1000',
  },
  {
    image:Tomato,
    heading: 'Fresh Tomato',
    prices: '#1000',
  },
  {
    image:Carrot,
    heading: 'Fresh Carrot',
    prices: '#1000',
  },
  {
    image:Guava,
    heading: 'Fresh Guava',
    prices: '#1000',
  },
  {
    image:Pawpaw,
    heading: 'Fresh PawPaw',
    prices: '#1000',
  }
  ])

  return (
    <div>
      <div className="productpage-container">
        <div className="nike">
       <div className="liky"><LikedComponent/></div> 
          <img src={sliderData.value} height="" width="500px" alt="" />
          <div className="flex-row">
            {imgs.map((data, i) => (
              <div className="thumbnails">
                <img
                  className={sliderData.id === i ? "clicked" : ""}
                  key={data.id}
                  src={data.value}
                  alt=""
                  onClick={() => handleClick(i)}
                  height="80"
                  width="80"
                
                />
                
              </div>
            ))}
          </div>
        </div>
        <div className="right-text">
          <h5>Farm Fresh Banana</h5>
          <div className="rat"><Star /><p>(12)</p></div>
          <h6>
            #1000 <span>/kg</span>
          </h6>
          <p className="text">
            Shop farm fresh banana. What is the benefits of banana? Bananas are
            a popular fruit with many potential health benefits. They may boost
            your digestion and heart health thanks to their fiber and
            antioxidant contents. Plus, they may support weight loss because
            they're relatively low in calories, nutrient dense, and filling.
          </p>
          <p className="seller">
            {" "}
            Seller: <span>The Vine Farms</span>
          </p>
          <p className="seller">
            {" "}
            Categories: <span>Fruits</span>
          </p>
          <div className="quality">
            <p>Quantity: </p>
            <Increment />
            <Button />
          </div>
        </div>
      </div>
      <h3 className="rel">Related Products</h3>
      <div className="productcarddetailscontainer">
        {data.map((item)=>(
                <ProductCardDetails image={item.image} heading={item.heading} prices={item.prices}/>
              )
              )}
      </div>
      <CartCounter/>
      <div className="center-btn">
      <button className='vie'><a href="">View More</a></button>
      </div>
     
    </div>
  );
};

export default ProductPage;
