import 'materialize-css'
import './index'
import './index.css'
import { useRoures } from './routes';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const routes = useRoures(false)
  return (
    <Router>
      <div className="container">
        {routes}
      </div>
   </Router>
  )}

export default App;
