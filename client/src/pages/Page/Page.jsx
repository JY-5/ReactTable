import { useParams } from "react-router-dom";
import styles from './Page.module.css';

const Page = () => {
    let { id } = useParams();

    return (
        <main className={styles.main}>
            This is {id} page
        </main>
    )
}

export default Page;