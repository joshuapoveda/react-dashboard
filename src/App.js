import Aside from './components/Aside';
import WindowOne from './components/Win-One'
import WindowTwo from './components/Win-Two'
import WindowThree from './components/Win-Three'
import Main from './components/Main'
import './App.css';



function App() {
  return (
    <div className="App">
     <Aside></Aside>
     <WindowOne></WindowOne>
     <WindowTwo></WindowTwo>
     <WindowThree></WindowThree>
     <Main></Main>
    </div>
  );
}

export default App;
