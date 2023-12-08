import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function Map() {
    const position = [-20.721632102529696, -47.88183354544426];

    return (
        <div className='map-component'>
            <div className='map'>
                <MapContainer center={[position[0], position[1]]} zoom={20} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[position[0], position[1]]}>
                        <Popup>
                            Localização da nossa academia. Venha conhecer!
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

//https://react-leaflet.js.org/docs/example-map-placeholder/