import React from "react";
import { Header, Icon } from "semantic-ui-react";
import styles from './Styles.module.scss'

export function HomeComponent(){
    return (
        <div className={styles.home}>
            <div className={styles.content}>
            <Header as='h1' icon textAlign='center' className={styles.header}>
                <Icon name='users' circular className={styles.icon}/>
                <Header.Content className={styles.subcontent}>Welcome User</Header.Content>
                <Header.Subheader className={styles.Subheader}>This is my application.</Header.Subheader>
                <Header.Subheader>Consists of basic CRUD functions.</Header.Subheader>
            </Header>
            </div>
        </div>
    )
}