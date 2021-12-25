import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AddListing.css";
import useAuth from "../../hooks/useAuth";
import { CircularProgress, MenuItem, TextField } from "@mui/material";
import { BsInfo, BsCardImage } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { BiDetail } from "react-icons/bi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { loadingRequest } from "../../redux/action/houseAction";
import { errorAlert, successAlert } from "../../redux/action/alertAction";
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
    const [type, setType] = useState("House");
    const [images, setImages] = useState([]);
    const [houseData, setHouseData] = useState({});
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses);

    const onDrop = useCallback((acceptedFile, rejectedFile) => {
        acceptedFile.forEach((file) => {
            // convert to base64
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImages((prevState) => [...prevState, reader.result]);
            };
            //
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: "image/*",
        maxFiles: 5,
    });

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const handleHouseInfo = (e) => {
        e.preventDefault();
        let newData = { ...houseData };
        newData[e.target.name] = e.target.value;
        setHouseData(newData);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let landlord = {};
        landlord.email = email;
        landlord.phone = phone;
        landlord.website = website;
        landlord.name = user.displayName;
        landlord.imageURL = user.photoURL;
        houseData.landlord = landlord;
        dispatch(loadingRequest(true));
        fetch("https://ants-nest.herokuapp.com/add-listing", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ houseData: houseData, images: images }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    dispatch(
                        successAlert(true, "Your Listing Added Successfully!")
                    );
                    dispatch(loadingRequest(false));
                    setImages([]);
                    e.target.reset();
                }
            })
            .catch((err) => {
                dispatch(errorAlert(true, "Your Listing Added failed!"));
                console.log(err.message);
                dispatch(loadingRequest(false));
            });
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

            <form onSubmit={handleFormSubmit}>
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
                            name='houseTitle'
                            onBlur={handleHouseInfo}
                        />
                        <TextField
                            className='basic-info-input'
                            select
                            label='Type'
                            size='small'
                            value={type}
                            onChange={handleChange}
                            name='type'
                            onBlur={handleHouseInfo}
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
                            name='price'
                            onBlur={handleHouseInfo}
                        />
                    </div>
                    <div className='basic-info-input-cont'>
                        <TextField
                            className='basic-info-input'
                            label='Cleaning Fee'
                            size='small'
                            name='cleaningFee'
                            onBlur={handleHouseInfo}
                        />
                        <TextField
                            className='basic-info-input'
                            label='Service Fee'
                            size='small'
                            name='serviceFee'
                            onBlur={handleHouseInfo}
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
                            name='address'
                            onBlur={handleHouseInfo}
                        />
                        <TextField
                            className='basic-info-input'
                            label='City'
                            size='small'
                            name='city'
                            onBlur={handleHouseInfo}
                        />
                        <TextField
                            className='basic-info-input'
                            label='Email'
                            size='small'
                            name='email'
                            onBlur={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='basic-info-input-cont'>
                        <TextField
                            className='basic-info-input'
                            label='Website'
                            size='small'
                            name='website'
                            onBlur={(e) => setWebsite(e.target.value)}
                        />
                        <TextField
                            className='basic-info-input'
                            label='Phone'
                            size='small'
                            name='phone'
                            onBlur={(e) => setPhone(e.target.value)}
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
                                name='bedRooms'
                                onBlur={handleHouseInfo}
                            />
                            <TextField
                                className='basic-info-input'
                                label='Bathrooms'
                                size='small'
                                name='bathRooms'
                                onBlur={handleHouseInfo}
                            />
                            <TextField
                                className='basic-info-input'
                                label='Max Guest'
                                size='small'
                                name='guest'
                                onBlur={handleHouseInfo}
                            />
                        </div>
                        <div className='basic-info-input-cont'>
                            <TextField
                                className='basic-info-input'
                                label='Details Text'
                                size='small'
                                name='details'
                                onBlur={handleHouseInfo}
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
                        <BsCardImage
                            style={{
                                fontSize: "18px",
                                color: "#3572FC",
                                marginRight: "10px",
                            }}
                        />
                        <span>Header Media</span>
                    </p>
                    <div className='basic-info-input-cont'>
                        <div className='dropzone' {...getRootProps()}>
                            <div
                                style={{
                                    textAlign: "center",
                                    color: "#A59999",
                                }}
                            >
                                <input {...getInputProps()} />
                                <AiOutlineCloudUpload
                                    style={{
                                        fontSize: "40px",
                                        color: "#3572fc",
                                    }}
                                />
                                {isDragActive ? (
                                    <p>Drag Active</p>
                                ) : (
                                    <>
                                        <p>
                                            Click here or drop files to upload
                                        </p>
                                        <em>you can upload must 5 images</em>
                                    </>
                                )}
                                {images.length > 0 && (
                                    <div>
                                        {images.map((image, index) => (
                                            <img
                                                className='selected-image'
                                                src={image}
                                                key={index}
                                                alt=''
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {images.length > 0 && (
                    <button className='save-change-listing' type='submit'>
                        {houses.loading ? (
                            <CircularProgress
                                style={{ fontSize: "7px", color: "#fff" }}
                            />
                        ) : (
                            "Save Change"
                        )}
                    </button>
                )}
            </form>
        </div>
    );
};

export default AddListing;
