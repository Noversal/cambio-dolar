import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react'
import Layout from './components/Layout';

const Calculate = lazy(() => import('./pages/Calculate'))
const GridDolar = lazy(() => import('./pages/GridDolar'))

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Calculate />} />
            <Route path='/value' element={<GridDolar />} />
          </Route>
        </Routes>
  </BrowserRouter>
  );
}

export default App;
