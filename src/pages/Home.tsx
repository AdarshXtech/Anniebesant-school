import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Monitor, Trophy, ShieldCheck, Bus } from 'lucide-react';

export default function Home() {
  const highlights = [
    { icon: <Monitor size={32} />, title: "Smart Classrooms", desc: "Interactive digital learning environments." },
    { icon: <Users size={32} />, title: "Experienced Faculty", desc: "Dedicated educators committed to student success." },
    { icon: <BookOpen size={32} />, title: "Science & Computer Labs", desc: "State-of-the-art facilities for practical learning." },
    { icon: <Trophy size={32} />, title: "Sports Facilities", desc: "Comprehensive physical education programs." },
    { icon: <Monitor size={32} />, title: "Digital Learning", desc: "Modern curriculum integrated with technology." },
    { icon: <Bus size={32} />, title: "Safe School Transport", desc: "Secure and reliable transportation services." }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="School Campus" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            ANNIE BESANT VIDYALAYA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-yellow-400 font-medium mb-8"
          >
            Nurturing Excellence, Inspiring Futures
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/admissions" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full transition shadow-lg text-lg">
              Apply for Admission
            </Link>
            <Link to="/facilities" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded-full transition shadow-lg text-lg">
              Explore Campus
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition shadow-lg text-lg">
              Contact School
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Principal" 
                className="w-full h-auto object-cover aspect-[3/4]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">Dr. Sharma</h3>
                <p className="text-yellow-400 text-sm">Principal</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Welcome to Annie Besant Vidyalaya</h2>
            <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              "Education is not the learning of facts, but the training of the mind to think." At Annie Besant Vidyalaya, we strive to create an environment where every child is encouraged to discover their true potential. Our holistic approach to education ensures that students not only excel academically but also develop strong moral character and essential life skills.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              We invite you to be a part of our vibrant learning community, where tradition meets innovation, and every student is prepared to become a responsible global citizen.
            </p>
            <Link to="/about" className="text-blue-900 font-bold hover:text-yellow-600 transition flex items-center">
              Read More About Us <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* School Highlights */}
      <section className="py-20 bg-blue-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-800/50 p-8 rounded-2xl border border-blue-700 hover:bg-blue-800 transition group"
              >
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Latest News & Events</h2>
            <div className="w-20 h-1 bg-yellow-500"></div>
          </div>
          <Link to="/notices" className="text-blue-900 font-bold hover:text-yellow-600 transition mt-4 md:mt-0">
            View All Notices →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={`https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&sig=${item}`} 
                  alt="Event" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-blue-900 font-bold py-1 px-3 rounded-md text-sm">
                  15 Mar 2026
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Annual Sports Meet 2026</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">Join us for the annual sports meet featuring track and field events, team sports, and much more.</p>
                <Link to="/notices" className="text-yellow-600 font-semibold text-sm hover:text-blue-900 transition">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Parents Say</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm relative">
              <div className="text-yellow-400 text-6xl absolute top-4 left-4 opacity-20">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "The transformation in my child since joining Annie Besant Vidyalaya has been remarkable. The teachers are incredibly supportive and the facilities are top-notch. I couldn't have asked for a better school."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold mr-4">
                  RS
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">Rajesh Sharma</h4>
                  <p className="text-sm text-gray-500">Parent of Class X Student</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm relative">
              <div className="text-yellow-400 text-6xl absolute top-4 left-4 opacity-20">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "We are extremely happy with the holistic education provided here. The focus is not just on academics but also on extracurricular activities, which has helped my daughter develop a well-rounded personality."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold mr-4">
                  PG
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">Priya Gupta</h4>
                  <p className="text-sm text-gray-500">Parent of Class VIII Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
