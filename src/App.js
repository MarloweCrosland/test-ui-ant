import logo from "./logo.svg";
import Menu from "./template/Menu";
import Footer from "./template/Footer";
import Nav from "./template/Nav";
import { Button } from 'antd';
import Contact from "./template/Contact";
import "./App.css";



function App() {
    return (
        <>
            <Nav></Nav>
            <Menu></Menu>
            <Footer></Footer>
            <Contact></Contact>
            <Button></Button>
        </>
    );
}

export default App;
