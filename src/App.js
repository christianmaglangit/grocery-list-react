import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import NavHead from "./components/NavHead";
import AddProduct from "./components/AddProduct";
import "./style.css";
import EditProduct from "./components/EditProduct";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Searchbar />
      <NavHead />
      <Home />
      <AddProduct />
      <EditProduct />
    </>
  );
}

export default App;
