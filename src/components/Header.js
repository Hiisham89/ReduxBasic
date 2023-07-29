import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authenticationActions } from '../store/authen-slice';


const Header = () => {
  const isauthenticated = useSelector((state)=>state.authentication.isAuthenticated);
  const dispatch = useDispatch();
  const logouthandler = () =>{
    dispatch(authenticationActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
          {isauthenticated&&(
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logouthandler}>Logout</button>
          </li>

        </ul>

      </nav>
    )}
    </header>
  );
};

export default Header;
