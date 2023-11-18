import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Calculate from "./pages/Calculate";
import GridDolar from "./pages/GridDolar";


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
      gap: '7px'
    }
  }

  return (
    <BrowserRouter>
      <div style={style.body}>
        <Link style={style.button} to='/'>Calculadora</Link>
        <Link style={style.button} to='/value'>Valores</Link>
      </div>
    <Routes>
        <Route path="/" element={<Calculate />} />
        <Route path="/value" element={<GridDolar />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
