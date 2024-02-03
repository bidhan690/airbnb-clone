"use client"
import { FC } from "react";

import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { cn } from "@/lib/utils";


// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,

});


interface MapProps {
  className?: string
}


const Map: FC<MapProps> = ({ className }) => {
  const latitude = 27.674978; // Replace with the latitude of your location
  const longitude = 85.324442; // Replace with the longitude of your location
  const defaultPosition = [latitude, longitude];
  return (
    <div className="">
      <MapContainer center={defaultPosition as L.LatLngExpression || [51, -0.09]} zoom={18} scrollWheelZoom={false} className={cn("h-[300px] md:h-[500px] rounded-lg", className)} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={defaultPosition as L.LatLngExpression}>

        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
