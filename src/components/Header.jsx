import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
 
}));

const Header = () => {
    const classes = useStyles();
  return (
    <AppBar position="static"  className=" bg-slate-300" >
  <Toolbar className='flex space-x-[30%]'>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      Food WEB
    </IconButton>
    <div className="flex gap-[60px]">
    <Typography variant="h6" className="">
        Home
        </Typography>
        <Typography variant="h6" className="">
        Contact
        </Typography>
        <Typography variant="h6" className="">
        About
        </Typography>
        <Typography variant="h6" className="">
        shop
        </Typography>
        <Typography variant="h6" className="">
        blog
        </Typography>

    </div>
    
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
  )
}

export default Header