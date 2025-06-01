import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import './ThankYouPage.css'
import { useState } from "react";

const ThankYouPage = () => {
    const location= useLocation();
    const orderId= location.state?.order?.orderId
    const [orderData, setOrderData] = useState(null);
    console.log(location.state)

    useEffect(()=>{
        const fetchOrder= async()=>{
            try{
                const response = await fetch(`http://localhost:5000/orders/${orderId}`);
                const data = await response.json();
                setOrderData(data);

            }catch(error){
                console.error('error while fetching the order', error)
            }
        };

        if(orderId){
            fetchOrder();
        }
    },[orderId])

    return (
        <div className="thank-you-container">
            <h1>{orderData?.transactionStatus === "approved" ? "🎉 Thank You for Your Order!" : "❌ Transaction Failed!"}</h1>
            {console.log(orderData)}
            {orderData ? (
                <div className="order-summary">
                    <p><strong>Order ID:</strong> {orderData.orderId}</p>
                    <p><strong>Product:</strong> {orderData.product.title}</p>
                    <p><strong>Variant:</strong> {orderData.product.selectedVariant}</p>
                    <p><strong>Quantity:</strong> {orderData.product.quantity}</p>
                    <p><strong>Total Amount:</strong> ${orderData.product.total.toFixed(2)}</p>
                    <p><strong>Full Name:</strong> {orderData.fullName}</p>
                    <p><strong>Email:</strong> {orderData.email}</p>
                    <p><strong>Phone:</strong> {orderData.phone}</p>
                    <p><strong>Shipping Address:</strong> {orderData.address}, {orderData.city}, {orderData.state}, {orderData.zip}</p>

                    {orderData.transactionStatus === "approved" ? (
                        <p className="confirmation-message">✅ Your order has been successfully placed! A confirmation email has been sent.</p>
                    ) : (
                        <p className="error-message">❌ Your transaction was <strong>{orderData.transactionStatus}</strong>. Please try again or contact support.</p>
                    )}
                </div>
            ) : (
                <p className="error-message">⚠️ No order details found.</p>
            )}
             <Link className='home-link' to="/">Return to Home Page</Link>
        </div>
    );
}

export default ThankYouPage;