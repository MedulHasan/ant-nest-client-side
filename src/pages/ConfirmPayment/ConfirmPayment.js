import React from "react";
import { useLocation } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import Payment from "./Payment/Payment";
import "./ConfirmPayment.css";

const ConfirmPayment = () => {
    const { state } = useLocation();
    const { houseTitle, price, cleaningFee, serviceFee, image, type, address } =
        state.house;
    const totalPrice =
        parseInt(price) + parseInt(cleaningFee) + parseInt(serviceFee);
    const { arrivalDate, departureDate, adult, child, babies } =
        state.searchHouses;
    return (
        <div className='review-house-rules-container review-house-rules-container2'>
            <div className='confirm-payment'>
                <Payment totalPrice={totalPrice} />
                <div className='rules-container'>
                    <div className='confarmation-info'>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <h3>{houseTitle}</h3>
                                <p>Type: {type}</p>
                                <p>Address: {address}</p>
                            </div>
                            <img
                                style={{
                                    height: "100px",
                                    width: "100px",
                                    borderRadius: "5px",
                                }}
                                src={image.img1}
                                alt=''
                            />
                        </div>
                        <div>
                            <p>Dates</p>
                            <div className='date-contact'>
                                <p>{arrivalDate.toLocaleDateString()}</p>
                                <p>
                                    <BiRightArrowAlt />
                                </p>
                                <p>{departureDate.toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div>
                            <p>Guests</p>
                            <div className='date-contact'>
                                <p>{adult + child + babies} Guests</p>
                            </div>
                        </div>
                        <div className='data-price'>
                            <p>Price</p>
                            <p>$ {price}</p>
                        </div>
                        <div className='data-price'>
                            <p>CleanIng Fee</p>
                            <p>$ {cleaningFee}</p>
                        </div>
                        <div className='data-price'>
                            <p>Service Fee</p>
                            <p>$ {serviceFee}</p>
                        </div>
                        <div className='data-price total-price'>
                            <p>Total Price</p>
                            <p>$ {totalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPayment;
