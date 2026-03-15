import { motion } from 'motion/react';
import { Monitor, FlaskConical, BookOpen, Trophy, Mic2, Bus, Stethoscope, Shield } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      title: 'Smart Classrooms',
      icon: <Monitor size={32} />,
      desc: 'Air-conditioned classrooms equipped with interactive smart boards, projectors, and high-speed internet to facilitate digital learning.',
      img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Science Laboratories',
      icon: <FlaskConical size={32} />,
      desc: 'Well-equipped Physics, Chemistry, and Biology labs that provide hands-on experience and foster scientific inquiry among students.',
      img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Library & Resource Center',
      icon: <BookOpen size={32} />,
      desc: 'A vast collection of books, journals, encyclopedias, and digital resources to cultivate reading habits and support research.',
      img: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sports Complex',
      icon: <Trophy size={32} />,
      desc: 'Expansive playgrounds for cricket, football, and athletics, along with courts for basketball, tennis, and indoor sports facilities.',
      img: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Auditorium',
      icon: <Mic2 size={32} />,
      desc: 'A state-of-the-art auditorium with advanced acoustics and lighting for cultural events, seminars, and school assemblies.',
      img: 'https://images.unsplash.com/photo-1507676184212-d0330a15673c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Transport Services',
      icon: <Bus size={32} />,
      desc: 'A fleet of GPS-enabled, air-conditioned buses covering major routes in the city, ensuring safe and comfortable commute for students.',
      img: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Medical Room',
      icon: <Stethoscope size={32} />,
      desc: 'A fully equipped infirmary with a qualified nurse available during school hours to attend to any medical emergencies.',
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Security & CCTV',
      icon: <Shield size={32} />,
      desc: '24/7 security personnel and comprehensive CCTV surveillance across the campus to ensure a safe environment for all.',
      img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Facilities</h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={facility.img} 
                  alt={facility.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 shadow-lg">
                  {facility.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{facility.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
