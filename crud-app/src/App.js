import Navbar from './Components/Navbar';
import Home  from './Components/Home';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/all' component={AllUsers}></Route>
    <Route exact path='/add' component={AddUser}></Route>
    <Route component={NotFound}></Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
