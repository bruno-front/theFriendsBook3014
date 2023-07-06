import './App.css';
import Friends from './modules/friends/friends';
import Menu from './modules/menu/menu';
import Profile from './modules/profile/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-logo">Logo</span>
      </header>
      <main className="App-main">
        <div className="App-sidebar">
          <Menu/>
        </div>
        <div className="App-views">
          <Profile/>
          <Friends/>
        </div>
      </main>
    </div>
  );
}

export default App;
