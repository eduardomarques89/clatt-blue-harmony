import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  // Hotel coordinates - São João da Boa Vista
  const hotelCoordinates: [number, number] = [-46.7993, -21.9683];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken || isMapInitialized) return;

    // Set Mapbox access token
    mapboxgl.accessToken = mapboxToken;

    try {
      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        zoom: 14,
        center: hotelCoordinates,
      });

      // Add hotel marker
      const marker = new mapboxgl.Marker({
        color: '#2E5984', // Using clatt-blue color
        scale: 1.2
      })
        .setLngLat(hotelCoordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div style="padding: 10px; font-family: 'DM Sans', sans-serif;">
                <h3 style="margin: 0 0 8px 0; color: #2E5984; font-weight: 500;">Clatt Hotel</h3>
                <p style="margin: 0; font-size: 14px; color: #666;">
                  Av. Profa. Isette Corrèa Fontão, 265<br>
                  São João da Boa Vista - SP
                </p>
              </div>
            `)
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      setIsMapInitialized(true);
    } catch (error) {
      console.error('Erro ao inicializar o mapa:', error);
    }
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap();
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapInitialized) {
    return (
      <div className="w-full h-96 bg-clatt-light-blue/20 rounded-lg flex flex-col items-center justify-center p-8 space-y-4">
        <h3 className="text-lg font-light text-clatt-white text-center">
          Visualizar Mapa
        </h3>
        <p className="text-sm text-clatt-white/80 text-center max-w-md">
          Para exibir o mapa, você precisa inserir seu token público do Mapbox. 
          Obtenha gratuitamente em{' '}
          <a 
            href="https://mapbox.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-clatt-white"
          >
            mapbox.com
          </a>
        </p>
        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="Insira seu token público do Mapbox"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1 bg-clatt-white/10 border-clatt-white/30 text-clatt-white placeholder:text-clatt-white/60"
          />
          <Button
            onClick={handleTokenSubmit}
            variant="secondary"
            className="bg-clatt-white text-clatt-blue hover:bg-clatt-white/90"
          >
            Carregar Mapa
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default MapComponent;