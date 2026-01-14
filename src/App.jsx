import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";


function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Products />
      <About />
      <Contact />

      {/* <section id="main" className="section">Home Section</section>
      <section id="products" className="section">Products Section</section>
      <section id="about" className="section">About Section</section>
      <section id="contact" className="section">Contact Section</section> */}
    </>
  );
}

export default App;
