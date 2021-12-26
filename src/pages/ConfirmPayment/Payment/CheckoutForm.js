/* eslint-disable no-unused-vars */
import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { FaCcMastercard } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import { useDispatch } from "react-redux";
import { errorAlert, successAlert } from "../../../redux/action/alertAction";
import {
    fetchPaymentClientSecret,
    loadingRequest,
} from "../../../redux/action/houseAction";
import useAuth from "../../../hooks/useAuth";
import "./CheckoutForm.css";
import { useSelector } from "react-redux";

const CheckoutForm = ({ totalPrice }) => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch("https://ants-nest.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ totalPrice }),
        })
            .then((res) => res.json())
            .then((data) =>
                dispatch(fetchPaymentClientSecret(data.clientSecret))
            );
    }, [totalPrice, dispatch]);

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

        dispatch(loadingRequest(true));
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log(error);
            dispatch(errorAlert(true, error.message));
            dispatch(loadingRequest(false));
        } else {
            const { paymentIntent, errorIntent } =
                await stripe.confirmCardPayment(houses.paymentClientSecret, {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: user.displayName,
                            email: user.email,
                        },
                    },
                });
            if (errorIntent) {
                dispatch(errorAlert(true, errorIntent.message));
                dispatch(loadingRequest(false));
                console.log(errorIntent.message);
            } else {
                dispatch(successAlert(true, "Your Payment successfully done!"));
                dispatch(loadingRequest(false));
                console.log(paymentIntent);
            }
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
                    {houses.loading ? (
                        <CircularProgress />
                    ) : (
                        <button
                            className='pay-btn'
                            type='submit'
                            disabled={!stripe}
                        >
                            Continue to Pay
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
