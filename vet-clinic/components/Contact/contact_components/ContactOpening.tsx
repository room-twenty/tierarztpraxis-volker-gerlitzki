'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

interface TimeRange {
  start: string;
  end: string;
}

interface OpeningHours {
  day: string;
  morning: TimeRange | null;
  evening: TimeRange | null;
}

const ClinicOpeningHours: React.FC = () => {
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
    return daysOfWeek[new Date().getDay()];
  };

  const isCurrentTimeWithinOpeningHours = (
    morning: TimeRange | null,
    evening: TimeRange | null,
  ): boolean => {
    const currentTime = new Date();
    const currentMinutes =
      currentTime.getHours() * 60 + currentTime.getMinutes();

    const parseTime = (time: string) => {
      const [hour, minute] = time.split(':').map(Number);
      return hour * 60 + minute;
    };

    const isWithinTimeRange = (start: string, end: string) => {
      const startTime = parseTime(start);
      const endTime = parseTime(end);
      return currentMinutes >= startTime && currentMinutes <= endTime;
    };

    return (
      (morning ? isWithinTimeRange(morning.start, morning.end) : false) ||
      (evening ? isWithinTimeRange(evening.start, evening.end) : false)
    );
  };

  const formatTime = (time: string) =>
    time.endsWith(':00') ? time.slice(0, -3) : time;

  const formatOpeningHours = (period: TimeRange | null) => {
    if (!period) return 'Geschlossen';
    return `${formatTime(period.start)} - ${formatTime(period.end)} Uhr`;
  };

  const currentDay = getCurrentDay();
  const isOpen = openingHours.some(
    ({ day, morning, evening }) =>
      day === currentDay && isCurrentTimeWithinOpeningHours(morning, evening),
  );

  return (
    <section className="pb-5 text-base">
      <h2 className="text-2xl font-semibold text-glacier-600">
        Unsere Öffnungszeiten
      </h2>
      <div className={isOpen ? 'text-green-700' : 'text-red-700'}>
        <FontAwesomeIcon icon={faClock} className="mr-2 w-6" />
        {isOpen ? 'Praxis geöffnet' : 'Praxis geschlossen'}
      </div>
      <div className="mt-2 grid grid-cols-3 p-2">
        {openingHours.map(({ day, morning, evening }) => {
          const isCurrentDay = day === currentDay;
          const isOpenNow = isCurrentTimeWithinOpeningHours(morning, evening);
          const textColor = isCurrentDay
            ? isOpenNow
              ? 'text-green-700 font-semibold'
              : 'text-red-700 font-semibold'
            : '';

          return (
            <div key={day} className="contents">
              <div className={textColor}>{day}</div>
              <div className={textColor}>{formatOpeningHours(morning)}</div>
              <div className={textColor}>{formatOpeningHours(evening)}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClinicOpeningHours;
