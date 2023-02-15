
import './App.css';
import Home from './component/home';
import Navbar from './component/navbar';
import About from './component/about';
import Product from './component/product';
import Team from './component/team';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Navbar></Navbar>
      <About></About>
      <Team></Team>
      <Product></Product>
      
    </div>
  );
}

export default App;
