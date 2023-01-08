import CartTable from "../../components/CartTable";
import Header from "../../components/Header";
import SectionHeader from "../../components/SectionHeader";
import styles from "./style.module.css";

const Cart = () => {
    return (
        <div className={styles.container}>
            <Header />
            <SectionHeader title="My Cart" />
            <CartTable
                headers={["", "Products", "Price", "Quantity", "Total"]}
            />
        </div>
    );
};

export default Cart;