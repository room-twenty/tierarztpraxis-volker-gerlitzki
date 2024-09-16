'use client';

import React, { useEffect, useState } from 'react';

interface Hazard {
  id: string;
  name: string;
  city: string;
  confirmDate: string;
}

const warningIconSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="red">
    <path d="M569.517 440.13L327.517 40.13C316.517 21.13 295.517 8 272.517 8C249.517 8 228.517 21.13 217.517 40.13L9.517 440.13C-1.483 459.13-2.483 482.13 7.517 501.13C17.517 520.13 37.517 532 58.517 532H486.517C507.517 532 527.517 520.13 537.517 501.13C547.517 482.13 546.517 459.13 569.517 440.13zM272.517 392C258.517 392 246.517 380 246.517 366V246C246.517 232 258.517 220 272.517 220C286.517 220 298.517 232 298.517 246V366C298.517 380 286.517 392 272.517 392zM272.517 172C258.517 172 246.517 160 246.517 146C246.517 132 258.517 120 272.517 120C286.517 120 298.517 132 298.517 146C298.517 160 286.517 172 272.517 172z"/>
  </svg>
`;

const DogoramaWidget = () => {
  const [hazards, setHazards] = useState<Hazard[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchHazards = async () => {
      try {
        const response = await fetch(
          `https://europe-west1-dogorama-d4da7.cloudfunctions.net/getHazards?src=widget&origin=${encodeURIComponent(
            window.location.origin,
          )}`,
        );
        const data = await response.json();
        setHazards(data.hazards);
        console.log(data);
        
      } catch (error) {
        setError(true);
      }
    };

    fetchHazards();
  }, []);

  return (
    <div className="dogorama-container m-5 flex flex-col">
      {error && <p className="text-red-500">Fehler beim Laden der Daten</p>}
      <div className="hazards-list flex flex-col justify-between gap-3">
        {hazards.slice(0, 6).map((hazard) => (
          <a
            href={`https://dogorama.app/gefahrenmeldungen/${encodeURIComponent(
              hazard.city,
            )}/${encodeURIComponent(hazard.name)}-${hazard.id}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="hazard-item flex flex-col items-center rounded-lg bg-white p-8 text-center text-black shadow-md"
            key={hazard.id}>
            <div className="hazard-info">
              <div
                className="hazard-title flex items-center text-xl font-bold"
                style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
                    warningIconSvg,
                  )}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'left center',
                  backgroundSize: '1.5rem 1.5rem', // Adjust the size of the icon
                  paddingLeft: '2rem',
                }}>
                {hazard.name}
              </div>
              <div className="hazard-date text-gray-500">
                {hazard.city} –{' '}
                {new Date(hazard.confirmDate).toLocaleDateString('de-DE', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DogoramaWidget;