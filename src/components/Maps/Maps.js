import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const Maps = () => {
    return (
        <div>
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={"current name"} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
                </InfoWindow>
            </Map>
        </div>
    );
};


export default GoogleApiWrapper({
    apiKey: ('AIzaSyCZQdWZwsNAYakL30EbvVheRjO4c9HcqFc&')
  })(Maps)