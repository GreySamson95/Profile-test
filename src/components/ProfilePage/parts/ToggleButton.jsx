import React, { useState, useEffect } from 'react';
import styles from './ToggleButton.module.scss'
import PropTypes from 'prop-types';

const ToggleButton = (props) => {
    const [toggle, setToggle] = useState(true);

    const { defaultChecked } = props;

    const triggerToggle = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        if (defaultChecked) {
            setToggle(!defaultChecked)
        }
    }, [defaultChecked]);

    return(
        <div onClick={triggerToggle} className={`${styles.toggle} ${toggle ? styles.toggleChecked : styles.toggleUnhecked}`}>
            <div className={`${styles.toggleContainer} ${toggle ? styles.toggleContainerActive : styles.toggleContainerUnactive}`} >
                <div className={styles.toggleCheck}></div>
                <div className={styles.toggleUncheck}></div>
            </div>
            <div className={`${styles.toggleCircle} ${toggle ? styles.toggleCircleActive : styles.toggleCircleUnactive}`}></div>
            <input className={styles.toggleInput} type="checkbox" aria-label="Toggle Button" />
        </div>
    )
}

ToggleButton.propTypes = {
    defaultChecked: PropTypes.bool
};

export default ToggleButton;