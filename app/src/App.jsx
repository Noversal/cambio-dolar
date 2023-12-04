import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import {Suspense, lazy} from 'react'
import Spinner from "./components/Spinner";

const Calculate = lazy(() => import('./pages/Calculate'))
const GridDolar = lazy(() => import('./pages/GridDolar'))

function App() {
  const style = {
    button: {
      color: 'white',
      textDecoration: 'none',
      padding: '13px',
      background: 'green',
      borderRadius: '31px'
    },
    body: {
      display: 'flex',
      gap: '7px',
      justifyContent: 'center',
      padding: '20px'
    }
  }

  return (
    <BrowserRouter>
      <div style={style.body}>
        <NavLink style={
          ({ isActive }) => isActive ?
            style.button : {
            color: 'white',
            textDecoration: 'none',
            padding: '13px',}} to='/'>Calculadora</NavLink>
        
        <NavLink style={
          ({ isActive }) => isActive ?
            style.button : {
              color: 'white',
              textDecoration: 'none',
              padding: '13px',
          }}
          to='/value'>Valores</NavLink>
        
      </div>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Calculate />} />
          <Route path="/value" element={<GridDolar />} />
        </Routes>
      </Suspense>
  </BrowserRouter>
  );
}

export default App;
