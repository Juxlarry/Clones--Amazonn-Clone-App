import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Homebanner.css";

const breakPoints = [
  { width: 300, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function Homebanner() {
  return (
    <div className="homebanner">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <img 
             className='home_image'
             src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt="Home_Banner" 
          />
        </Item>
        <Item>
          <img 
             className='home_image'
             src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
             alt="Home_Banner" 
          />
        </Item>
        <Item>
          <img 
             className='home_image'
             src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
             alt="Home_Banner" 
          />
        </Item>
        <Item>
          <img 
             className='home_image'
             src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
             alt="Home_Banner" 
          />
        </Item>
        <Item>
          <img 
             className='home_image'
             src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
             alt="Home_Banner" 
          />
        </Item>
        {/* <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item> */}
      </Carousel>
    </div>
  );
}

export default Homebanner;