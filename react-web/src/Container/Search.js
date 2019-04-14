import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Cardslider from '../components/cardslider'
import Hashtag from '../components/hashtag'


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  }
});
class Search extends Component {
  render() {
    return (
      <div className="search" > 
        <Cardslider />
        <Hashtag />
      </div>
    );
  }
}

export default withStyles(styles)(Search);
