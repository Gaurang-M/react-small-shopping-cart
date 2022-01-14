import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import ProductProvider from "./context/Product.js"


function App() {
  return (
    <ProductProvider>
      <Header></Header>
      <div className="row">
        <Main></Main>
        <Basket></Basket>
      </div>
    </ProductProvider>
  );
}

export default App;
