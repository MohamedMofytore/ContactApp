
import './App.css';
import {Routes,Route,Link} from  "react-router-dom"
import UsersList from './UsersList';
import AddUser from './AddUser';
function App() {
  return (
    <div className="App">

      <Link to="/users">
      <button>users</button>
      </Link>
    <AddUser />
<Routes>
  <Route path="/users" element={<UsersList />}/>
</Routes>

      
    </div>
  );
}

export default App;
