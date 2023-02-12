import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills"
import {Projects} from "./projects/Projects";
import Responses from "./responses/Responses";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Responses/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
