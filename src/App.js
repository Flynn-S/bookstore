import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Welcome from './components/Welcome'
import CustomNavbar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
      return (
      <div>
        <CustomNavbar />
        <Welcome />
        <Home />
        <Footer />
      </div>
    );
  
  
}

export default App;
