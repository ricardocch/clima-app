import './App.css';
import SideLocation from './components/SideLocation/SideLocation.jsx'
import MainLocation from './components/MainWeather/MainWeather.jsx'
import  Search from './components/Search/Search.jsx'
function App() {
  return (
    <div className="App">
      <SideLocation/>
      <MainLocation/>

    </div>
  );
}

export default App;
