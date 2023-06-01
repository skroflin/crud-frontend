import React from "react";
import { Header, Icon } from "semantic-ui-react";
import styles from './Styles.module.scss'

export function HomeComponent() {
    return (
        <div className={styles.home}>
            <div className={styles.content}>
                <Header as='h1' icon textAlign='center' className={styles.header}>
                    <Icon.Group size="big">
                        <Icon name='users' circular/>
                    </Icon.Group>
                    <Header.Content className={styles.subcontent} as='h1'>Welcome User</Header.Content>
                    <Header.Subheader className={styles.subheader}>This is my application.</Header.Subheader>
                    <Header.Subheader className={styles.subheader}>Consists of basic CRUD functions.</Header.Subheader>
                </Header>
            </div>
        </div>
    )
}