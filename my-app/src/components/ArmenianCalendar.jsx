import React from 'react';

const ArmenianCalendar = () => {
 const daysOfWeek = ['Երկ', 'Երեք', 'Չոր', 'Հինգ', 'Ուրբ', 'Շաբ', 'Կիր'];
  const daysInMonth = 30;
  const startDayIndex = 6; // Կիրակի

  const days = Array.from({ length: startDayIndex }, () => null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Հունիս 2025</h2>
      <div className="calendar-grid">
        {daysOfWeek.map((day, i) => (
          <div className="calendar-day-header" key={i}>{day}</div>
        ))}
        {days.map((day, i) => (
          <div
            key={i}
            className={`calendar-day  ${day === 29 ? ' relative' : ''}`}
          >
            {day === 29 ? <i className="fa-regular fa-heart text-red-500 absolute text-5xl -top-0.5 -left-[5.5px]"></i>: ''}
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ArmenianCalendar;
