import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { Button, Form, Table } from "react-bootstrap";
import { updateStock } from "../../redux/ProductsSlice";
import styles from "./style.module.css";

const StockTable = ({ headers, stock, setStock }) => {
    const dispatch = useDispatch();

    const handleChange = (quantity, stock, id, idx) => {
        const data = [...stock];

        const product = { ...stock[idx] };

        const dataFilter = data.filter((item) => item.id !== id);

        quantity ? product.quantity = parseInt(quantity) : product.quantity = quantity;

        dataFilter.push(product);

        dataFilter.sort((a, b) => a.id - b.id || a.name.localeCompare(b.name))

        setStock(dataFilter);
    };

    const handleUpdate = (stock, idx) => {
        Swal.fire({
            title: "Are you sure want to update stock?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update!"
        }).then((result) => {
            if (result.isConfirmed) {
                if (!stock[idx].quantity && stock[idx].quantity !== 0) {
                    Swal.fire({
                        title: "Quantity must a number!",
                        icon: "error"
                    });
                } else {
                    dispatch(updateStock({ quantity: stock[idx].quantity, idx }));
                    Swal.fire({
                        title: "Update Success",
                        icon: "success"
                    });
                }
            }
        });
    };

    return (
        <Table striped bordered hover className="m-4" style={{ width: "95%" }}>
            <thead>
                <tr>
                    {
                        headers.map((header, headerIdx) => {
                            return <th key={headerIdx}>{header}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    stock?.map((data, dataIdx) => {
                        return (
                            <tr key={data.id}>
                                <td>
                                    <img src={data.image} className={styles.img} alt={data.image} />
                                </td>
                                <td>
                                    <h4>{data.title}</h4>
                                    <p>{data.description}</p>
                                    <small>{data.category}</small>
                                </td>
                                <td>
                                    <Form.Control
                                        type="number"
                                        value={data.quantity}
                                        min={0}
                                        onChange={(e) => handleChange(e.target.value, stock, data.id, dataIdx)}
                                    />
                                </td>
                                <td>
                                    <Button
                                        variant="primary"
                                        onClick={() => handleUpdate(stock, dataIdx)}
                                    >
                                        Update
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    );
};

export default StockTable;