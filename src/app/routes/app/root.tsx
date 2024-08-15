import './App.css';
import axios from 'axios';

export const apiClient =
    axios.create( {
        baseURL: 'http://localhost:8080',
})

export const AppRoot = () => {
  return (
    <div className="App">
      <h1>Workflow</h1>
    </div>
  )
};
