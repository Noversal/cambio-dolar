import OptionDolars from './components/OptionDolar';

const dolarInfo = [
  {name:'DÓLAR 🔵',value:'DÓLAR BLUE',key:1},
  {name:'DÓLAR CDO C/LIQ',value:'DÓLAR CDO C/LIQ',key:2},
  {name:'DÓLAR BNA',value:'DÓLAR BNA',key:3},
  {name:'DÓLAR MEP Contado',value:'DÓLAR MEP Contado',key:4},
  {name:'DÓLAR TARJETA',value:'DÓLAR TARJETA',key:5}
];

function App() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <header style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '7px'
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '40px',
          fontWeight: 'bold',
          color: 'black'
        }}>
          Dólares
        </h1>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          <select
            style={{
              textAlign: 'center',
              width: '150px',
              padding: '3.5px 7px',
              borderRadius: '5px',
              border: '1px solid blue'
            }}
            name='Valores de Dolar'
            title='Valores de Dolar'
          >
            <OptionDolars dolarInfo={dolarInfo} />
            
          </select>
          <label htmlFor='dolar' style={{fontSize:'21px'}}>Cantidad de Dolares</label>
          <input id='dolar' style={{
            textAlign: 'center',
            width: '150px',
            padding: '3.5px 7px',
            borderRadius: '5px',
            border: '1px solid blue',
          }}
          type='text'
          placeholder='50,100,150,200 ...'
          title='Cantidad de Dolares'
          />
          <button style={{
            width: '150px',
            maxWidth: '400px',
            border: '1px solid blue',
            padding: '7px 14px',
            fontWeight: 'bold',
            borderRadius: '5px'
          }}> CALCULAR </button>
        </form>
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
