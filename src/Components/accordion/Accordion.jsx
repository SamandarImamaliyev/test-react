import React from 'react'
import { useState } from 'react';
import styles from './accordion.module.css'

const Accordion = ({ title, content }) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.accordionItem}>
            <div className={styles.accordionTitle} onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className={styles.accordionContent}>{content}</div>}
        </div>
    );
}

export default Accordion;