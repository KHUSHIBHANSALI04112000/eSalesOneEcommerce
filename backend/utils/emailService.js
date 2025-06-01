import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export const sendConfirmationEmailOfOrder = async(orderData) =>{
    let subject,message;
    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        auth:{
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS,
        }
    });

    if(orderData.transactionStatus==='approved'){
        subject=`Order Successfully Placed: ${orderData.orderId}`
        message = `Your order has been successfully placed !!`
    }else{
        subject=`Transaction Failedd: ${orderData.orderId}`
        message=`Your Transaction was ${orderData.transactionStatus}.Please try again or contact support.`
    }

    await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: orderData.email,
        subject,
        message
    })
    console.log(orderData)
    console.log('Email sent successfully')
}