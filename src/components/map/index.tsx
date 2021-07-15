import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'src/redux';
import RNMaps, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import Search from 'src/components/search';
import {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from 'src/lib/google';

export class Map extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {results} = this.props;
    const resultsPlaces = results.map((result) => (
      <Marker
        coordinate={{
          latitude: result.geometry.location.lat,
          longitude: result.geometry.location.lng,
        }}
        key={result.place_id}
        title={result.name}
      />
    ));

    return (
      <View style={StyleSheet.absoluteFillObject}>
        <RNMaps
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFillObject}
          showsPointsOfInterest={false}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          {resultsPlaces}
        </RNMaps>
        <Search />
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
  return bindActionCreators({}, dispatch);
}
const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export default connector(Map);
