import React from "react";
import { TextField, Stack, Box, Tooltip, Menu, MenuItem } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useSelector, useDispatch } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./ContactProperty.css";
import { useNavigate } from "react-router-dom";
import { DesktopDatePicker } from "@mui/lab";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import {
    arrivalDateAction,
    countAdultMinus,
    countAdultPlus,
    countBabiesMinus,
    countBabiesPlus,
    countChildMinus,
    countChildPlus,
    departureDateAction,
} from "../../../redux/action/searchAction";

const ContactProperty = ({ house }) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses.searchHouse);
    const searchHouses = useSelector((state) => state.houses.searchHouse);
    const guest = searchHouses.adult + searchHouses.child + searchHouses.babies;

    const handleReviewHouseRules = () => {
        navigate("/reviewHouseRules", {
            state: { house: house, searchHouses: searchHouses },
        });
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div className='contact-room-container'>
            <h6>Contact Room</h6>
            <div className='contact-room-info'>
                <div>
                    <p>Dates</p>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack className='contact-date'>
                                <DesktopDatePicker
                                    className='departure'
                                    label='Arrival'
                                    inputFormat='MM/dd/yyyy'
                                    value={houses.arrivalDate}
                                    onChange={(newValue) =>
                                        dispatch(arrivalDateAction(newValue))
                                    }
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                                <DesktopDatePicker
                                    label='Departure'
                                    inputFormat='MM/dd/yyyy'
                                    value={houses.departureDate}
                                    onChange={(newValue) =>
                                        dispatch(departureDateAction(newValue))
                                    }
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </Stack>
                        </LocalizationProvider>
                    </div>
                </div>
                <div>
                    <p>Guests</p>
                    <div className='date-contact'>
                        <p className='guest-collect'>
                            <span>
                                {houses.adult + houses.child + houses.babies}{" "}
                                Guests
                            </span>
                            <Box sx={{ flexGrow: 0, marginLeft: "15px" }}>
                                <Tooltip title='Open settings'>
                                    <RiArrowDropDownLine
                                        onClick={handleOpenUserMenu}
                                        sx={{ p: 0 }}
                                        style={{
                                            fontSize: "30px",
                                            cursor: "pointer",
                                        }}
                                    />
                                </Tooltip>
                                <Menu
                                    sx={{ mt: "45px" }}
                                    id='menu-appbar'
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <div className='guest-count guest-count2'>
                                        <MenuItem
                                            style={{ zIndex: "9999" }}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <div className='adult-search adult-search2'>
                                                <p>Adults</p>
                                                <div className='inc-drc'>
                                                    <BiMinus
                                                        className='inc-dec-icon'
                                                        onClick={() =>
                                                            dispatch(
                                                                countAdultMinus(
                                                                    houses.adult
                                                                )
                                                            )
                                                        }
                                                    />
                                                    <span>{houses.adult}</span>
                                                    <BsPlusLg
                                                        className='inc-dec-icon'
                                                        onClick={() =>
                                                            dispatch(
                                                                countAdultPlus(
                                                                    houses.adult
                                                                )
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem
                                            style={{ zIndex: "9999" }}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <div className='adult-search adult-search2'>
                                                <p>Child</p>
                                                <div className='inc-drc'>
                                                    <BiMinus
                                                        className='inc-dec-icon'
                                                        onClick={() =>
                                                            dispatch(
                                                                countChildMinus(
                                                                    houses.child
                                                                )
                                                            )
                                                        }
                                                    />
                                                    <span>{houses.child}</span>
                                                    <BsPlusLg
                                                        className='inc-dec-icon'
                                                        onClick={() =>
                                                            dispatch(
                                                                countChildPlus(
                                                                    houses.child
                                                                )
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem
                                            style={{ zIndex: "9999" }}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <div className='adult-search adult-search2'>
                                                <p>Babies</p>
                                                <div className='inc-drc'>
                                                    <BiMinus
                                                        className='inc-dec-icon'
                                                        onClick={() =>
                                                            dispatch(
                                                                countBabiesMinus(
                                                                    houses.babies
                                                                )
                                                            )
                                                        }
                                                    />
                                                    <span>{houses.babies}</span>
                                                    <BsPlusLg
                                                        className='inc-dec-icon'
                                                        onClick={() =>
                                                            dispatch(
                                                                countBabiesPlus(
                                                                    houses.babies
                                                                )
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>
                                </Menu>
                            </Box>
                        </p>
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

                <div className='data-price total-price'>
                    <p>Total Price</p>
                    <p>
                        $ {house.price + house.cleaningFee + house.serviceFee}
                    </p>
                </div>
                <button
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
                    onClick={handleReviewHouseRules}
                    disabled={
                        houses.arrivalDate && houses.departureDate && guest
                            ? false
                            : true
                    }
                    className={
                        houses.arrivalDate && houses.departureDate && guest
                            ? "reserve-enable"
                            : "reserve-disable"
                    }
                >
                    Reserve
                </button>
            </div>
        </div>
    );
};

export default ContactProperty;
