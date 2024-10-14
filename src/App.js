import Navbar from "./components/Navbar.js";
import Search  from "./components/Search.js";
import Products from "./components/Products.js";
import About from "./components/About.js";
import Footer from "./components/footer.js";

function App(){
    return(
        <div>
               <Navbar></Navbar>
    <Search></Search>
    <Products></Products>
    <About></About>
    <Footer></Footer>
        </div>
    )
}

export default App