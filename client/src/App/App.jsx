import { Switch, Route, Link } from "react-router-dom";
import styles from './App.module.css';
import 'font-awesome/css/font-awesome.min.css';
import MainPage from '../pages/MainPage/MainPage';
import Page from '../pages/Page/Page';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <ul className={styles.ul}>
          <li className={styles.leftHeader}>
              <Link to="/" className={styles.logoLink}>
                  <img className={styles.logo} src="https://ui-avatars.com/api/?name=S&background=6B59CC&color=fff&bold=true" alt="logo"/>
              </Link>
              <Link to={`/summary`} className={styles.summary} >
                    Summary
              </Link>
              <Link to={`/tools`} className={styles.tools} >
                    Amazon tools
              </Link>
              <Link to={`/inventory`} className={styles.inventory} >
                    Warehouse Inventory
              </Link>
          </li>
          <li className={styles.rightHeader}>
            <Link to={`/notification`} className={styles.notification} >
              <i className={`${styles.bellIcon} fa fa-bell-o`}></i>
            </Link>
            <Link to={`/user`} className={styles.user} >
                  Monica Simons
            </Link>
            <Link to={`/user`} className={styles.avatar} >
              <img className={styles.avatar} src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png" alt="avatar"/>
            </Link>
          </li>
        </ul>
      </header>
      <Switch className={styles.switch}>
        <Route path='/main' className={styles.route}><MainPage /></Route>
        <Route path='/:id'><Page /></Route>
        <Route path='/' className={styles.route}><MainPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
