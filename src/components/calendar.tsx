import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MyCalendar() {

  const [date, setDate] = useState(new Date());
  
  const formatDateInPortuguese = (date: number | Date | undefined) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="w-full max-w-sm rounded-2xl p-6 m-10 bg-zinc-800">
      <div className=''>
        <h1 className=' text-zinc-100 flex items-center text-xl font-semibold justify-center'>Calendário</h1>
      </div>
      <div>
        <Calendar className='rounded-2xl' onClickDay={setDate} value={date} />
      </div>
      <p className='text-center text-zinc-400 font-semibold'>
        <span className='text-zinc-100 font-semibold'>Data Escolhida:</span>{' '}
        {formatDateInPortuguese(date)}
      </p>
    </div>
  )
}