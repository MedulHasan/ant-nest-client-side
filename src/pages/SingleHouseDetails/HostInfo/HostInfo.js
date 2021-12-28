import React from "react";
import { MdPhoneEnabled } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "./HostInfo.css";
import { Rating } from "@mui/material";
import { useSelector } from "react-redux";
import useAuth from "../../../hooks/useAuth";

const HostInfo = ({ house }) => {
    const { user } = useAuth();
    const houses = useSelector((state) => state.houses.houses);
    const myListing = houses.filter(
        (house) => house.landlord.email === user.email
    );
    return (
        <div className='host-container'>
            <div className='host-background'></div>
            <div className='host-contact'>
                <div className='host-information'>
                    <img
                        style={{
                            width: "80px",
                            borderRadius: "10px",
                        }}
                        src={house.landlord.imageURL}
                        alt=''
                    />
                    <div className='host-name-property'>
                        <h6>{house.landlord.name}</h6>
                        <p>{myListing.length} Property Listings</p>
                        <Rating
                            style={{ fontSize: "18px" }}
                            name='read-only'
                            value={parseInt(house.ratting)}
                            readOnly
                        />
                    </div>
                </div>
                <div style={{ borderBottom: "1px solid" }}>
                    <div className='host-phone'>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <MdPhoneEnabled />
                            <span style={{ marginLeft: "5px" }}>Phone:</span>
                        </div>
                        <p>{house.landlord.phone}</p>
                    </div>
                    <div className='host-phone'>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <FaRegEnvelope />
                            <span style={{ marginLeft: "5px" }}>Mail:</span>
                        </div>
                        <p>{house.landlord.email}</p>
                    </div>
                    <div className='host-phone'>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <CgWebsite />
                            <span style={{ marginLeft: "5px" }}>Website:</span>
                        </div>
                        <p>{house.landlord.website}</p>
                    </div>
                </div>
                <button
                    style={{
                        padding: "12px 18px",
                        marginTop: "20px",
                        border: "0",
                        borderRadius: "5px",
                        backgroundColor: "#3270FC",
                        color: "#fff",
                    }}
                >
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default HostInfo;
