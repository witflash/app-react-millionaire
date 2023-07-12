import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.block}>
      <div className={styles.loading}>Loading</div>
    </div>
  );
}

export default Loader;
