import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';


function App() {
  const isauthen = useSelector((state)=>state.authentication.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isauthen&& <Auth/>}
      {isauthen && <UserProfile />}
    <Counter />

    </Fragment>
  );
}

export default App;
