import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Listings from "./pages/Listings/Listings";
import Navigation from "./pages/Shared/Navigation/Navigation";
import SingleHouseDetails from "./pages/SingleHouseDetails/SingleHouseDetails";
import ReviewHouseRules from "./pages/ReviewHouseRules/ReviewHouseRules";
import ConfirmPayment from "./pages/ConfirmPayment/ConfirmPayment";
import Login from "./pages/SignIn/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./pages/SignIn/PrivateRoute/PrivateRoute";
import CustomAlert from "./pages/Shared/CustomAlert/CustomAlert";
import AddListing from "./pages/AddListing/AddListing";
import YourListing from "./pages/YourListing/YourListing";

function App() {
    return (
        <div className='App'>
            <AuthProvider>
                <Navigation />
                <CustomAlert />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/listings' element={<Listings />} />
                    <Route
                        path='/singleHouseDetails'
                        element={
                            <PrivateRoute>
                                <SingleHouseDetails />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/reviewHouseRules'
                        element={
                            <PrivateRoute>
                                <ReviewHouseRules />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/confirmPayment'
                        element={
                            <PrivateRoute>
                                <ConfirmPayment />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/add-listing'
                        element={
                            <PrivateRoute>
                                <AddListing />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/your-listing'
                        element={
                            <PrivateRoute>
                                <YourListing />
                            </PrivateRoute>
                        }
                    />
                    <Route path='/sign-in' element={<Login />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
