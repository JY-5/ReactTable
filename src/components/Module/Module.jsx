import { useParams } from "react-router-dom";
import styles from './Module.module.css';

const Module = () => {
    let { topicId } = useParams();

    return (
        <div className={styles.container}>
            <h1>{topicId}</h1>
        </div>
    )
}

export default Module;