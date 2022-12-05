import styles from '../style/ui.module.css';
import { AiFillTwitterSquare, AiFillGithub, AiOutlineGooglePlus } from 'react-icons/ai';
function UI({ src, name, job, company }) {
    return (
        <div className={styles.box}>
            <img src={src} />
            <h2>My profile</h2>
            <ul className={styles.container}>
                <li className={styles['profile-name']}>
                    <p className={styles.left}>Name:</p>
                    <p className={styles.right}>{name}</p>
                </li>
                <hr />
                <li className={styles['profile-name']}>
                    <p>Job:</p>
                    <p>{job}</p>
                </li>
                <hr />
                <li className={styles['profile-name']}>
                    <p>Company:</p>
                    <p>{company}</p>
                </li>
                <hr />
            </ul>
            <ul className={styles['profile-infomation']}>
                <li className={styles.info}>
                    <AiFillTwitterSquare />
                </li>
                <li className={styles.info}>
                    <AiFillGithub />
                </li>
                <li className={styles.info}>
                    <AiOutlineGooglePlus />
                </li>
            </ul>
            <div className={styles.btn}>
                <button>View Profile</button>
            </div>
        </div>
    );
}

export default UI;
