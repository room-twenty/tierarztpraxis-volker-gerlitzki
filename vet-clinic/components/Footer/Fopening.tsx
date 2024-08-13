import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

interface OpeningHours {
  day: string;
  morning: string;
  evening: string | null;
}

const Fopening: React.FC = () => {
  const openingHours: OpeningHours[] = [
    { day: 'Montag', morning: '10:00 - 12:00', evening: '16:00 - 19:00' },
    { day: 'Dienstag', morning: '10:00 - 12:00', evening: '16:00 - 19:00' },
    { day: 'Mittwoch', morning: '10:00 - 12:00', evening: 'Geschlossen' },
    { day: 'Donnerstag', morning: '10:00 - 12:00', evening: '16:00 - 19:00' },
    { day: 'Freitag', morning: '10:00 - 12:00', evening: '16:00 - 19:00' },
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
    const currentDayIndex = new Date().getDay();
    return daysOfWeek[currentDayIndex];
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

    const parseTime = (time: string) => {
      const [hour, minute] = time.split(':').map(Number);
      return { hour, minute };
    };

    const isWithinTimeRange = (start: string, end: string) => {
      const { hour: startHour, minute: startMinute } = parseTime(start);
      const { hour: endHour, minute: endMinute } = parseTime(end);

      const startTime = startHour * 60 + startMinute;
      const endTime = endHour * 60 + endMinute;
      const currentTime = currentHour * 60 + currentMinute;

      return currentTime >= startTime && currentTime <= endTime;
    };

    if (morning !== 'Geschlossen') {
      const [morningStart, morningEnd] = morning.split(' - ');
      if (isWithinTimeRange(morningStart, morningEnd)) return true;
    }

    if (evening && evening !== 'Geschlossen') {
      const [eveningStart, eveningEnd] = evening.split(' - ');
      if (isWithinTimeRange(eveningStart, eveningEnd)) return true;
    }

    return false;
  };

  const currentDay = getCurrentDay();
  const isOpen = openingHours.some(({ day, morning, evening }) => {
    if (day === currentDay) {
      return isCurrentTimeWithinOpeningHours(morning, evening);
    }
    return false;
  });

  const statusText = isOpen ? 'Praxis geöffnet' : 'Praxis geschlossen';

  return (
    <div>
      <div
        className={`mt-2 flex items-center justify-center bg-red-900 text-xl font-semibold p-2 mb-5`}>
        <FontAwesomeIcon icon={faClock} className={`mr-2 w-6`} />
        {statusText}
      </div>
      <div className="mt-2 grid grid-cols-3 p-2">
        {openingHours.map(({ day, morning, evening }) => {
          const isCurrentDay = day === currentDay;
          let textColor = '';

          if (isCurrentDay) {
            const isOpen = isCurrentTimeWithinOpeningHours(morning, evening);
            textColor = isOpen ? 'bg-green-500 font-semibold' : 'bg-red-900 font-semibold bg-opacity-3';
          }

          return (
            <div key={day} className="contents text-xl">
              <div className={`${textColor}`}>{day}</div>
              <div className={`${textColor}`}>{morning}</div>
              <div className={`${textColor}`}>{evening || ''}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fopening;
