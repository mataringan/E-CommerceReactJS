import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import StockTable from "../../components/StockTable";
import SectionHeader from "../../components/SectionHeader";

const Admin = () => {
    const products = useSelector((state) => state.products.products);

    const [stock, setStock] = useState([...products]);

    return (
        <>
            <Header />
            <SectionHeader title="Products - Admin" />
            <StockTable
                headers={["", "Products", "Stock", "Action"]}
                stock={stock}
                setStock={setStock}
            />
        </>
    );
};

export default Admin;