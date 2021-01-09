import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Button, Image, NavDropdown } from 'react-bootstrap'
import axios from 'axios'

function NavBarComponent(props) {
    const [workspace, setWorkspace] = useState([])
    const [user, setUser] = useState({ username: 'sample', email: 'sample@yahoo.com' })

    useEffect(async () => {
        const { data } = await axios.get(`https://remindme-backend.herokuapp.com/collab/workspace-list/${user.username}/`)
        setWorkspace(data.data)

    }, [])

    return (
        < React.Fragment >
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Image href="#home" src='https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.15752-9/131931718_157260752821453_8623645780151052973_n.png?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_eui2=AeG2fx8500kEy_cqBMGeHvQ4waKzDgjaFtbBorMOCNoW1u8vHCQ4ETcFexSIEO6H1lycqqb_7ccFRca0MNWzFRF7&_nc_ohc=xIK_xf9KeKEAX9U4C4F&_nc_ht=scontent.fcrk1-2.fna&oh=6136d3b442fbc6007faaa46c679f9627&oe=6002E73C' style={{ maxHeight: 45 }}></Image>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#pricing">Profile</Nav.Link>
                        <Nav.Link href="#features">Reminder</Nav.Link>
                        <NavDropdown title="Workspace" id="collasible-nav-dropdown">
                            {workspace.map(item => <NavDropdown.Item href={`#workspace/${item.id}`} key={item.id}>{item.title}</NavDropdown.Item>)}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button variant="outline-primary">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment >
    );
}

export default NavBarComponent;