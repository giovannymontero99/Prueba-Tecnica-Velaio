import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Admin from './components/Admin';




function App() {

 

  return (
    <div className='App'>
      <div className='Main'>
        <BrowserRouter  >
         <Routes>
          <Route path='/' element={<> <Header login={true}/> <Login login={true}/>  </>}>
          </Route>
          <Route path='/signup' element={<> <Header login={false}/> <Login login={false}/>  </>}>
          </Route>
          <Route path='/admin' element={<Admin />}>
          </Route>
         </Routes>
        </BrowserRouter >        
      </div>
    </div>
  );
}

export default App;
