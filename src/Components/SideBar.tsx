import React, {useState} from 'react'
import {
  Button,
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

export const SideBar = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Button
            onClick={() => setVisible(e => !e)} 
        >View</Button>
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='user'/>
              Employee
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='building' />
              Department
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h1'>Application Content</Header>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, asperiores natus ipsam placeat aperiam saepe quo dolor repellat, dolorum nemo ex, nisi beatae eligendi. Dolores tempore nobis quod nesciunt earum? <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a recusandae commodi, nemo nobis magni itaque vitae quam minima rerum expedita illum, aspernatur, voluptatem sed iste nostrum. Fugit, voluptatibus quae. <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, ipsa error vitae eos praesentium deleniti perspiciatis quis. Quo cum vero, repellat soluta fugit officia. Facere ullam voluptas molestiae eveniet porro. <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, reprehenderit, maxime minus deleniti sapiente quod id magnam incidunt inventore, nemo impedit ipsam dolores. Repellat laboriosam mollitia vitae unde nostrum magni.
              </p>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}