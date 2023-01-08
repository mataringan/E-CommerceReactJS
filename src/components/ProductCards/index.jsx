import Row from "react-bootstrap/Row";
import ProductCard from "../ProductCard";

const ProductCards = ({ data }) => {
    return (
        <Row xs={1} md={2} lg={3} xl={4} className="mx-3">
            {
                data.map((item, itemIdx) => (<ProductCard data={item} key={itemIdx} />))
            }
        </Row>
    );
};

export default ProductCards;
