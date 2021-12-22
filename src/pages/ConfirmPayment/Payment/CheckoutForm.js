import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { FaCcMastercard } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import { useDispatch } from "react-redux";
import { errorAlert } from "../../../redux/action/alertAction";
import "./CheckoutForm.css";

const CheckoutForm = ({ totalPrice }) => {
    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch("http://localhost:8888/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ totalPrice }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, [totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(
            CardNumberElement,
            CardExpiryElement,
            CardCvcElement
        );

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            dispatch(errorAlert(true, error.message));
        } else {
            dispatch(errorAlert(false, ""));
            console.log(paymentMethod);
        }
    };
    return (
        <div>
            <h1>Confirm Your Payment</h1>
            <form onSubmit={handleSubmit} className='payment-form'>
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            <h3>Credit Card</h3>
                            <p className='card-des'>
                                Safe money transfer using your bank account.
                                Visa, Maestro, Discover, American Express
                            </p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                columnGap: "5px",
                                fontSize: "24px",
                            }}
                        >
                            <FaCcMastercard />
                            <RiVisaFill />
                            <SiAmericanexpress />
                        </div>
                    </div>
                </div>

                <div>
                    <label>Email</label>
                    <br />
                    <input
                        type='email'
                        className='payment-email'
                        placeholder='email'
                    />
                </div>

                <p>Card Number</p>
                <CardNumberElement
                    className='card-element'
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <div className='card-expire-cvc'>
                    <div className='expiry-cvc'>
                        <p>Expiry Date</p>
                        <CardExpiryElement
                            className='card-element'
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        "::placeholder": {
                                            color: "#aab7c4",
                                        },
                                    },
                                    invalid: {
                                        color: "#9e2146",
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className='expiry-cvc'>
                        <p>CVC Code</p>
                        <CardCvcElement
                            className='card-element'
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        "::placeholder": {
                                            color: "#aab7c4",
                                        },
                                    },
                                    invalid: {
                                        color: "#9e2146",
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
                <div className='payment-button'>
                    <button
                        className='pay-btn'
                        type='submit'
                        disabled={!stripe}
                    >
                        Continue to Pay
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
