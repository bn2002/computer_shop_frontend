import React from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Dashboard from "../../components/admin/Dashboard";
import AddProduct from "../../components/admin/AddProduct";
const AdminLayout = () => {
    return (
        <div classNameName="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="add-product" element={<AddProduct/>}/>
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default AdminLayout