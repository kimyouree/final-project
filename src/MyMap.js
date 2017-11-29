import React, { Component } from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import './App.css';

const mapStyle = {
    styles:
    [
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "lightness": 33
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
                {
                    "lightness": "4"
                },
                {
                    "saturation": "-100"
                },
                {
                    "visibility": "off"
                },
                {
                    "color": "#8589A4"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "grey"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#efefef"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e3eed3"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": 20
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#f8f8f8"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#f8f8f8"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#91DFC0"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#EEA4F8"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#8A98F9"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#B6D4F8"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]
}


const MapComponent = compose(

    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div className="map-div" style={{ height: `100%`, width: '100%', border: '5px solid pink', boxSizing: 'border-box' }} />,


    }),
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: (state) => () => {
            console.log('running')
            return {
                isOpen: !state.isOpen,
            }
        }
    }),

    withScriptjs,
    withGoogleMap
)((props) => {
    let defaultcenter; 
if(props.resultsList.length===0){
    defaultcenter={lat: 43.6532, lng: -79.3882 }
}else{
    defaultcenter={ lat: props.resultsList[0].geometry.location.lat, 
        lng: props.resultsList[0].geometry.location.lng }
}

    return <GoogleMap defaultZoom={11} center={ defaultcenter }
        defaultOptions={ mapStyle }  >

        
        {props.resultsList.map(marker => {
            return <div>
                <div><Marker

                    icon="https://www.bebuzee.com/images/icons/like-icon-16.png"
                    position={{ lat: marker.geometry.location.lat, lng: marker.geometry.location.lng }}
                    defaultCenter={{ lat: marker.geometry.location.lat, lng: marker.geometry.location.lng }}
                    onClick={props.onToggleOpen}
                
                >
                {props.isOpen && <InfoWindow
                        onCloseClick={props.onToggleOpen}
                        options={{ closeBoxURL: ``, enableEventPropagation: true }}
                    >
                        <div id="infoBox" style={{ fontSize: `16px`, fontColor: `#EC5E80`, backgroundColor: `#91DFC0`, opacity: 0.75, padding: `0px` }}>
                                name!
                        </div>
                    </InfoWindow>}
                    </Marker>
                    </div>
                </div>
            })}
        </GoogleMap>

});


class MyMap extends Component {


    render() {
        return (

            <MapComponent defaultzoom={this.props.defaultzoom} resultsList={this.props.resultsList} />

        );
    }
}

export default MyMap;
