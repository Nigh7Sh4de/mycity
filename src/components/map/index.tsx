import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'src/redux';
import RNMaps, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import Search from 'src/components/search';
import {setPin} from 'src/redux/places';
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

  setPin = (id: string, pinned: boolean) => {
    this.props.setPin(id, pinned);
  };

  render() {
    const {results} = this.props;
    const resultsPlaces = results.map((result) => (
      <Marker
        coordinate={{
          latitude: result.geometry.location.lat,
          longitude: result.geometry.location.lng,
        }}
        key={result.place_id + result.pinned}>
        <Callout
          tooltip={true}
          onPress={this.setPin.bind(this, result.place_id, !result.pinned)}>
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutTitleText}>{result.name}</Text>
            <View style={styles.calloutPinnedContainer}>
              <Text>Pinned: </Text>
              <Text style={styles.calloutPinnedText}>
                {result.pinned ? 'Yes' : 'No'}
              </Text>
            </View>
          </View>
        </Callout>
      </Marker>
    ));

    return (
      <View style={StyleSheet.absoluteFill}>
        <RNMaps
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFill}
          showsPointsOfInterest={false}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          {resultsPlaces}
        </RNMaps>
        <View style={styles.searchContainer}>
          <Search />
        </View>
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
  return bindActionCreators({setPin}, dispatch);
}
const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export default connector(Map);

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    bottom: 60,
    padding: 10,
    width: '100%',
  },

  calloutContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },

  calloutPinnedContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  calloutPinnedText: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: '#aabbff',
    display: 'flex',
  },

  calloutTitleText: {
    fontWeight: 'bold',
  },
});
