import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth} from './firebase/firebase.utils';

class  App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser : null
    };
  }

      //application being aware of any auth changes on firebase.
      unsubscribeFromAuth = null;
  

      //subscribe to auth
      componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
          this.setState({ currentUser: user });
    
          console.log(user);
        });
      }
      //unsubscribe 
      componentWillUnmount(){
        this.unsubscribeFromAuth();
      }

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
     <Route exact path='/' component={HomePage} />
     <Route path='/shoppage' component={ShopPage} />
     <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}
export default App;
