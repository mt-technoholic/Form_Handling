import './App.css';
import Routes from './routes';
function App() {

  const role = "landlord";

  return (
    <div>
      <Routes role={role}/>
    </div>
  );
}

export default App;
