import styles from './body.module.css';

export default function BodyContainer({ children }) {
  return <div className={`${styles.body}`}>{children}</div>;
}
