// Import data

// Import components
import './App.css';
import SearchBar from './SearchBar.jsx'
import Gallery from './Gallary.jsx'


function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <SearchBar type="text" placeholder="Search for used goods"/>
        <SearchBar type="checkbox"/>
        <SearchBar type="radio"/>
        <Gallery/>


      </div>
    </div>
  );
}

export default App;
