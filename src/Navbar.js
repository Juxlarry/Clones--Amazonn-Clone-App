import React from 'react'; 
import "./Navbar.css";
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav__main">
                <div className="nav__left">
                    <div className="nav__main__sprite">
                            <RoomOutlinedIcon />
                    </div> 
                    <div className='nav__option'>
                        <div className="nav__optionRoom">
                            <span className='nav__optionLineOne'> 
                            Deliver to</span> 
                            <span className='nav__optionLineTwo'> 
                            Ghana</span> 
                     </div>
                    </div>
                </div>    
                <div className="nav__fill">
                   <a href="/" >Today's Deals</a>
                   <a href="/" >Customer Service</a>
                   <a href="/" >Gift Cards</a>
                   <a href="/" >Registry</a>
                   <a href="/" >Sell</a>
                </div>
                <div className="nav__right">
                    Black Lives Matter
                </div>
            </div>    
            
        </div>
    )
}

export default Navbar
