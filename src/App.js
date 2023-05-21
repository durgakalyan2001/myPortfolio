import Home from './components/Home'

import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={Home} />
    </Routes>
  </BrowserRouter>
)

export default App;
