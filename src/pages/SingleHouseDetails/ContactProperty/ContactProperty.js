import React from "react";
import { useSelector } from "react-redux";
import { BiRightArrowAlt } from "react-icons/bi";
import "./ContactProperty.css";
<<<<<<< HEAD

const ContactProperty = ({ house }) => {
    const houses = useSelector((state) => state.houses.searchHouse);
    console.log(houses);
=======
import { useNavigate } from "react-router-dom";

const ContactProperty = ({ house }) => {
    const navigate = useNavigate();
    const searchHouses = useSelector((state) => state.houses.searchHouse);
    const guest = searchHouses.adult + searchHouses.child + searchHouses.babies;
    console.log(guest);
    const handleReviewHouseRules = () => {
        navigate("/reviewHouseRules", {
            state: { house: house, searchHouses: searchHouses },
        });
    };
>>>>>>> 591e528... error handle
    return (
        <div className='contact-room-container'>
            <h6>Contact Room</h6>
            <div className='contact-room-info'>
                <div>
                    <p>Dates</p>
                    <div className='date-contact'>
<<<<<<< HEAD
                        <p>{houses.arrivalDate.toLocaleDateString()}</p>
                        <p>
                            <BiRightArrowAlt />
                        </p>
                        <p>{houses.departureDate.toLocaleDateString()}</p>
=======
                        <p>{searchHouses.arrivalDate.toLocaleDateString()}</p>
                        <p>
                            <BiRightArrowAlt />
                        </p>
                        <p>{searchHouses.departureDate.toLocaleDateString()}</p>
>>>>>>> 591e528... error handle
                    </div>
                </div>
                <div>
                    <p>Guests</p>
                    <div className='date-contact'>
<<<<<<< HEAD
                        <p>
                            {houses.adult + houses.child + houses.babies} Guests
                        </p>
=======
                        <p>{guest} Guests</p>
>>>>>>> 591e528... error handle
                    </div>
                </div>
                <div className='data-price'>
                    <p>Price</p>
                    <p>$ {house.price}</p>
                </div>
                <div className='data-price'>
                    <p>CleanIng Fee</p>
                    <p>$ {house.cleaningFee}</p>
                </div>
                <div className='data-price'>
                    <p>Service Fee</p>
                    <p>$ {house.serviceFee}</p>
                </div>
<<<<<<< HEAD
                <div className='data-price'>
=======
                <div className='data-price total-price'>
>>>>>>> 591e528... error handle
                    <p>Total Price</p>
                    <p>
                        $ {house.price + house.cleaningFee + house.serviceFee}
                    </p>
                </div>
                <button
<<<<<<< HEAD
                    style={{
                        padding: "12px 18px",
                        marginTop: "20px",
                        border: "0",
                        borderRadius: "5px",
                        backgroundColor: "#3270FC",
                        color: "#fff",
                        width: "100%",
                        cursor: "pointer",
                    }}
=======
                    onClick={handleReviewHouseRules}
                    style={{}}
                    disabled={guest === 0 ? true : false}
                    className={
                        guest === 0 ? "reserve-disable" : "reserve-enable"
                    }
>>>>>>> 591e528... error handle
                >
                    Reserve
                </button>
            </div>
        </div>
    );
};

export default ContactProperty;
