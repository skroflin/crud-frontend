import React from 'react'
import { Button, Icon } from 'semantic-ui-react';
import styles from "../Styles.module.scss";

export function LoginButton() {
    return (
        <div className={styles.main_div}>
            <Button.Group className={styles.main_button} floated='right'>
                <Button className={styles.login_button} animated='vertical'>
                    <Button.Content hidden>
                        Login
                    </Button.Content>
                    <Button.Content visible>
                        <Icon color='black' name='sign in' size='large' />
                    </Button.Content>
                </Button>
            </Button.Group>
        </div>
    )
}
