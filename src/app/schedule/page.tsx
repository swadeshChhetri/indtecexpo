'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CalendarPlus } from 'lucide-react';


type ScheduleItem = {
  time: string;
  title: string;
  speaker?: {
    name: string;
    role: string;
    photo?: string;
  };
  location?: string;
  type?: string;
};

const dates = ['April 18', 'April 19'] as const;
const scheduleData: Record<string, ScheduleItem[]> = {
  'April 18': [
    {
      time: '10:00 AM – 10:45 AM',
      title: 'Opening Keynote: The Future of Tech',
      speaker: {
        name: 'Dr. Asha Mehta',
        role: 'Director, INDTEC',
        photo: '/speakers/asha.jpg',
      },
      location: 'Main Hall',
      type: 'Panel',
    },
    {
      time: '11:00 AM – 12:00 PM',
      title: 'Panel: AI in Everyday Life',
      speaker: {
        name: 'Ravi Kapoor',
        role: 'AI Engineer, Thinkbot',
        photo: '/speakers/ravi.jpg',
      },
      location: 'Main Hall',
      type: 'Panel',
    },
    {
      time: '12:15 PM – 1:00 PM',
      title: 'Networking Lunch Break',
    },
    {
      time: '1:15 PM – 2:00 PM',
      title: 'Workshop: Build with React',
      speaker: {
        name: 'Neha Sharma',
        role: 'Frontend Dev, CodeWave',
        photo: '/speakers/neha.jpg',
      },
      location: 'Main Hall',
      type: 'Panel',
    },
  ],
};

export default function SchedulePage() {
  const [activeDate, setActiveDate] = useState<'April 18' | 'April 19'>('April 18');

  return (
    <>
      <section className="pt-36 pb-10 bg-gray-50 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          INDTEC 2025 Agenda
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Explore the complete 2-day schedule of talks, sessions, and networking!
        </motion.p>

        {/* Date Tabs */}
        <div className="flex justify-center gap-4 mt-10">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => setActiveDate(date)}
              className={`px-6 py-2 rounded-full border font-medium transition 
              ${activeDate === date ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'}`}
            >
              {date}
            </button>
          ))}
        </div>

        {/* Sample Placeholder for schedule content */}
        <div className="mt-10">
          {activeDate === 'April 18' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg text-gray-700"
            >
              {/* Replace this with real schedule */}
              Content for April 18
            </motion.div>
          )}
          {activeDate === 'April 19' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg text-gray-700"
            >
              {/* Replace this with real schedule */}
              Content for April 19
            </motion.div>
          )}
        </div>
      </section>
      <div className="mt-10 max-w-3xl mx-auto space-y-6 text-left">
        {scheduleData[activeDate]?.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-sm text-blue-600 font-semibold">{item.time}</div>
            <div className="text-xl font-bold mt-2 text-gray-800">{item.title}</div>
            {item.speaker && (
              <div className="flex items-center gap-3 mt-3">
                <img
                  src={item.speaker.photo}
                  alt={item.speaker.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium">{item.speaker.name}</div>
                  <div className="text-xs text-gray-500">{item.speaker.role}</div>
                </div>
              </div>
            )}
            {item.location && (
              <p className="text-sm text-gray-500 mt-1">📍 {item.location}</p>
            )}
            {item.type && (
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium mb-2">
                {item.type}
              </span>
            )}
            {/* Add to Calendar link here */}
            <a
              href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(item.title)}&dates=20250418T100000Z/20250418T104500Z&details=Join the session&location=${encodeURIComponent(item.location || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 text-sm"
            >
              <CalendarPlus size={16} />
              Add to Calendar
            </a>

          </motion.div>
        ))}

      </div>
    </>
  );
}
