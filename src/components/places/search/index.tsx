import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'src/redux';

interface State {
  searchText: string;
}

export class Search extends Component<Props, State> {
  private timer?: ReturnType<typeof setTimeout>;

  constructor(props: Props) {
    super(props);

    this.state = {
      searchText: '',
    };
  }

  debounce = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(this.search, 1000);
  };

  search = () => {
    console.log('Im an API');
  };

  onChangeText = (value: string) => {
    this.setState({
      searchText: value,
    });
    this.debounce();
  };

  render() {
    const {searchText} = this.state;
    return (
      <View>
        <Text>Look stuff up!</Text>
        <TextInput value={searchText} onChangeText={this.onChangeText} />
        <Text>{searchText}</Text>
      </View>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {};
}
function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}
const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export default connector(Search);
