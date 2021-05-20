import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Register from './components/Users/Register';
import Login from './components/Users/Login';
import UserContext from './components/Contexts/UserContext';
import { useEffect, useState } from 'react';
import Products from './components/Products/Products';
import Add from './components/Products/Add/Add';
import Details from './components/Products/Details/Details';
import Edit from './components/Products/Edit/Edit';
import MyProducts from './components/Products/MyProducts/MyProducts';
import CollectionType from './components/Products/CollectionType/CollectionType';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  const [email, SetEmail] = useState('');

  useEffect(() => {
    SetEmail(localStorage.getItem('email') ? localStorage.getItem('email') : '')

  }, [])
  return (
    <BrowserRouter >
      <UserContext.Provider value={{ email, SetEmail }}>
        <Layout>
          <ErrorBoundary>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/about" exact={true} component={About} />
              <Route path="/contact" exact={true} component={Contact} />
              <Route path="/products" exact={true} component={Products} />
              <Route path="/products/add" exact={true} component={Add} />
              <Route path="/products/:id" exact={true} component={Details} />
              <Route path="/products/edit/:id" exact={true} component={Edit} />
              <Route path="/myProducts" exact={true} component={MyProducts} />
              <Route path="/products/collections/:type" exact={true} component={CollectionType} />
              <Route path="/users/register" exact={true} component={Register} />
              <Route path="/users/login" exact={true} component={Login} />
            </Switch>
          </ErrorBoundary>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
