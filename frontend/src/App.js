import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import UserContext from './components/Contexts/UserContext';
import { useEffect, useState } from 'react';
import Products from './components/Products/Products';
import Add from './components/Products/Add/Add';
import Details from './components/Products/Details/Details';
import Edit from './components/Products/Edit/Edit';
import MyProducts from './components/Products/MyProducts/MyProducts';

function App() {
  const [email, SetEmail] = useState('');
  
  useEffect(() => {
    SetEmail(localStorage.getItem('email') ? localStorage.getItem('email') : '')

  }, [])
  return (
    <BrowserRouter >
      <UserContext.Provider value={{ email, SetEmail }}>
        <Layout>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" exact={true} component={About} />
            <Route path="/contact" exact={true} component={Contact} />
            {/* <Route path="/animals" exact component={Animals} />
            <Route path="/animals/add" exact component={Add} />
            <Route path="/animals/:id" exact component={Details} />
            <Route path="/animals/edit/:id" exact component={Edit} /> */}
            <Route path="/products" exact={true}  component={Products} />
            <Route path="/products/add" exact={true} component={Add} />
            <Route path="/products/:id" exact={true} component={Details} />
            <Route path="/products/edit/:id" exact={true} component={Edit} />
            <Route path="/myProducts" exact={true} component={MyProducts} />
            <Route path="/authentication/register" exact={true} component={Register} />
            <Route path="/authentication/login" exact={true} component={Login} />
          </Switch>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
