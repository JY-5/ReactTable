import { Switch, Route, NavLink } from "react-router-dom";
import Table from "../../components/Table/Table";
import Module from "../../components/Module/Module";
import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <main className={styles.main}>
            <header>
                <p className={styles.subtitle}>
                    <span className={styles.profits}>Profits / </span> 
                    <span>PPC</span>
                </p>
                <h1>PPC</h1>
                <nav className={styles.nav}>
                    <NavLink to={`/`} exact className={styles.link} activeClassName={styles.active}>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <span>Portfolio Level</span>
                    </NavLink>
                    <NavLink to={`/main/campaign`} exact className={styles.link} activeClassName={styles.active}>
                        <i className="fa fa-bullhorn" aria-hidden="true"></i>
                        <span>Campaign Level</span>
                    </NavLink>
                    <NavLink to={`/main/group`} exact className={styles.link} activeClassName={styles.active}>
                        <i className="fa fa-database" aria-hidden="true"></i>
                        <span>Ad Group Level</span>
                    </NavLink>
                    <NavLink to={`/main/keyword`} exact className={styles.link} activeClassName={styles.active}>
                        <i className="fa fa-key" aria-hidden="true"></i>
                        <span>Keyword Level</span>
                    </NavLink>
                    <NavLink to={`/main/search`} exact className={styles.link} activeClassName={styles.active}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <span>Search Term Level</span>
                    </NavLink>
                    <NavLink to={`/main/product`} exact className={styles.link} activeClassName={styles.active}>
                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                        <span>Product Level</span>
                    </NavLink>
                </nav>
            </header>
            <section>
                <Switch className={styles.route}>
                    <Route exact path="/">
                        <Table />
                    </Route>
                    <Route path={`/main/:topicId`}>
                        <Module />
                    </Route>
                </Switch>
            </section>
        </main>
    )
}

export default MainPage;