import logo from './logo.svg';
import './App.css';
import Form1 from './Form1';
import Form2 from './Form2'

function App() {
const contact = [
  {
    id:"1",
    name:"Abhi",
    email:"abhi@abc"
  },
  {
    id:"2",
    name:"Singh",
    email:"abhi@singh"
  }
]

  return (
    <div className="App">
      <Form1/>
      <Form2 contact={contact}></Form2>
    </div>
  );
}

export default App;
