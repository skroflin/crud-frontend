import React, { useState } from "react"
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import { Icon, Menu, Segment, SemanticICONS, Sidebar } from "semantic-ui-react"
import styles from './Styles.module.scss'

interface SideBarProps {
    links: {
        id: string
        url: string
        icon: string
        component: React.ReactElement
    }[]
}


export function SideBar({ links }: SideBarProps) {

    const [visible, setVisible] = useState<boolean>(false)
    return (
        <>
            <Menu>
                <Menu.Item onClick={() => setVisible(e => !e)}>
                    <Icon name="cogs" size="big" />
                </Menu.Item>
            </Menu>
            <BrowserRouter>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation="push"
                        icon='labeled'
                        onHide={() => setVisible(false)}
                        vertical
                        visible={visible}
                        width='thin'
                    >
                        {links.map(e => <NavLink key={e.id} to={e.url}>
                            <Menu.Item>
                                <Icon name={e.icon as SemanticICONS} />
                                {e.id}
                            </Menu.Item>
                        </NavLink>
                        )}
                    </Sidebar>
                        <Sidebar.Pusher className={styles.pusher} dimmed={visible}>
                            <Routes>
                                {links.map(e =>
                                    <Route key={e.id} path={`${e.url}/*`} element={e.component} />
                                )}
                            </Routes>
                        </Sidebar.Pusher>
                </Sidebar.Pushable>
            </BrowserRouter>
        </>
    )
}