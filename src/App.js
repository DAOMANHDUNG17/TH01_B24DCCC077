import './App.css';
import TodoList from './TodoList';
import ColorPicker from './ColorPicker';
import Cart from './Cart';
import Postlist from './Postlist';
import QuizApp from './QuizApp';

function App() {
  return (
    <div className="App" style={{ padding: 20 }}>
      <TodoList />
      <hr />
      <ColorPicker />
      <hr />
      <Cart />
      <hr />
      <Postlist />
      <hr />
      <QuizApp />
    </div>
  );
}

export default App;
