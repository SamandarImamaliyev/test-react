import styles from './input.module.css'

const Input = ({ placeholder }) => {
    return (
        <>
            <input className={styles.allInputs} type="text" placeholder={placeholder} />
        </>
    )
}

export default Input