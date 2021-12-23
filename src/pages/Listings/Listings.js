/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import House from "../Home/House/House";
import MapDirections from "../MapDirection/MapDirections";
import { useDispatch } from "react-redux";
import "./Listings.css";
import {
    fetchFailed,
    loadingRequest,
    fetchSuccess,
} from "../../redux/action/houseAction";
import {
    addressAction,
    adultNull,
    arrivalDateAction,
    departureDateAction,
} from "../../redux/action/searchAction";

const Listings = () => {
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses.houses);
    const searchHouse = useSelector((state) => state.houses.searchHouse);
    const guest = searchHouse.adult + searchHouse.child + searchHouse.babies;

    const searchHouseResult = houses.filter((house) => {
        const result = house.address
            .toLowerCase()
            .includes(searchHouse.address.toLowerCase());
        if (result) {
            return house;
        }
    });

    const handleResetSearch = () => {
        dispatch(addressAction(""));
        dispatch(arrivalDateAction(""));
        dispatch(departureDateAction(""));
        dispatch(adultNull());
    };

    useEffect(() => {
        dispatch(loadingRequest());
        fetch("./fakeData.json")
            .then((res) => res.json())
            .then((data) => dispatch(fetchSuccess(data)))
            .catch((error) => dispatch(fetchFailed(error.message)));
    }, [dispatch]);
    return (
        <div className='listings-container'>
            <MapDirections />
            <div className='listing-house-container'>
                {searchHouse.address && guest && (
                    <div className='search-result-cont'>
                        <p className='search-result'>
                            Result For: {searchHouse.address} |{" "}
                            {searchHouse.arrivalDate.toLocaleDateString()} -{" "}
                            {searchHouse.departureDate.toLocaleDateString()} |{" "}
                            {guest} Guest
                        </p>
                        <button onClick={handleResetSearch}>
                            Reset Search
                        </button>
                    </div>
                )}

                <div className='listing-house-cont'>
                    {searchHouse.address && guest ? (
                        searchHouseResult.length === 0 ? (
                            <p>There is no home in this location</p>
                        ) : (
                            searchHouseResult.map((house) => (
                                <House key={house.id} house={house} />
                            ))
                        )
                    ) : (
                        houses.map((house) => (
                            <House key={house.id} house={house} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Listings;
