import {React ,useState} from 'react'
import { Link } from 'react-router-dom';
import  { ShoppingCart } from "phosphor-react";
import './navbar.css' ;
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';



import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => {
    setOpen(isOpen);
  };


  const handleLinkClick=()=>{
  setOpen(false);
  }
  return<div className="navbar">
    <Drawer
          className="drawer"
          anchor="left"
          open={open}
          
          onClose={() => toggleDrawer(false)}
          //  style={{  width : "100px"}}
        >
           <div className="sidebar" style={{ width: "13em" }}>
            <strong>
              <h1 className="h1-sidebar">CONTENTS</h1>
            </strong>
            <List className="list">
            
              <Link to="/cart" className="list_text">
               
                <ListItem className="listitem" onClick={handleLinkClick}>
                <ShoppingCart size={25}/>
                  <ListItemText style={{fontSize:'70px'}}  className="list_text" primary=" Cart" />
                </ListItem>
              </Link>
              <Divider style={{color:'black'}}/> 
              <ListItem>
                <ShoppingBagIcon/>
                <ListItemText className="list_text" primary=" Your Orders" />

                
              </ListItem>
              </List>
            </div>
        </Drawer>
    <div className="left-content"><FaBars onClick={toggleDrawer}/></div>
    
    < div  className="right-content">
    
  <div className='links'>
     <Link to="/">SHOP</Link>
     <Link to='/cart'>
     
     </Link>
     
</div>
</div></div> 
}

export default Navbar;
