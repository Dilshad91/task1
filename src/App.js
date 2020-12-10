import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/List">List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Create">Create</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Search">Search</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Update">Update</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/List">
          <RestaurantList />
        </Route>
        <Route path="/Create">
          <RestaurantCreate />
        </Route>
        <Route path="/Search">
          <RestaurantSearch />
        </Route>
        <Route path="/Details">
          <RestaurantDetail />
        </Route>
        <Route path="/Update/:id" render={props=>(<RestaurantUpdate {...props}/>)}>
          
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
