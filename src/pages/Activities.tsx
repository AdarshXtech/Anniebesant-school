import { motion } from 'motion/react';
import { Music, Palette, Trophy, Code, Leaf, MessageSquare, Microscope } from 'lucide-react';

export default function Activities() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Co-Curricular Activities</h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Cultural Activities */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Cultural Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Music', icon: <Music size={32} />, img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Dance', icon: <Music size={32} />, img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Drama', icon: <MessageSquare size={32} />, img: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Art & Craft', icon: <Palette size={32} />, img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
            ].map((activity, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group h-64"
              >
                <img src={activity.img} alt={activity.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex flex-col justify-end p-6">
                  <div className="text-yellow-400 mb-2">{activity.icon}</div>
                  <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sports */}
        <section className="mb-20 bg-gray-50 p-10 rounded-3xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Sports & Athletics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Cricket', icon: <Trophy size={40} /> },
              { name: 'Football', icon: <Trophy size={40} /> },
              { name: 'Basketball', icon: <Trophy size={40} /> },
              { name: 'Athletics', icon: <Trophy size={40} /> },
              { name: 'Yoga', icon: <Trophy size={40} /> }
            ].map((sport, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:border-yellow-400 transition-colors group">
                <div className="text-blue-900 flex justify-center mb-4 group-hover:text-yellow-500 transition-colors">{sport.icon}</div>
                <h4 className="font-bold text-gray-800">{sport.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Student Clubs */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Student Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Science Club', icon: <Microscope size={24} />, desc: 'Exploring scientific phenomena through experiments and projects.' },
              { name: 'Coding Club', icon: <Code size={24} />, desc: 'Learning programming languages, app development, and robotics.' },
              { name: 'Debate Club', icon: <MessageSquare size={24} />, desc: 'Enhancing public speaking, critical thinking, and argumentation skills.' },
              { name: 'Eco Club', icon: <Leaf size={24} />, desc: 'Promoting environmental awareness and sustainable practices.' }
            ].map((club, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4">
                  {club.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{club.name}</h3>
                <p className="text-gray-600 text-sm">{club.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
