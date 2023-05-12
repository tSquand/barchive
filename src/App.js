import './App.css';
import FlyerGallery from './components/FlyerGallery';

function App() {

  return (
    <div className="App">
      <h1> The Barchive </h1>
      <div className="flyer-container">
        <FlyerGallery />
      </div>
      <footer>
        credits & email submission here?
      </footer>
    </div>
  );
}

export default App;
