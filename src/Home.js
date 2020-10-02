import React from 'react'; 
import './Home.css'; 
// import Homebanner from './Homebanner';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                { <img 
                className='home__image'
                src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="Home_Banner" 
                /> }
              {/* <Homebanner /> */}

            {/* <div class="button-container">
            <button class="prev-btn">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="next-btn">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div> */}

                <div className="home__row">
                    <Product 
                    id = "ADS178x"
                    title='The lean startup: How Constant Innovation Creates Radically Sucessful Businesses Paperback' 
                    price={29.99}
                    rating = {4}
                    image= "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    />
                    <Product
                    id = "ABS971g"
                    title='Microsoft Xbox One S 1TB Console with Xbox One Wireless Controller - Robot White' 
                    price={389.00}
                    rating = {4}
                    image= "https://images-na.ssl-images-amazon.com/images/I/41wNqTxUoGL._AC_US218_.jpg"
                     />
                </div>

                <div className="home__row">
                    <Product
                     id = "APS287q"
                     title='Uniden SR30C BearCat, 500-Channel Compact Handheld Scanner, Close Call RF Capture technology, 
                     urbo Search, PC programming, NASCAR, Auto Racing, 
                     Public Safety, Police, Fire, EMS, Marine, Civil Air ' 
                     price={98.15}
                     rating = {4}
                     image= "https://m.media-amazon.com/images/I/61B1DcbgrLL._AC_UL320_.jpg"
                      />
                    <Product 
                     id = "AFL136o"
                     title='The Self-Taught Programmer: The Definitive Guide 
                     to Programming Professionally ' 
                     price={19.99}
                     rating = {4}
                     image= "https://m.media-amazon.com/images/I/71Hb1JYfJhL._AC_UY218_.jpg"
                     /> 
                     <Product 
                     id = "AHQ8236m"
                     title='Apple 13.3" MacBook Pro with Touch Bar, Intel Core i5 Quad-Core, 8GB RAM, 128GB SSD - Mid 2019, 
                     Space Gray, MUHN2LL/A (Renewed) ' 
                     price={1099.00}
                     rating = {3}
                     image= "https://m.media-amazon.com/images/I/71i49M4hv2L._AC_UY218_.jpg"
                     /> 
                </div>

                <div className="home__row">
                    <Product 
                     id = "AUT801c"
                     title='Profit with JavaScript - A course that’ll teach you how to complete 
                     real-world projects and make a living as a 
                     modern JavaScript and React web developer.' 
                     price={497.00}
                     rating = {5}
                     image= "https://embedwistia-a.akamaihd.net/deliveries/457b6e8d08629da06c89136a50547a2f.jpg?wistia-dnfccg6dlr-1-dnfccg6dlr-video-thumbnail=1&amp;image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=1e71e7e0"
                     /> 
                </div>
            </div>
        </div>
    )
}

export default Home
