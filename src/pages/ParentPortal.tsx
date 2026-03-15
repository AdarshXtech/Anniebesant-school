import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Book, CheckCircle, CreditCard, Bell, LogOut } from 'lucide-react';

export default function ParentPortal() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [studentData, setStudentData] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token || role !== 'parent') {
      navigate('/login');
      return;
    }

    // Mock data for demo
    setStudentData({
      name: 'Aarav Sharma',
      class: 'Class VIII - A',
      rollNo: '14',
      attendance: 92,
      homework: [
        { subject: 'Mathematics', title: 'Algebra Worksheet', dueDate: '2026-03-18' },
        { subject: 'Science', title: 'Physics Experiment Report', dueDate: '2026-03-20' },
        { subject: 'English', title: 'Essay on Climate Change', dueDate: '2026-03-19' }
      ],
      results: [
        { subject: 'Mathematics', marks: 85, maxMarks: 100 },
        { subject: 'Science', marks: 92, maxMarks: 100 },
        { subject: 'English', marks: 78, maxMarks: 100 },
        { subject: 'Social Studies', marks: 88, maxMarks: 100 },
        { subject: 'Computer Science', marks: 95, maxMarks: 100 }
      ],
      feesPaid: true,
      notices: [
        { title: 'PTM Scheduled', date: '2026-03-25', desc: 'Parent Teacher Meeting for Mid-Term review.' },
        { title: 'Science Exhibition', date: '2026-04-10', desc: 'Annual science exhibition. Parents are invited.' }
      ]
    });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  if (!studentData) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 border-b border-blue-800">
          <h2 className="text-2xl font-bold text-yellow-400">Parent Portal</h2>
          <p className="text-sm text-blue-200 mt-1">Welcome, Mr. Sharma</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center p-3 rounded-lg transition ${activeTab === 'dashboard' ? 'bg-blue-800 text-yellow-400' : 'hover:bg-blue-800/50'}`}>
            <User size={20} className="mr-3" /> Dashboard
          </button>
          <button onClick={() => setActiveTab('homework')} className={`w-full flex items-center p-3 rounded-lg transition ${activeTab === 'homework' ? 'bg-blue-800 text-yellow-400' : 'hover:bg-blue-800/50'}`}>
            <Book size={20} className="mr-3" /> Homework
          </button>
          <button onClick={() => setActiveTab('results')} className={`w-full flex items-center p-3 rounded-lg transition ${activeTab === 'results' ? 'bg-blue-800 text-yellow-400' : 'hover:bg-blue-800/50'}`}>
            <CheckCircle size={20} className="mr-3" /> Exam Results
          </button>
          <button onClick={() => setActiveTab('fees')} className={`w-full flex items-center p-3 rounded-lg transition ${activeTab === 'fees' ? 'bg-blue-800 text-yellow-400' : 'hover:bg-blue-800/50'}`}>
            <CreditCard size={20} className="mr-3" /> Fee Status
          </button>
          <button onClick={() => setActiveTab('notices')} className={`w-full flex items-center p-3 rounded-lg transition ${activeTab === 'notices' ? 'bg-blue-800 text-yellow-400' : 'hover:bg-blue-800/50'}`}>
            <Bell size={20} className="mr-3" /> School Notices
          </button>
        </nav>
        <div className="p-4 border-t border-blue-800">
          <button onClick={handleLogout} className="w-full flex items-center p-3 rounded-lg text-red-300 hover:bg-blue-800 hover:text-red-200 transition">
            <LogOut size={20} className="mr-3" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Student Profile</h1>
            <p className="text-gray-500">{studentData.name} | {studentData.class} | Roll No: {studentData.rollNo}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Overall Attendance</p>
            <p className="text-3xl font-bold text-green-500">{studentData.attendance}%</p>
          </div>
        </div>

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-blue-900 mb-4 border-b pb-2">Recent Homework</h3>
              <ul className="space-y-3">
                {studentData.homework.slice(0, 2).map((hw: any, i: number) => (
                  <li key={i} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-800">{hw.subject}</p>
                      <p className="text-sm text-gray-500">{hw.title}</p>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Due: {hw.dueDate}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setActiveTab('homework')} className="mt-4 text-sm text-blue-600 hover:underline">View All</button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-blue-900 mb-4 border-b pb-2">Fee Status</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">Quarter 1 (Apr-Jun)</p>
                  <p className="text-sm text-gray-500">₹18,500</p>
                </div>
                {studentData.feesPaid ? (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center"><CheckCircle size={14} className="mr-1" /> Paid</span>
                ) : (
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">Pending</span>
                )}
              </div>
              <button onClick={() => setActiveTab('fees')} className="mt-6 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition">Pay Fees Online</button>
            </div>
          </div>
        )}

        {activeTab === 'homework' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-6 border-b pb-2">Pending Homework</h3>
            <div className="space-y-4">
              {studentData.homework.map((hw: any, i: number) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div className="mb-2 sm:mb-0">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{hw.subject}</span>
                    <h4 className="font-semibold text-gray-800 text-lg">{hw.title}</h4>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-4">Due: {hw.dueDate}</span>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm transition">Mark Done</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'results' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-6 border-b pb-2">Term 1 Examination Results</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-700">
                    <th className="p-3 border-b">Subject</th>
                    <th className="p-3 border-b">Marks Obtained</th>
                    <th className="p-3 border-b">Maximum Marks</th>
                    <th className="p-3 border-b">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.results.map((res: any, i: number) => {
                    const percentage = (res.marks / res.maxMarks) * 100;
                    let grade = 'A';
                    if (percentage < 90) grade = 'B';
                    if (percentage < 80) grade = 'C';
                    if (percentage < 70) grade = 'D';

                    return (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium text-gray-800">{res.subject}</td>
                        <td className="p-3 text-blue-600 font-bold">{res.marks}</td>
                        <td className="p-3 text-gray-500">{res.maxMarks}</td>
                        <td className="p-3 font-bold text-green-600">{grade}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'notices' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-6 border-b pb-2">School Notices</h3>
            <div className="space-y-4">
              {studentData.notices.map((notice: any, i: number) => (
                <div key={i} className="p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-r-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-blue-900">{notice.title}</h4>
                    <span className="text-xs text-gray-500">{notice.date}</span>
                  </div>
                  <p className="text-sm text-gray-700">{notice.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
