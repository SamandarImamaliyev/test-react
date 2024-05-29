import React from 'react'
import styles from './card.module.css'
import CardButton from '../buttons/CardButton'

function Card({ price, definition, list, id }) {
    return (
        <div className={styles.card} >
            <div>
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                    <span style={{ fontSize: '20px', position: 'absolute', left: '0px', top: '15px' }}>$</span>
                    <span style={{ fontSize: '80px', fontWeight: 'bold', marginLeft: '15px' }}>{price}
                    </span>
                    <span style={{ fontSize: '20px' }}>per month</span>
                </div>
                <p style={{ display: 'inline', fontSize: '20px' }}>{definition}</p>
                <ul style={{ marginTop: '60px' }}>
                    {list.map((text) => (
                        <li>{text}</li>
                    ))}
                </ul>
            </div>
            <div style={{ textAlign: 'center' }}>
                <CardButton id={id} />
            </div>
        </div>
    )
}

export default Card