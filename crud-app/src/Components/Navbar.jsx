import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles ({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#ffffff',
        textDecoration:'none',
        marginRight: 20,
        fontSize: 20
    }
})

const Navbar = () => {
    const styling = useStyle();

    return (
       <AppBar className={styling.header} position="static">
           <Toolbar>
               <NavLink className={styling.tabs} to='./' exact>Home</NavLink>
               <NavLink className={styling.tabs} to='all' exact>All Users</NavLink>
               <NavLink className={styling.tabs} to='add' exact>Add Users</NavLink>
           </Toolbar>
       </AppBar>
    )
}

export default Navbar;