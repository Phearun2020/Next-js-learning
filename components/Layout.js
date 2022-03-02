import NavBar from "./navBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <NavBar />
            { children }
            <Footer />
        </div>
    );
}
 
export default Layout;