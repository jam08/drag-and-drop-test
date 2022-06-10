import List from './components/list/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>List</h1>
      </header>
      <main>
        <div className="tips-container">
          <p>Hey! Quick tips!</p>
          <ul className="tips-ul">
            <li>Use <span>TAB</span> to navigate through item in the list</li>
            <li>Use <span>Space</span> to select and de-select an item</li>
            <li>Use the keys <span>ArrowDown</span> and <span>ArrowUp</span> to move items in the list</li>
          </ul>
        </div>
        <List />
      </main>
    </div>
  );
}

export default App;
