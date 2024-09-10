import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

interface OpeningHours {
  day: string;
  morning: { start: string; end: string } | null;
  evening: { start: string; end: string } | null;
}

const Fopening: React.FC = () => {
  const openingHours: OpeningHours[] = [
    {
      day: 'Montag',
      morning: { start: '10:00', end: '12:00' },
      evening: { start: '16:00', end: '19:00' },
    },
    {
      day: 'Dienstag',
      morning: { start: '10:00', end: '12:00' },
      evening: { start: '16:00', end: '19:00' },
    },
    {
      day: 'Mittwoch',
      morning: { start: '10:00', end: '12:00' },
      evening: null,
    },
    {
      day: 'Donnerstag',
      morning: { start: '10:00', end: '12:00' },
      evening: { start: '16:00', end: '19:00' },
    },
    {
      day: 'Freitag',
      morning: { start: '10:00', end: '12:00' },
      evening: { start: '16:00', end: '19:00' },
    },
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
    morning: { start: string; end: string } | null,
    evening: { start: string; end: string } | null,
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

    if (morning) {
      const { start: morningStart, end: morningEnd } = morning;
      if (isWithinTimeRange(morningStart, morningEnd)) return true;
    }

    if (evening) {
      const { start: eveningStart, end: eveningEnd } = evening;
      if (isWithinTimeRange(eveningStart, eveningEnd)) return true;
    }

    return false;
  };

  const formatTime = (time: string) => {
    // Entfernt ':00' aus der Uhrzeit
    return time.endsWith(':00') ? time.slice(0, -3) : time;
  };

  const formatOpeningHours = (
    period: { start: string; end: string } | null,
  ) => {
    if (!period) return 'Geschlossen';
    return `${formatTime(period.start)} - ${formatTime(period.end)} Uhr`;
  };

  const currentDay = getCurrentDay();
  const isOpen = openingHours.some(({ day, morning, evening }) => {
    if (day === currentDay) {
      return isCurrentTimeWithinOpeningHours(morning, evening);
    }
    return false;
  });

  const statusText = isOpen ? 'Praxis geöffnet' : 'Praxis geschlossen';
  const statusTextColor = isOpen ? 'text-green-700' : 'text-red-700';
  return (
    <div>
      <div className={statusTextColor}>
        <FontAwesomeIcon icon={faClock} className={`mr-2 w-6`} />
        {statusText}
      </div>
      <div className="mt-2 grid grid-cols-3 p-2">
        {openingHours.map(({ day, morning, evening }) => {
          const isCurrentDay = day === currentDay;
          let textColor = '';

          if (isCurrentDay) {
            const isOpen = isCurrentTimeWithinOpeningHours(morning, evening);
            textColor = isOpen
              ? 'text-green-700 font-semibold'
              : 'text-red-700 font-semibold';
          }

          return (
            <div key={day} className="contents">
              <div className={`${textColor}`}>{day}</div>
              <div className={`${textColor}`}>
                {formatOpeningHours(morning)}
              </div>
              <div className={`${textColor}`}>
                {formatOpeningHours(evening)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fopening;
