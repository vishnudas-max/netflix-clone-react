
import './App.css'
import Banner from "./Components/banner/Banner";
import Navbar from "./Components/navbar/Navbar";
import Rowpost from './Components/rowpost/Rowpost';
import { action_URL,originals_URL } from './urls';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost title='Netflix Originals' url={action_URL}/>
      <Rowpost title='Action' isSmall url={originals_URL} />
    </div>
  );
}

export default App;
