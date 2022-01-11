
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
function App() {
  return (
    <div className="App">
    

    {/* HEader*/}
    <Header/>
    
    {/*tinder cards*/}
    <TinderCards/>

    {/*swipe buttons */}
     <SwipeButtons/>
    </div>
  );
}

export default App;
