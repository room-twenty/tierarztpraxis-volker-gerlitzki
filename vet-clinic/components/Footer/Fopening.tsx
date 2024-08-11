import React from 'react';

interface OpeningHours {
  day: string;
  morning: string;
  evening: string | null;
}

const Fopening: React.FC = () => {
  const openingHours: OpeningHours[] = [
    { day: 'Montag', morning: '10:00 - 12:00', evening: '16:00 - 19:00' },
    { day: 'Dienstag', morning: '10:00 - 12:00', evening: '16:00 - 19:00' },
    { day: 'Mittwoch', morning: 'Geschlossen', evening: '16:00 - 19:00' },
    { day: 'Donnerstag', morning: '10:00 - 12:00', evening: '16:00 - 19:00' },
    { day: 'Freitag', morning: '10:00 - 12:00', evening: '16:00 - 19:00' },
    { day: 'Samstag', morning: 'Geschlossen', evening: null },
    { day: 'Sonntag', morning: 'Geschlossen', evening: null },
  ];

  const getCurrentDay = (): string => {
    const daysOfWeek: string[] = [
      'Sonntag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
    ];
    const today = new Date().getDay();
    return daysOfWeek[today];
  };

  const isCurrentTimeWithinOpeningHours = (
    morning: string,
    evening: string | null,
  ): boolean => {
    const currentTime = new Date();
    const [currentHour, currentMinute] = [
      currentTime.getHours(),
      currentTime.getMinutes(),
    ];

    const timeStringToMinutes = (time: string): number => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    };

    const currentTotalMinutes = currentHour * 60 + currentMinute;

    if (morning !== 'Geschlossen' && morning) {
      const [morningStart, morningEnd] = morning
        .split(' - ')
        .map(timeStringToMinutes);
      if (
        currentTotalMinutes >= morningStart &&
        currentTotalMinutes <= morningEnd
      ) {
        return true;
      }
    }

    if (evening !== 'Geschlossen' && evening) {
      const [eveningStart, eveningEnd] = evening
        .split(' - ')
        .map(timeStringToMinutes);
      if (
        currentTotalMinutes >= eveningStart &&
        currentTotalMinutes <= eveningEnd
      ) {
        return true;
      }
    }

    return false;
  };

  const currentDay = getCurrentDay();

  return (
    <div>
      <h2 className="text-center text-xl font-semibold">Öffnungszeiten</h2>
      <div className="mx-auto mb-4 h-[2px] w-[90vw] bg-white"></div>
      <div className="grid grid-cols-3 gap-4">
        {openingHours.map(({ day, morning, evening }) => {
          const isCurrentDay = day === currentDay;
          let textColor = '';

          if (isCurrentDay) {
            const isOpen = isCurrentTimeWithinOpeningHours(morning, evening);
            textColor = isOpen ? 'text-green-500' : 'text-red-500';
          }

          return (
            <div key={day} className="contents">
              <div className={`font-semibold ${textColor}`}>{day}</div>
              <div className={textColor}>{morning}</div>
              <div className={textColor}>{evening || ''}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fopening;
