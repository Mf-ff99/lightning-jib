import Main from './main'
import Nav from './Components/NavBar/NavBar'
import './App.css';
import './styles/styles.css'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <main>
      <header>
        <Nav />
      </header>
    <div className="App">
      <Main />
    </div>
    <Footer />
    </main>
  );
}

export default App;
