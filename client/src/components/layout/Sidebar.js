import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const menuItems = [
  {
    id: 1,
    name: 'Todo List',
    icon: 'todo',
    path: '/'
  },
  {
    id: 2,
    name: 'Create User',
    icon: 'persion',
    path: '/user'
  },
  {
    id: 3,
    name: 'Exercises',
    icon: 'inbox',
    path: '/exercises'
  },
  {
    id: 4,
    name: 'About',
    icon: 'todo',
    path: '/about'
  }
];

export default function Sidebar() {
  return (
    <React.Fragment>
      <List>
        {menuItems.map((nav, index) => (
          <Link to={nav.path} key={nav.id} className="menu-link">
            <ListItem button key={nav.id}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={nav.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
