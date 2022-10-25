import Header from './components/Header';
import { MethodProvider } from './Context/GlobalState';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>

         <MethodProvider>
          
          <Menu/>

         <Header />

         </MethodProvider>

        </div>
      </div>
    </div>
  );
}

export default App;
