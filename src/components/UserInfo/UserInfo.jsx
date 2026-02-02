import styles from './styles.module.css'

export const UserInfo = (props) => {
    const {value, title} = props
    return(
        <div className={styles.block}>
            {title}: {value}
        </div>
    )
}
