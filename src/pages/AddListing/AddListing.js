import React from "react";
import "./AddListing.css";
import useAuth from "../../hooks/useAuth";
import { MenuItem, TextField } from "@mui/material";
import { BsInfo } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { BiDetail } from "react-icons/bi";
import { DropzoneArea } from "material-ui-dropzone";
import "@material-ui/styles";
const types = [
    {
        value: "House",
        label: "House",
    },
    {
        value: "Apartment",
        label: "Apartment",
    },
    {
        value: "Hotel",
        label: "Hotel",
    },
];

const AddListing = () => {
    const { user } = useAuth();

    const [type, setType] = React.useState("House");

    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <div className='add-listing-container'>
            <div className='add-listing-user'>
                <h3>Add Listing</h3>
                <div className='add-listing-user-info'>
                    <img src={user.photoURL} alt='' />
                    <p>
                        Welcome,{" "}
                        <span style={{ color: "#3270FC" }}>
                            {user.displayName}
                        </span>
                    </p>
                </div>
            </div>

            <form>
                <div className='basic-info-container'>
                    <p className='basic-info'>
                        <BsInfo
                            style={{ fontSize: "28px", color: "#3572FC" }}
                        />
                        <span>Basic Information</span>
                    </p>
                    <div className='basic-info-input-cont'>
                        <TextField
                            className='basic-info-input'
                            label='Listing Title'
                            size='small'
                        />
                        <TextField
                            className='basic-info-input'
                            select
                            label='Type'
                            size='small'
                            value={type}
                            onChange={handleChange}
                        >
                            {types.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            className='basic-info-input'
                            label='Price'
                            size='small'
                        />
                    </div>
                    <div className='basic-info-input-cont'>
                        <TextField
                            className='basic-info-input'
                            label='Cleaning Fee'
                            size='small'
                        />
                        <TextField
                            className='basic-info-input'
                            label='Service Fee'
                            size='small'
                        />
                        <span className='basic-info-input'></span>
                    </div>
                </div>
                <div className='basic-info-container'>
                    <p className='basic-info'>
                        <ImLocation2
                            style={{
                                fontSize: "18px",
                                color: "#3572FC",
                                marginRight: "10px",
                            }}
                        />
                        <span>Location / Contacts</span>
                    </p>
                    <div className='basic-info-input-cont'>
                        <TextField
                            className='basic-info-input'
                            label='Address'
                            size='small'
                        />
                        <TextField
                            className='basic-info-input'
                            label='City'
                            size='small'
                        />
                        <TextField
                            className='basic-info-input'
                            label='Email'
                            size='small'
                        />
                    </div>
                    <div className='basic-info-input-cont'>
                        <TextField
                            className='basic-info-input'
                            label='Website'
                            size='small'
                        />
                        <TextField
                            className='basic-info-input'
                            label='Phone'
                            size='small'
                        />
                        <span className='basic-info-input'></span>
                    </div>
                </div>
                <div className='basic-info-container'>
                    <p className='basic-info'>
                        <BiDetail
                            style={{
                                fontSize: "18px",
                                color: "#3572FC",
                                marginRight: "10px",
                            }}
                        />
                        <span>Listing Details</span>
                    </p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className='basic-info-input-cont2'>
                            <TextField
                                className='basic-info-input'
                                label='Bedrooms'
                                size='small'
                            />
                            <TextField
                                className='basic-info-input'
                                label='Bathrooms'
                                size='small'
                            />
                            <TextField
                                className='basic-info-input'
                                label='Max Guest'
                                size='small'
                            />
                        </div>
                        <div className='basic-info-input-cont'>
                            <TextField
                                className='basic-info-input'
                                label='Details Text'
                                size='small'
                                multiline
                                rows={6}
                                style={{
                                    width: "600px",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='basic-info-container'>
                    <p className='basic-info'>
                        <BiDetail
                            style={{
                                fontSize: "18px",
                                color: "#3572FC",
                                marginRight: "10px",
                            }}
                        />
                        <span>Listing Details</span>
                    </p>
                    <div className='basic-info-input-cont'>
                        <DropzoneArea
                            acceptedFiles={["image/*"]}
                            dropzoneText={
                                "Click here or drop an image here to upload"
                            }
                            onChange={(files) => console.log("Files:", files)}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddListing;
