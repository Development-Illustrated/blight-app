import React from 'react';
import { StyleSheet, Platform, Image } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo'
import { CustomMarker } from '../components/Map'

export default class Map extends React.Component {
  state = {
    location: {
      longitude: 0,
      latitude: 0,
      longitudeDelta: 0.03218650817871094,
      latitudeDelta: 0.04339741742184344
    },
    markers: [],
    errorMessage: null,
    hackPadding: 0
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'This only works on device'
      })
    } else {
      this._getLocationAsync()
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      })
    }

    let returnedLocation = await Location.getCurrentPositionAsync({})

    this.setState({
      location: {
        longitude: returnedLocation.coords.longitude,
        latitude: returnedLocation.coords.latitude,
        longitudeDelta: 0.03218650817871094,
        latitudeDelta: 0.04339741742184344
      }
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hackPadding: 1
      })
    }, 500);
  }

  render() {
    console.log(this.state.location)
    return (
        <MapView
            customMapStyle={this.mapStyle}
            provider='google'
            style={{ flex: 1, paddingTop: this.state.hackPadding }}
            initialRegion={this.location}
            showsUserLocation={true}
            showsMyLocationButton={true}
        >
        {this.state.markers.map((marker, index) => {
          return (
            <MapView.Marker
              coordinate={marker.latlng}
              title={marker.title}
              key={index}
            />
          );
        })}
        </MapView>
    );
  }

  componentDidMount() {
    this.getMapData()
  }

  getMapData() {
    fetch('http://35.177.182.18:5000/api/landmarks', {
      method: 'GET'
    }).then(response => {
      return response.json()
    }).then(responseJson => {
      return responseJson.map((landmark, index) => {
        return {
          id: landmark._id,
          latlng: {
            latitude: landmark.lat,
            longitude: landmark.lng
          },
          title: landmark.name,
          image: landmark.icon
        }
      })
    }).then(resp => {
      this.setState({markers: resp })
    }).catch(error => {
      console.log(error)
    })
  }

  mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
