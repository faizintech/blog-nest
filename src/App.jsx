import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Footer from "./components/Footer";
import ContextPostListProvider from "./store/context";


const App = () => {
  return (
    <ContextPostListProvider>
      <Header />
      <Nav />
      
      <Container />
      <Footer />
    </ContextPostListProvider>
  );
};
export default App;
