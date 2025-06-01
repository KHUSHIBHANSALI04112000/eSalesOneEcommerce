import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import './CheckoutPage.css'

export  const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    })

    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false);
    const product = location.state.product

    const selectedVariant= location.state.selectedVariant
    const quantity = location.state?.quantity || 1;

    const subTotal= product.price*quantity;
    const total=subTotal;

    const handleChange =(e)=>{
        const {name,value} =e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

    }

    if(!product){
        return <div>No Product selected .Please go back to the landing page.</div>
    }

    const validate =() =>{
        let vaildationErrors= {};

        if(!formData.fullName) vaildationErrors.fullName='Full Name is required field'

        if (!formData.email) {
            vaildationErrors.email = 'Email is required';
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            vaildationErrors.email = 'Invalid email format';
        }

        if (!formData.phone) {
            vaildationErrors.phone = 'Phone Number is required';
          } else if (!/^\d{10}$/.test(formData.phone)) {
            vaildationErrors.phone = 'Phone Number must be 10 digits';
        }

        if(!formData.address){
            vaildationErrors.address='Address is required'
        }

        if(!formData.city){
            vaildationErrors.city='City is required'
        }

        if(!formData.state){
            vaildationErrors.state='State is required'
        }

        if(!formData.zip){
            vaildationErrors.zip='Zip is required'
        }

        if (!formData.cardNumber) {
            vaildationErrors.cardNumber = 'Card Number is required';
          } else if (!/^\d{16}$/.test(formData.cardNumber)) {
            vaildationErrors.cardNumber = 'Card Number must be 16 digits';
        }

        if (!formData.expiryDate) {
            vaildationErrors.expiryDate = 'Expiry Date is required';
          } else {
            const [year, month] = formData.expiryDate.split('-').map(Number);
            const expiry = new Date(year, month - 1);
            const now = new Date();
            now.setDate(1);
            if (expiry < now) {
                vaildationErrors.expiryDate = 'Expiry Date must be in the future';
            }
        }

        if (!formData.cvv) {
            vaildationErrors.cvv = 'CVV is required';
           } else if (!/^\d{3}$/.test(formData.cvv)) {
            vaildationErrors.cvv = 'CVV must be 3 digits';
        }
        setErrors(vaildationErrors);

        return(Object.keys(vaildationErrors).length===0)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
    
        const orderData = {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          cardNumber: formData.cardNumber,
          expiryDate: formData.expiryDate,
          cvv: formData.cvv,
          product: {
            id: product.id,
            title: product.title,
            selectedVariant,
            quantity,
            subTotal,
            total
          }
        }
        try{
            const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            })

            const data = await response.json();
            navigate('/thank-you', {state: {order: data}})
        }catch(error){
            alert('Error submitting order')
        }
        setSubmitting(false)
    };

    return (
        <div className="checkout-page">
          <h1>Checkout</h1>
          <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '2rem' }}>
            <h2 className="order-summary">Order Summary</h2>
            <p><strong>Product:</strong> {product.title}</p>
            <p><strong>Variant:</strong> {selectedVariant}</p>
            <p><strong>Quantity:</strong> {quantity}</p>
            <p><strong>Subtotal:</strong> ${subTotal}</p>
            <p><strong>Total:</strong> ${total}</p>
          </div>
          <form className='checkout-form' onSubmit={handleSubmit}>
            <div className="form-element">
              <label>Full Name:</label><br />
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
              {errors.fullName && <div style={{ color: 'red' }}>{errors.fullName}</div>}
            </div>
            <div className="form-element">
              <label>Email:</label><br />
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </div>
            <div className="form-element">
              <label>Phone Number:</label><br />
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
              {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
            </div>
            <div className="form-element">
              <label>Address:</label><br />
              <input type="text" name="address" value={formData.address} onChange={handleChange} />
              {errors.address && <div style={{ color: 'red' }}>{errors.address}</div>}
            </div>
            <div className="form-element">
              <label>City:</label><br />
              <input type="text" name="city" value={formData.city} onChange={handleChange} />
              {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
            </div>
            <div className="form-element">
              <label>State:</label><br />
              <input type="text" name="state" value={formData.state} onChange={handleChange} />
              {errors.state && <div style={{ color: 'red' }}>{errors.state}</div>}
            </div>
            <div className="form-element">
              <label>Zip Code:</label><br />
              <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
              {errors.zip && <div style={{ color: 'red' }}>{errors.zip}</div>}
            </div>
            <div className="form-element">
              <label>Card Number:</label><br />
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
              {errors.cardNumber && <div style={{ color: 'red' }}>{errors.cardNumber}</div>}
            </div>
            <div className="form-element">
              <label>Expiry Date (YYYY-MM):</label><br />
              <input type="month" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
              {errors.expiryDate && <div style={{ color: 'red' }}>{errors.expiryDate}</div>}
            </div>
            <div className="form-element">
              <label>CVV:</label><br />
              <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} />
              {errors.cvv && <div style={{ color: 'red' }}>{errors.cvv}</div>}
            </div>
            <br />
            <button type="submit" disabled={submitting}>
              Submit Order
            </button>
          </form>
        </div>
      );
}
