import React from "react";
import { useLocation } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

const ConfirmPayment = () => {
    const { state } = useLocation();
    const { houseTitle, price, cleaningFee, serviceFee, image, type, address } =
        state.house;
    const { arrivalDate, departureDate, adult, child, babies } =
        state.searchHouses;
    // const arrivalDateMonth = arrivalDate.toDateString().split(" ");
    // const departureDateMonth = departureDate.toDateString().split(" ");
    return (
        <div className='review-house-rules-container'>
            <div>
                <h3 style={{ paddingBottom: "15px", fontSize: "25px" }}>
                    Confirm Your Payment
                </h3>
                <div className='rules-container'>
                    <div style={{ width: "40%" }}></div>
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
                            <p>$ {price + cleaningFee + serviceFee}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPayment;
