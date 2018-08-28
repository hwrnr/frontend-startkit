import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import styles from './styles.js'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

class Blog extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <ToolBar>
            <Button color="inherit">Subscribe</Button>
            <Typography variant="title" color="inherit" style={styles.flex}>Blog</Typography> 
            <IconButton color="inherit">
              <SearchIcon/>
            </IconButton> 
            <Button color="inherit" variant="outlined">Sign up</Button>
          </ToolBar>
        </AppBar>
      </div>
    )
  }
}


export default Blog
