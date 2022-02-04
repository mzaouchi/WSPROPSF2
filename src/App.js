import './App.css';
import Child from './Component/Child';

function App() {

  const name = 'Imen'
 
  let age = 17
 
  var bestUser = { nameUser : 'Skander', score : 23}
 
  const tab = ['Mahmoud', 'Skander', 'Elyess', 'Imen', 'Ghassen']
 
  const handleAlert=()=>{
    alert('Hello Props')
  }

  const handleAlertName=(a)=>{
    alert(`Hello ${a}`)
  }

  const show = true

  return (
    <div>
      <Child name={name} age={age} bestUser={bestUser} tab={tab} handleAlert={handleAlert} handleAlertName={handleAlertName} show={show}>
        <h2>Children Props</h2>
        <h3>Skander is a brave boy</h3>
      </Child>
    </div>
  );
}

export default App;
