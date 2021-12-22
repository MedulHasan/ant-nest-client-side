import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51JvuqtDIBQXTyseWr2DBmTUEHU92dHY7QtS5XvXUDxRVJynMuLObBvZ4kn6pVSGqOglelW0HBDnVcO7nopGQ75W700RHLvvfFJ"
);

const Payment = ({ totalPrice }) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm totalPrice={totalPrice} />
            </Elements>
        </div>
    );
};

export default Payment;
