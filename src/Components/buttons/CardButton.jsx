import styles from './cardButton.module.css'

const CardButton = ({ id }) => {
    return (
        <>
            <button className={`${id === 2 ? styles.whiteButton : styles.blackButton} ${styles.cardButton}`}>Join</button>
        </>
    )
}

export default CardButton