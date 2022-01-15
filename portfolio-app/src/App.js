import './App.css';
import './style.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Aboutme from './components/Aboutme'
import { MDBIcon } from 'mdb-react-ui-kit';



function App() {
  return (
    <div className="App">
        <Header/>
        <Profile/>
        <div className="down-button"><MDBIcon fas icon="arrow-down" size='4x' /></div>
        <Aboutme />
    
    </div>
  );
}

export default App;
