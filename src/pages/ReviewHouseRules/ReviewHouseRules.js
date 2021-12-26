import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { MdChildFriendly, MdSmokingRooms, MdNoDrinks } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";
import "./ReviewHouseRules.css";

const ReviewHouseRules = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { houseTitle, price, cleaningFee, serviceFee, image, type, address } =
        state.house;
    const totalPrice =
        parseInt(price) + parseInt(cleaningFee) + parseInt(serviceFee);
    const { arrivalDate, departureDate, adult, child, babies } =
        state.searchHouses;
    const arrivalDateMonth = arrivalDate.toDateString().split(" ");
    const departureDateMonth = departureDate.toDateString().split(" ");

    const handlePayment = () => {
        navigate("/confirmPayment", {
            state: { house: state.house, searchHouses: state.searchHouses },
        });
    };
    return (
        <div className='review-house-rules-container'>
            <div style={{ paddingBottom: "25px" }}>
                <div className='rules-container'>
                    <div className='house-rules'>
                        <h3 style={{ paddingBottom: "15px", fontSize: "25px" }}>
                            Review House Rules
                        </h3>
                        <div className='check-in-time'>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <div className='date-check-in'>
                                    <p>{arrivalDateMonth[1]}</p>
                                    <p>{arrivalDateMonth[2]}</p>
                                </div>
                                <div>
                                    <p>{arrivalDateMonth[0]} Check-in</p>
                                    <p>After 12.00 PM</p>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <div className='date-check-in'>
                                    <p>{departureDateMonth[1]}</p>
                                    <p>{departureDateMonth[2]}</p>
                                </div>
                                <div>
                                    <p>{departureDateMonth[0]} Check-out</p>
                                    <p>After 11.00 AM</p>
                                </div>
                            </div>
                        </div>
                        <p
                            style={{
                                padding: "20px 0",
                                borderBottom: "1px solid",
                            }}
                        >
                            Self Check-in with building staff
                        </p>
                        <h3 className='keep-in-mind'>Think to keep in mind</h3>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: "8px",
                            }}
                        >
                            <MdChildFriendly className='icon-for-rules' />
                            <p>Suitable for children and infants</p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: "8px",
                            }}
                        >
                            <MdPets className='icon-for-rules' />
                            <p>Pets allowed</p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: "8px",
                            }}
                        >
                            <MdNoDrinks className='icon-for-rules' />
                            <p>No Parties and events</p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                columnGap: "8px",
                            }}
                        >
                            <MdSmokingRooms className='icon-for-rules' />
                            <p>Smoking allowed</p>
                        </div>
                        <button
                            onClick={handlePayment}
                            className='agree-continue'
                        >
                            Agree and Continue
                        </button>
                    </div>
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

export default ReviewHouseRules;
