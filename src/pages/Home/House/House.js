/* eslint-disable no-unused-vars */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { RiHotelBedLine } from "react-icons/ri";
import { FaBath } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import "./House.css";
import { Box } from "@mui/system";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const House = ({ house }) => {
    const navigate = useNavigate();

    const handleSingleHouse = () => {
        navigate("/singleHouseDetails", { state: { house: house } });
    };
    const {
        houseTitle,
        price,
        details,
        bedRooms,
        bathRooms,
        ratting,
        address,
        city,
        landlord,
        image,
    } = house;
    return (
        <Card className='single-card-container'>
            <Box className='card-image-container' onClick={handleSingleHouse}>
                <CardMedia
                    className='card-image'
                    component='img'
                    height='260px'
                    image={house.image.img1}
                    alt='green iguana'
                />
                <Box className='card-location'>
                    <ImLocation2 color='#3270FC' />
                    <Typography component={"p"}>
                        {address}, {city}
                    </Typography>
                </Box>
                <AiTwotoneHeart className='bookmark' />
                <Box className='card-images'>
                    <AiFillCamera />
                    <Typography component='p' sx={{ ml: 1 }}>
                        {Object.keys(image).length}
                    </Typography>
                </Box>
            </Box>
            <CardContent>
                <Typography
                    onClick={handleSingleHouse}
                    className='card-title'
                    gutterBottom
                    component='div'
                >
                    {houseTitle}
                </Typography>
                <Typography className='house-price'>$ {price}</Typography>
                <Typography className='house-details'>
                    {details.length > 100 ? details.slice(0, 100) : details}
                </Typography>
                <Box className='bed-bath'>
                    <Box className='bed'>
                        <RiHotelBedLine className='bed-icon' />
                        <Typography>{bedRooms}</Typography>
                    </Box>
                    <Box className='bed'>
                        <FaBath className='bath-icon' />
                        <Typography>{bathRooms}</Typography>
                    </Box>
                </Box>
                <Box className='landlord-ratting'>
                    <Box className='landlord'>
                        <CardMedia
                            component='img'
                            image={landlord.imageURL}
                            alt=''
                        />
                        <Typography className='landlord-name'>
                            By {landlord.name}
                        </Typography>
                    </Box>
                    <Rating
                        className='ratting'
                        name='read-only'
                        value={4}
                        readOnly
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default House;
