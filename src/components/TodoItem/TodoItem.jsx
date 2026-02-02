import styles from './styles.module.css'

export const TodoItem = ({title, isComplited}) => {
    return(
        <div className='styles.wrapper'>
            <p>
                {title}
            </p>
            {/* <p>
                {isComplited ? 'Done' : 'Not yet'}
            </p> */}
        </div>
      
    )
}