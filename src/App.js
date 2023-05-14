import './App.css';
import FlyerGallery from './components/FlyerGallery';
import barchiveHeader from './images/barchivehead.png';

function App() {

  return (
    <div className="App">
      <div className="barchive-header">
        <img src={barchiveHeader} alt="The Barchive" />
      </div>
      <h2 className="heading">An archive of show flyers for WORLD FAMOUS rock n' roll venue The Bark FL</h2>
      <div className="flyer-container">
        <FlyerGallery />
      </div>
      <footer className="footer">Mural art by Stephanie! Barchive logo by Leah!</footer>
    </div>
  );
}

export default App;
