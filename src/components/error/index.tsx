import styles from './error.module.scss'

function Error() {
  return (
    <div className={styles.messageError}>
        <p>A server error has occurred. Please try again</p>
        <button type='button' onClick={()=> window.location.reload()}>Refresh</button>
    </div>
  )
}

export default Error