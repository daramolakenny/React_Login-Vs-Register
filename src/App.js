import './App.css';
import Form from './Component/Form';
// import Login from './Component/Login';

function App() {
  var userisRegistered = true;
  // var userisRegistered = false;

  return (
    <div className="App">
      <Form isRegistered={userisRegistered} />
    </div>
  );
}

export default App;
