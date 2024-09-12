'use client';

import { useEffect, useState } from 'react';

interface Hazard {
  id: string;
  name: string;
  city: string;
  confirmDate: string;
}

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
      } catch (error) {
        setError(true);
      }
    };

    fetchHazards();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector('.dogorama-container');
      const isNarrow = container?.clientWidth && container?.clientWidth < 769;

      if (isNarrow) {
        container?.classList.add('dogorama-narrow');
      } else {
        container?.classList.remove('dogorama-narrow');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="dogorama-container m-20 flex flex-col">
      {error ? (
        <div className="error-message bg-lightGray text-red rounded-md p-4">
          Service momentan nicht verfügbar.
        </div>
      ) : (
        <div className="hazards-list flex flex-col justify-between gap-3">
          {hazards.slice(0, 6).map((hazard, index) => (
            <a
              href={`https://dogorama.app/gefahrenmeldungen/${encodeURIComponent(
                hazard.city,
              )}/${encodeURIComponent(hazard.name)}-${hazard.id}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="hazard-item flex flex-col items-center rounded-lg bg-white p-8 text-center text-black shadow-md"
              key={hazard.id}>
              <div className="hazard-info">
                <div className="hazard-title text-xl font-bold">
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
      )}

      <div className="footer mt-20 text-center">
        <a
          href="https://dogorama.app/gefahrenmeldungen/"
          className="footer-button rounded-md bg-green-500 px-6 py-2 text-white hover:bg-green-700"
          target="_blank"
          rel="noopener noreferrer">
          Weitere Meldungen
        </a>
      </div>
    </div>
  );
};

export default DogoramaWidget;
