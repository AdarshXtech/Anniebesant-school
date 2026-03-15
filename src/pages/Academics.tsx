import { motion } from 'motion/react';
import { Book, Microscope, Code, Palette, Globe, Calculator } from 'lucide-react';

export default function Academics() {
  const departments = [
    { name: 'Mathematics', icon: <Calculator size={24} />, desc: 'Developing analytical and problem-solving skills.' },
    { name: 'Science', icon: <Microscope size={24} />, desc: 'Fostering curiosity through practical experiments.' },
    { name: 'English', icon: <Book size={24} />, desc: 'Enhancing communication and literary appreciation.' },
    { name: 'Computer Science', icon: <Code size={24} />, desc: 'Building digital literacy and coding proficiency.' },
    { name: 'Social Studies', icon: <Globe size={24} />, desc: 'Understanding our world, history, and society.' },
    { name: 'Arts & Humanities', icon: <Palette size={24} />, desc: 'Nurturing creativity and cultural awareness.' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Academic Structure */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Academic Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { level: 'Pre-Primary', grades: 'Nursery - UKG', focus: 'Play-based learning, motor skills, basic literacy.' },
              { level: 'Primary', grades: 'Classes I - V', focus: 'Foundational knowledge, curiosity, interactive learning.' },
              { level: 'Middle School', grades: 'Classes VI - VIII', focus: 'Concept building, critical thinking, project work.' },
              { level: 'Senior Secondary', grades: 'Classes IX - XII', focus: 'Board exam preparation, career guidance, specialization.' }
            ].map((stage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-900"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">{stage.level}</h3>
                <p className="text-yellow-600 font-semibold text-sm mb-4">{stage.grades}</p>
                <p className="text-gray-600 text-sm">{stage.focus}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Streams Offered */}
        <section className="mb-20 bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Streams Offered (Class XI & XII)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4 border-b border-blue-200 pb-2">Science</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Physics</li>
                <li>• Chemistry</li>
                <li>• Mathematics / Biology</li>
                <li>• Computer Science / Physical Education</li>
                <li>• English Core</li>
              </ul>
            </div>
            <div className="p-6 bg-yellow-50 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4 border-b border-yellow-200 pb-2">Commerce</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Accountancy</li>
                <li>• Business Studies</li>
                <li>• Economics</li>
                <li>• Mathematics / Informatics Practices</li>
                <li>• English Core</li>
              </ul>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4 border-b border-green-200 pb-2">Humanities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• History</li>
                <li>• Political Science</li>
                <li>• Geography / Economics</li>
                <li>• Psychology / Sociology</li>
                <li>• English Core</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Our Departments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-900 mr-4 flex-shrink-0">
                  {dept.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">{dept.name}</h4>
                  <p className="text-gray-600 text-sm">{dept.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="bg-blue-900 text-white p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Teaching Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2">Smart Classrooms</h4>
                <p className="text-blue-100 mb-6">Integration of audio-visual aids and interactive panels to make learning engaging and effective.</p>
                
                <h4 className="text-xl font-bold text-yellow-400 mb-2">Project-Based Learning</h4>
                <p className="text-blue-100">Encouraging students to apply theoretical knowledge to real-world problems through hands-on projects.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2">Student-Centered Education</h4>
                <p className="text-blue-100 mb-6">Focusing on individual learning styles and pacing, ensuring no child is left behind.</p>
                
                <h4 className="text-xl font-bold text-yellow-400 mb-2">Continuous Evaluation</h4>
                <p className="text-blue-100">Regular assessments, formative feedback, and comprehensive tracking of student progress.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
