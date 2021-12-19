import { Rating } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { FcShare } from "react-icons/fc";
import "./SingleHouseDetails.css";
import ImageGallery from "./ImageGallery/ImageGallery";
import RoomDetails from "./RoomDetails/RoomDetails";
import HostInfo from "./HostInfo/HostInfo";
import ContactProperty from "./ContactProperty/ContactProperty";

const SingleHouseDetails = () => {
    const { state } = useLocation();
    const { image, houseTitle, address, city, price, ratting, details } =
        state.house;
    return (
        <div className='single-house-container'>
            <div>
                <img
                    className='single-home-image-banner'
                    src={image.img1}
                    alt=''
                />
                <div className='image-info-cont'>
                    <h2 className='single-home-title'>{houseTitle}</h2>
                    <p className='address-rating'>
                        <span style={{ display: "flex", alignItems: "center" }}>
                            <MdLocationOn color='#3270FC' />
                            {address}, {city}
                        </span>
                        <Rating
                            className='single-home-rating'
                            name='read-only'
                            value={parseInt(ratting)}
                            readOnly
                        />
                    </p>
                    <div className='price-date'>
                        <p>
                            Price:{" "}
                            <span
                                style={{
                                    fontSize: "2rem",
                                    color: "#3270FC",
                                    fontWeight: "500",
                                }}
                            >
                                ${price}
                            </span>
                        </p>
                        <p style={{ marginLeft: "10px" }}>
                            Available for: {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <p className='single-home-share'>
                    <FcShare />
                    <p style={{ marginLeft: "5px" }}>Share</p>
                </p>
                <div className='single-home-bookmark'>
                    <AiFillHeart color='#3270FC' />{" "}
                    <span style={{ marginLeft: "8px" }}>Bookmarks - 12</span>
                </div>
            </div>
            <div className='single-other-cont'>
                <div className='single-other-container'>
                    <ImageGallery image={image} />
                    <RoomDetails house={state.house} />
                    <div>
                        <h6
                            style={{
                                fontSize: "20px",
                                margin: "30px 0",
                                color: "#566985",
                            }}
                        >
                            About This Listing
                        </h6>
                        <p style={{ fontSize: "16px", color: "#AAAFBB" }}>
                            {details}
                        </p>
                    </div>
                </div>
                <div>
                    <HostInfo house={state.house} />
                    <ContactProperty house={state.house} />
                </div>
            </div>
        </div>
    );
};

export default SingleHouseDetails;
