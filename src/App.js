import './App.css';
import FlyerGallery from './components/FlyerGallery';
import barchiveHeader from './images/barchivehead.png';

function App() {

  return (
    <div className="App">
      <div className="barchive-header">
        <img src={barchiveHeader} alt="The Barchive" />
      </div>
      <div className="flyer-container">
        <FlyerGallery />
      </div>
    </div>
  );
}

export default App;
