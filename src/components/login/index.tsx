import React, {Component} from 'react';
import {View} from 'react-native';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {GoogleSigninButton} from '@react-native-community/google-signin';
import {RootState} from 'src/redux';

import {initialize, signIn, signInSilently} from 'src/redux/users';

export class Login extends Component<Props> {
  componentDidMount() {
    this.props.initialize();
    this.props.signInSilently();
  }

  signIn = () => {
    this.props.signIn();
  };

  render() {
    return (
      <View>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
        />
      </View>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    user: state.users.data,
  };
}
function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({initialize, signInSilently, signIn}, dispatch);
}
const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export default connector(Login);
