import { PuffLoader } from 'react-spinners';
import styles from './Loader.module.css';

function Loader() {
    return (
        <div className={styles.loader}>
            <PuffLoader color="#ff4500" height={100} width={100} />
        </div>
    );
}

export default Loader;
