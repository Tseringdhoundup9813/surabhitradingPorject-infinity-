
import './App.css';
import Home from './component/home';
import Navbar from './component/navbar';
import About from './component/about';
import Product from './component/product';
import Team from './component/team';
import Services from './component/services';
import Contact from './component/contact';
import Footer from "./component/footer";
import Career from './component/career';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Navbar></Navbar>
      <About></About>
      <Team></Team>
      <Product></Product>
      <Services></Services>
      <Career></Career>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
