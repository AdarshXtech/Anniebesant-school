import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Bell, Calendar, Image as ImageIcon, LogOut, CheckCircle, XCircle } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [stats, setStats] = useState({ totalAdmissions: 0, pendingAdmissions: 0, totalNotices: 0 });
  const [admissions, setAdmissions] = useState<any[]>([]);
  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token || role !== 'admin') {
      navigate('/login');
      return;
    }

    // Fetch initial data
    const fetchData = async () => {
      try {
        const statsRes = await fetch('/api/admin/stats', { headers: { Authorization: `Bearer ${token}` } });
        if (statsRes.ok) setStats(await statsRes.json());

        const admRes = await fetch('/api/admissions', { headers: { Authorization: `Bearer ${token}` } });
        if (admRes.ok) setAdmissions(await admRes.json());

        const notRes = await fetch('/api/notices');
        if (notRes.ok) setNotices(await notRes.json());
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const handleAdmissionStatus = async (id: string, status: string) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/admissions/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        setAdmissions(admissions.map(a => a._id === id ? { ...a, status } : a));
        // Update stats
        if (status === 'Approved' || status === 'Rejected') {
          setStats(prev => ({ ...prev, pendingAdmissions: Math.max(0, prev.pendingAdmissions - 1) }));
        }
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDeleteNotice = async (id: string) => {
    if (!confirm('Are you sure you want to delete this notice?')) return;
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/notices/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setNotices(notices.filter(n => n._id !== id));
        setStats(prev => ({ ...prev, totalNotices: Math.max(0, prev.totalNotices - 1) }));
      }
    } catch (error) {
      console.error('Error deleting notice:', error);
    }
  };

  const navItems = [
    { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/admin/admissions', icon: <Users size={20} />, label: 'Admissions' },
    { path: '/admin/notices', icon: <Bell size={20} />, label: 'Notices' },
    { path: '/admin/events', icon: <Calendar size={20} />, label: 'Events' },
    { path: '/admin/gallery', icon: <ImageIcon size={20} />, label: 'Gallery' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 border-b border-blue-800">
          <h2 className="text-2xl font-bold text-yellow-400">Admin Panel</h2>
          <p className="text-sm text-blue-200 mt-1">Annie Besant Vidyalaya</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center p-3 rounded-lg transition ${
                  isActive ? 'bg-blue-800 text-yellow-400' : 'hover:bg-blue-800/50 text-blue-100'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-blue-800">
          <button
            onClick={handleLogout}
            className="flex items-center w-full p-3 rounded-lg text-red-300 hover:bg-blue-800 hover:text-red-200 transition"
          >
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 capitalize">
            {location.pathname.split('/').pop() || 'Dashboard'}
          </h1>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold">
              AD
            </div>
          </div>
        </header>

        <main className="p-8">
          <Routes>
            <Route path="/" element={
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                      <Users size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Total Admissions</p>
                      <p className="text-3xl font-bold text-gray-800">{stats.totalAdmissions}</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                    <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mr-4">
                      <Users size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Pending Approvals</p>
                      <p className="text-3xl font-bold text-gray-800">{stats.pendingAdmissions}</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                    <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4">
                      <Bell size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Active Notices</p>
                      <p className="text-3xl font-bold text-gray-800">{stats.totalNotices}</p>
                    </div>
                  </div>
                </div>

                {/* Recent Admissions Preview */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-800">Recent Applications</h2>
                    <Link to="/admin/admissions" className="text-blue-600 text-sm hover:underline">View All</Link>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 text-gray-600">
                        <tr>
                          <th className="p-4 font-medium">Student Name</th>
                          <th className="p-4 font-medium">Class</th>
                          <th className="p-4 font-medium">Date</th>
                          <th className="p-4 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {admissions.slice(0, 5).map((adm) => (
                          <tr key={adm._id} className="hover:bg-gray-50">
                            <td className="p-4 text-gray-800 font-medium">{adm.studentName}</td>
                            <td className="p-4 text-gray-600">{adm.classApplying}</td>
                            <td className="p-4 text-gray-600">{new Date(adm.createdAt).toLocaleDateString()}</td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                adm.status === 'Approved' ? 'bg-green-100 text-green-800' :
                                adm.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {adm.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                        {admissions.length === 0 && (
                          <tr>
                            <td colSpan={4} className="p-8 text-center text-gray-500">No recent applications found.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            } />

            <Route path="/admissions" element={
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-800">Manage Admissions</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="p-4 font-medium">Student Name</th>
                        <th className="p-4 font-medium">Class</th>
                        <th className="p-4 font-medium">Parent Info</th>
                        <th className="p-4 font-medium">Status</th>
                        <th className="p-4 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {admissions.map((adm) => (
                        <tr key={adm._id} className="hover:bg-gray-50">
                          <td className="p-4 text-gray-800 font-medium">{adm.studentName}</td>
                          <td className="p-4 text-gray-600">{adm.classApplying}</td>
                          <td className="p-4 text-gray-600">
                            {adm.parentName}<br/>
                            <span className="text-xs text-gray-400">{adm.phone}</span>
                          </td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              adm.status === 'Approved' ? 'bg-green-100 text-green-800' :
                              adm.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {adm.status}
                            </span>
                          </td>
                          <td className="p-4 text-right space-x-2">
                            {adm.status === 'Pending' && (
                              <>
                                <button 
                                  onClick={() => handleAdmissionStatus(adm._id, 'Approved')}
                                  className="text-green-600 hover:text-green-800 p-1"
                                  title="Approve"
                                >
                                  <CheckCircle size={20} />
                                </button>
                                <button 
                                  onClick={() => handleAdmissionStatus(adm._id, 'Rejected')}
                                  className="text-red-600 hover:text-red-800 p-1"
                                  title="Reject"
                                >
                                  <XCircle size={20} />
                                </button>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                      {admissions.length === 0 && (
                        <tr>
                          <td colSpan={5} className="p-8 text-center text-gray-500">No applications found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            } />

            <Route path="/notices" element={
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-800">Manage Notices</h2>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
                    + Add Notice
                  </button>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {notices.map((notice) => (
                      <div key={notice._id} className="flex justify-between items-start p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                        <div>
                          <h3 className="font-bold text-gray-800">{notice.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{new Date(notice.date).toLocaleDateString()}</p>
                          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{notice.description}</p>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
                          <button 
                            onClick={() => handleDeleteNotice(notice._id)}
                            className="text-red-600 hover:text-red-800 text-sm font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                    {notices.length === 0 && (
                      <div className="text-center py-8 text-gray-500">No notices found.</div>
                    )}
                  </div>
                </div>
              </div>
            } />

            {/* Placeholders for other admin routes */}
            <Route path="/events" element={<div className="p-8 text-center text-gray-500">Event Management Coming Soon</div>} />
            <Route path="/gallery" element={<div className="p-8 text-center text-gray-500">Gallery Management Coming Soon</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
