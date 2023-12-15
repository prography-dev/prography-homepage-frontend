import styles from './CommonWrapper.module.scss';

const CommonWrapper = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.PgCommonWrapper}>{children}</div>;
};

export default CommonWrapper;
