import logo from './logo.svg';
import './App.css';

const hello = ["hello ", "world"]
const number1 = 5;
const number2 =6;
const string = “I love React!”;
function App() {
  return (
    <div>
      <code>src/App.js</code>
      
      <h2> {hello}</h2>

      <h3>{number1} + {number2}= {number1+number2}</h3>

      <h4>The string’s length is {string.length}</h4>

    </div>
  );
}

export default App;
