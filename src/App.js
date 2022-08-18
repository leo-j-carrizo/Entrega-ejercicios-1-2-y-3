import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/greetings';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greetings name="joako"/> */}
        <GreetingF name="joako"></GreetingF>
        <TaskListComponent/>
      </header>
    </div>
  );
}

export default App;
