
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/contact/page'element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

