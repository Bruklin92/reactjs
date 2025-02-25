import logo from './logo.svg';
import './App.css';
import Contry from './container/Contry';
import ContryClass from './container/ContryClass';
import Counter from './container/Counter';
import CounterFun from './container/CounterFun';
import Coursefun from './container/Coursefun';
import CourseClass from './container/CourseClass';

function App() {
  return (
    <div>
      <Coursefun />
      <CourseClass />
      {/* <Contry />
      <ContryClass /> */}
      {/* <Counter /> 
      <CounterFun /> */}
    </div>
  );
}

export default App;
