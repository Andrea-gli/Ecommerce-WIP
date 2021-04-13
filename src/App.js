import Homepage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import ContactPage from './pages/contact/contactpage.component';
import signInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/signin' component={signInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
