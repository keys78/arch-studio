import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const LeafletMap = () => {

    const [locations] = useState([
        {
            id:1,
            address:"1892 Chenoweth Drive TN",
            phone:"123-456-3451",
            geometry:{
                coordinates:[35.952461, -83.991531]
            }
        },
        {
            id:2,
            address:"3399 Wines Lane TX",
            phone:"832-123-4321",
            geometry:{
                coordinates:[29.897430, -97.827507]
            }
        }
    ])

    const [activeLocations, setActiveLocations] = useState(null)

    return (
        <MapContainer center={[35.952461, -83.991531]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locations.map((location) => (
                <Marker key={location.id}
                position={[location.geometry.coordinates[0], location.geometry.coordinates[1]]}
                onclick={() => {
                    setActiveLocations(location);
                }}
                >

                </Marker>
            ))}
            {activeLocations && (
                <Popup
                position={[
                    activeLocations.geometry.coordinates[0],
                    activeLocations.geometry.coordinates[1]
                ]} >
                    <div>
                        <h2>{ activeLocations.address }</h2>
                        <h4>{ activeLocations.phone }</h4>
                    </div>
                </Popup>
                
            )}
        </MapContainer>
    );
}

export default LeafletMap;