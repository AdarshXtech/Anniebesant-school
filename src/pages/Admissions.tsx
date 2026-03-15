import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, CheckCircle, Download, FileSignature } from 'lucide-react';

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    classApplying: '',
    parentName: '',
    phone: '',
    email: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          studentName: '', dateOfBirth: '', classApplying: '', parentName: '', phone: '', email: '', address: ''
        });
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Admission Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Fill Online Form', icon: <FileSignature size={32} />, desc: 'Complete the online application form with accurate details.' },
              { step: '2', title: 'Document Verification', icon: <FileText size={32} />, desc: 'Submit required documents for verification at the school office.' },
              { step: '3', title: 'Entrance Assessment', icon: <CheckCircle size={32} />, desc: 'Appear for a basic assessment test (if applicable for the class).' },
              { step: '4', title: 'Admission Confirmation', icon: <CheckCircle size={32} className="text-green-500" />, desc: 'Pay the admission fee to confirm the seat.' }
            ].map((process, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center relative border border-gray-100"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl absolute -top-6 left-1/2 transform -translate-x-1/2 border-4 border-white">
                  {process.step}
                </div>
                <div className="text-blue-900 flex justify-center mt-6 mb-4">{process.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Admission Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b pb-4">Online Admission Form</h2>
            
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-bold mb-2">Application Submitted Successfully!</h3>
                <p>Thank you for applying to Annie Besant Vidyalaya. Our admissions team will contact you shortly regarding the next steps.</p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-6 bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Student Name *</label>
                    <input type="text" name="studentName" required value={formData.studentName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                    <input type="date" name="dateOfBirth" required value={formData.dateOfBirth} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Class Applying For *</label>
                    <select name="classApplying" required value={formData.classApplying} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select Class</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Class I">Class I</option>
                      <option value="Class V">Class V</option>
                      <option value="Class IX">Class IX</option>
                      <option value="Class XI">Class XI</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name *</label>
                    <input type="text" name="parentName" required value={formData.parentName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Residential Address *</label>
                    <textarea name="address" rows={3} required value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Documents (Optional for now)</label>
                    <input type="file" multiple className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50" />
                    <p className="text-xs text-gray-500 mt-1">Birth Certificate, Previous Marksheet, Aadhar Card (Max 5MB each)</p>
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md transition disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>

          {/* Fee Structure & Downloads */}
          <div className="space-y-8">
            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
                <Download size={24} className="mr-2" /> Downloads
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center justify-between p-3 bg-blue-800 rounded-lg hover:bg-blue-700 transition">
                    <span>School Prospectus 2026-27</span>
                    <Download size={18} />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between p-3 bg-blue-800 rounded-lg hover:bg-blue-700 transition">
                    <span>Fee Structure Details</span>
                    <Download size={18} />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between p-3 bg-blue-800 rounded-lg hover:bg-blue-700 transition">
                    <span>Offline Admission Form</span>
                    <Download size={18} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Fee Structure Overview</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3">Class</th>
                      <th scope="col" className="px-4 py-3">Quarterly Fee (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-4 py-3 font-medium text-gray-900">Pre-Primary</td>
                      <td className="px-4 py-3">12,500</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="px-4 py-3 font-medium text-gray-900">Classes I - V</td>
                      <td className="px-4 py-3">15,000</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-4 py-3 font-medium text-gray-900">Classes VI - VIII</td>
                      <td className="px-4 py-3">18,500</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="px-4 py-3 font-medium text-gray-900">Classes IX - X</td>
                      <td className="px-4 py-3">22,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium text-gray-900">Classes XI - XII</td>
                      <td className="px-4 py-3">25,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 italic">* Admission fee and transport charges are extra.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
