import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import styles from "./style.module.css";

const RekapPenjualanTable = ({ headers }) => {

    const checkout = useSelector((state) => state.products.checkout);

    let totalPrice = 0;

    if (checkout.length >= 1) {
        return (
            <Table striped bordered hover className="m-4" style={{ width: "95%" }}>
                <thead className="table-dark">
                    <tr>
                        {
                            headers.map((header, headerIdx) => {
                                return <th key={headerIdx} className="text-center">{header}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        checkout?.map((data) => {
                            totalPrice += data.sold * data.price;
                            return (
                                <tr key={data.id}>
                                    <td>
                                        <img src={data.image} className={styles.img} alt={data.image} />
                                    </td>
                                    <td>
                                        <h5>{data.title}</h5>
                                        <small>{data.category}</small>
                                    </td>
                                    <td className={styles.price}>
                                        ${data.price.toFixed(2)}
                                    </td>
                                    <td className="text-center">
                                        {data.sold}
                                    </td>
                                    <td className="text-end">
                                        ${(data.sold * data.price).toFixed(2)}
                                    </td>
                                </tr>
                            );
                        })
                    }
                    <tr className="table-primary">
                        <td colSpan={4} className="text-center">
                            <strong>TOTAL PROFIT</strong>
                        </td>
                        <td className="text-end">
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </td>
                    </tr>
                </tbody>
            </Table>
        );
    }
    else {
        return <h3 className={styles.no_data}>Tidak ada data!</h3>
    }
}

export default RekapPenjualanTable;