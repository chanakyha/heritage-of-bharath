import { MapContainer, TileLayer } from "react-leaflet";

const IndiaMap = () => {
  return (
    <MapContainer
      center={[20.5937, 78.9629]} // Coordinates for India's center
      zoom={5} // Initial zoom level
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data © OpenStreetMap contributors"
      />
      {/* Add additional map layers or markers here */}
    </MapContainer>
  );
};

export default IndiaMap;
