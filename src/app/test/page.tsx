import styles from './test.module.scss';

const Page = () => {
  return (<div className={styles.Container}>
  <button>gray300</button>
  <button>gray500</button>
  <button>gray700</button>
  <button>gray800</button>
  <button>gray900</button>
  <button>white</button>
  <button>red300</button>
  <button>red500</button>
  <button>red600</button>
  <button>yellow500</button>
  <button>red-gradation-100</button>
  <button>red-gradation-200</button>
  </div>
  )
};

export default Page;