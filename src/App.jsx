import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Item from "./components/Item";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";
import ViewItems from "./components/ViewItems";



function App() {
  return (
    <div className=" main ">
      <Header/>
      <HeroBanner/>
      <Story/>
      <ViewItems></ViewItems>
      <Item></Item>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;




