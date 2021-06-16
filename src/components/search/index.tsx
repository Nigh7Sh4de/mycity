import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'src/redux';

import {getSearchResults} from 'src/redux/places';

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
    this.timer = setTimeout(this.search, 2000);
  };

  search = () => {
    const {searchText} = this.state;
    this.props.getSearchResults(searchText);
  };

  onSubmitEditing = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.search();
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
        <TextInput
          value={searchText}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
        />
      </View>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    results: state.places.searchResults,
  };
}
function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({getSearchResults}, dispatch);
}
const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export default connector(Search);
