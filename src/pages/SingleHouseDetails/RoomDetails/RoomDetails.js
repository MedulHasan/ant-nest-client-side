import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import "./RoomDetails.css";

const RoomDetails = ({ house }) => {
    const { guest, bedRooms, bathRooms } = house;
    return (
        <div className='room-details-cont'>
            <div className='sigle-room-info'>
                <AiOutlineHome style={{ fontSize: "40px", color: "#3270FC" }} />
                <p style={{ fontSize: "18px", fontWeight: "400" }}>Type</p>
                <p style={{ fontSize: "13px" }}>Apartment/ House</p>
            </div>
            <div className='sigle-room-info'>
                <FaUsers style={{ fontSize: "40px", color: "#3270FC" }} />
                <p style={{ fontSize: "18px", fontWeight: "400" }}>
                    Accomodation
                </p>
                <p style={{ fontSize: "13px" }}>{guest} Guest</p>
            </div>
            <div className='sigle-room-info'>
                <FaBed style={{ fontSize: "40px", color: "#3270FC" }} />
                <p style={{ fontSize: "18px", fontWeight: "400" }}>Bedrooms</p>
                <p style={{ fontSize: "13px" }}>{bedRooms} Bedrooms</p>
            </div>
            <div className='sigle-room-info'>
                <FaBath style={{ fontSize: "40px", color: "#3270FC" }} />
                <p style={{ fontSize: "18px", fontWeight: "400" }}>Bedrooms</p>
                <p style={{ fontSize: "13px" }}>{bathRooms} Bedrooms</p>
            </div>
        </div>
    );
};

export default RoomDetails;
