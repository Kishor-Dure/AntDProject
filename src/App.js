import './App.css';
import 'antd/dist/antd.min.css';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Tables from './Table';
import Forms from './Forms';
import TodoList from './TodoList';
import Meals from './Meals';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/tables' exact component={Tables} />
        <Route path='/forms' exact component={Forms} />
        <Route path='/todolist' exact component={TodoList} />
        <Route path='/api' exact component={Meals} />
      </BrowserRouter>
    </div>
  );
}

export default App;
