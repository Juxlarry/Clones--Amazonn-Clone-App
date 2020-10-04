import React, { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './Reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory(); 

    const stripe = useStripe(); 
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false); 
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null); 
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientService] = useState(true);

    useEffect(() => {
        //generate special stripe secret to charge a customer

        const getClientSecret = async () => {
             const response = await axios ({
                 method: 'post', 
                 url: `/payment/create?total=${getBasketTotal(basket) * 100}`
             });
             setClientService(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async  (event) => {
        // do all the fancy stripe stuff ....
        event.preventDefault(); 
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // PaymentIntent = payment confirmation 

            setSucceeded(true); 
            setError(null); 
            setProcessing(false)

            history.replace ('/orders')
        })

    }
    const handleChange = event => {
        //Listen for changes in the Card element
        //and display any errors as the customer types their card details
        setDisabled(event.empty); 
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className= 'payment'>
            <div className= 'payment_container'>
                <h1>
                    Checkout (
                        <Link to= "/checkout">{basket?.length} items </Link>
                        ) 
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3> Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>Block E3 Awiekonaa</p>
                        <p>Neewhang Street, Nungua - Brigade</p>
                    </div>
                </div>

                {/* Payment section - revview items */}
                <div className='payment_section'>
                 <div className='payment_title'>
                     <h3>Review items and delivery</h3> 
                 </div>
                 <div className='payment_items'>
                     {/** Show all products added to basket */}
                     {basket.map (item => (
                        <CheckoutProduct 
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                     ))}
                 </div>
                    
                </div>


                {/* Payment section - Payment method*/}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Paymeny Method</h3> 
                    </div>
                    <div className='payment_details'>
                         {/* Stripe method goes in here */}
                         <form onSubmit={handleSubmit}>
                           <CardElement onChange={handleChange}/>  
                         
                            <div className="payment_priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value} </h3>
                                )}
                                decimalScale = {2}
                                value = {getBasketTotal(basket)}
                                displayType= { "text" }
                                thousandSeparator= {true}
                                prefix ={"$"}
                            />
                            <button 
                                disabled={processing || disabled || 
                                succeeded}>
                                    <span>{processing ? <p>Processing</p> :
                                    "Buy Now"}</span>
                                </button>
                            </div>

                            {/**Handle Errors */}
                            {error && <div>{error}</div>}
                         </form>
                 </div>
                </div>
            </div>            
        </div> 
    )
}

export default Payment


