// Team Ameya - Importing Header Lines in the NavBar.jsx
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from './Images/Project_Logo.png';
import './Style.css'



const Header = styled(AppBar)`
    background: #111111;
`;

const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <img src={Logo} style={{height: 45, width: 90}}/>
                <Tabs style={{color:'#ff6f00', fontWeight:500, marginLeft:50, fontSize:30}} to="./" exact>Home </Tabs> 
                <Tabs style={{color:'#ff6f00', fontWeight:500, marginLeft:50, fontSize:30}} to="all" exact>Cab List </Tabs>
                <Tabs style={{color:'#ff6f00', fontWeight:500, marginLeft:50, fontSize:30}} to="add" exact>Add Cab </Tabs> 
            </Toolbar>
        </Header>
    )
}

export default NavBar;
