import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import GlobalRoutes from "./routes/GlobalRoutes";

const App = () => {
    return (
        <div className="app_container">
            <GlobalRoutes />
            <Footer />
        </div>
    );
}

export default App;
