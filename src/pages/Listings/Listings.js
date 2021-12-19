import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import House from "../Home/House/House";
import MapDirections from "../MapDirection/MapDirections";
import { useDispatch } from "react-redux";
import "./Listings.css";
import {
    fetchFailed,
    fetchRequest,
    fetchSuccess,
} from "../../redux/action/houseAction";
<<<<<<< HEAD

const Listings = () => {
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses.houses);
=======
import { useLocation } from "react-router-dom";

const Listings = () => {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const houses = useSelector((state) => state.houses.houses);
    const searchHouse = useSelector((state) => state.houses.searchHouse);
    const guest = searchHouse.adult + searchHouse.child + searchHouse.babies;
>>>>>>> 591e528... error handle

    useEffect(() => {
        dispatch(fetchRequest());
        fetch("./fakeData.json")
            .then((res) => res.json())
            .then((data) => dispatch(fetchSuccess(data)))
            .catch((error) => dispatch(fetchFailed(error.message)));
    }, [dispatch]);
    return (
        <div className='listings-container'>
            <MapDirections />
            <div className='listing-house-container'>
<<<<<<< HEAD
                <p>Result For: </p>
=======
                {state && (
                    <p>
                        Result For: {searchHouse.address} |{" "}
                        {searchHouse.arrivalDate.toLocaleDateString()} -{" "}
                        {searchHouse.departureDate.toLocaleDateString()} |{" "}
                        {guest} Guest
                    </p>
                )}
>>>>>>> 591e528... error handle
                <div className='listing-house-cont'>
                    {houses.map((house) => (
                        <House key={house.id} house={house} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Listings;
