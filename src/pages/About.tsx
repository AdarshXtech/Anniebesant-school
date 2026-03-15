import { motion } from 'motion/react';
import { Target, Eye, Award, History } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Legacy of Excellence</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded with a vision to provide quality education, Annie Besant Vidyalaya has grown into a premier institution known for its academic rigor and holistic development approach. We believe in nurturing young minds to become responsible, innovative, and compassionate global citizens.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our campus provides a safe, stimulating, and supportive environment where students can explore their interests, develop their talents, and achieve their full potential. With a blend of traditional values and modern teaching methodologies, we prepare our students for the challenges of the 21st century.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="School Building" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 rounded-2xl border border-blue-100"
          >
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-yellow-400 mb-6">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be a center of excellence in education, fostering intellectual curiosity, moral integrity, and social responsibility in every student, empowering them to lead meaningful lives and contribute positively to society.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100"
          >
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide a dynamic and inclusive learning environment that inspires academic excellence, promotes critical thinking, and cultivates essential life skills through innovative teaching practices and comprehensive extracurricular programs.
            </p>
          </motion.div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Rajesh Sharma', role: 'Principal', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Mrs. Anita Desai', role: 'Vice Principal', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Mr. Vikram Singh', role: 'Head of Academics', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Ms. Priya Patel', role: 'Head of Administration', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
            ].map((leader, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-yellow-400 transition-colors duration-300">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold text-blue-900">{leader.name}</h4>
                <p className="text-gray-500">{leader.role}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
