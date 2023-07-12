import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom';
import MainHeader from './Components/MainHeader';
import Labs from './Components/Labs';
import About from './Components/About';
import NotFound from './Components/NotFound';
import Support from './Components/Support';
import Home from './Components/Home';
const App = () => {
  return (
    <div>

      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/support'>support</NavLink>
          </li>
          <li>
            <NavLink to='/about'>about</NavLink>
          </li>
          <li>
            <NavLink to='/labs'>labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path='/support' element={<Support />} />
          <Route path='/about' element={<About />} />
          <Route path='/labs' element={<Labs />} />
          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App