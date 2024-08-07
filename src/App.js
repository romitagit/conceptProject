import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <h1>Error Boundary Learning</h1>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
