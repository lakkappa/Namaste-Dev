import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./views/dashboardpage/DashboardPage";
import HomePage from "./views/homepage/HomePage";

export default class RouteFile extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<DashboardPage/>}/>
                </Routes>   
            </Router>
        )
    }
}