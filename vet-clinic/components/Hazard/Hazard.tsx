import React from 'react';
import DogoramaWidget from '../DogoramaWidget/DogoramaWidget';

const Hazard = () => {
  return (
    <section>
      <div className="py-5">
        <h3 className="mb-4 text-center text-2xl font-semibold text-glacier-600">
          Aktuelle <span className="text-red-600">Giftköderwarnungen!</span>
        </h3>
        <div className="mx-auto h-1 w-9 rounded-xl bg-glacier-600"></div>
      </div>
      <DogoramaWidget />
    </section>
  );
};

export default Hazard;
