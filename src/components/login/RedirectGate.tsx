import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect, RouteComponentProps} from 'react-router-native';
import {RootState} from 'src/redux';

export class RedirectGate extends Component<Props> {
  going = false;

  render() {
    const {user, location} = this.props;

    console.group('RedirectGate');
    console.log({location, going: this.going});
    console.groupEnd();

    if (!this.going && user.idToken && location.pathname === '/login') {
      this.going = true;
      return <Redirect to="/" />;
    } else if (!user.idToken && !this.going && location.pathname !== 'login') {
      this.going = true;
      return <Redirect to="/login" />;
    } else {
      this.going = false;
      return null;
    }
  }
}

function mapStateToProps(state: RootState) {
  return {
    user: state.users.data,
  };
}
const connector = connect(mapStateToProps);
type Props = RouteComponentProps & ConnectedProps<typeof connector>;

export default connector(RedirectGate);
