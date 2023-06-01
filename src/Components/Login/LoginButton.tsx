import React from 'react'
import { Button } from 'semantic-ui-react';
import styles from "../Styles.module.scss";

export function LoginButton() {
    return (
        <div className={styles.main_div}>
            <Button.Group className={styles.main_button} floated='right'>
                <Button className={styles.login_button}>
                    Login
                </Button>
            </Button.Group>
        </div>
    )
}
