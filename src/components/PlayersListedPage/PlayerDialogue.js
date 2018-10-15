import React, { Component } from 'react';
import { connect } from 'react-redux';

//dialog for forgot password 
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import Nav from '../Nav/Nav';


const mapStateToProps = state => ({
  user: state.user,
  info: state.player.playerInfo,
});

class PlayerDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleClickOpen = (id) => {
    this.props.dispatch({ type: 'GET_PLAYER_INFO', payload: id });
    this.setState({ open: true });
    console.log(id, this.state);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={() => { this.handleClickOpen(this.props.id) }}>View details</Button>
        <Dialog fullScreen open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <Nav />
          <div className="dialog">
            <h2 className="dialog-head center" >{this.props.info.first_name}'s Information</h2>
            <div>
              <Grid container className="dialog-body" >
                <Grid className="center" item md={4}>
                  <h3 className="dialog-head center">Position Info</h3>
                  <p>Position: {this.props.info.position_name}</p>
                  <p>League: {this.props.info.league_name}</p>
                  <p>Team: {this.props.info.team_name}</p>
                </Grid>
                <Grid className="center" item md={4}>
                  <h3 className="dialog-head">Personal Info</h3>
                  <p>Birthdate: {moment(this.props.info.birth_date).format('MM/DD/YYYY')}</p>
                  <p>School: {this.props.info.school_name}</p>
                  <p>Height: {this.props.info.height}</p>
                  <p>Weight: {this.props.info.weight}</p>
                  <p>GPA: {this.props.info.gpa}</p>
                  <p>ACT Score: {this.props.info.act_score}</p>
                  <p>School Year: {this.props.info.school_year}</p>
                </Grid>
                <Grid className="center" item md={4}>
                  <h3 className="dialog-head center">Contact Info</h3>
                  <p>Email: {this.props.info.email}</p>
                  <p>Phone#: {this.props.info.phone_number}</p>
                </Grid>
              </Grid>
            </div>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
            </Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(PlayerDialog);