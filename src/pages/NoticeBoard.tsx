import { useState, useEffect } from 'react';
import { Calendar, Bell, FileText, AlertCircle } from 'lucide-react';

export default function NoticeBoard() {
  const [notices, setNotices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('/api/notices');
        if (response.ok) {
          const data = await response.json();
          setNotices(data);
        } else {
          // Fallback mock data
          setNotices([
            { _id: '1', title: 'Half-Yearly Examination Schedule', description: 'The half-yearly examinations for classes I to XII will commence from 15th October. Please download the detailed date sheet from the parent portal.', date: new Date().toISOString() },
            { _id: '2', title: 'Diwali Holidays', description: 'The school will remain closed from 20th October to 25th October on account of Diwali. Classes will resume on 26th October.', date: new Date(Date.now() - 86400000 * 2).toISOString() },
            { _id: '3', title: 'Annual Sports Meet Selection', description: 'Selections for the Annual Sports Meet will be held next week during sports periods. Interested students must register with their respective class teachers.', date: new Date(Date.now() - 86400000 * 5).toISOString() },
          ]);
        }
      } catch (error) {
        console.error('Error fetching notices:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Notice Board</h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
          <div className="bg-yellow-500 p-4 flex items-center">
            <Bell size={24} className="text-blue-900 mr-3" />
            <h2 className="text-xl font-bold text-blue-900">Latest Announcements</h2>
          </div>
          
          <div className="p-6">
            {loading ? (
              <div className="text-center py-10">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900 mx-auto"></div>
              </div>
            ) : notices.length === 0 ? (
              <div className="text-center py-10 text-gray-500 flex flex-col items-center">
                <AlertCircle size={48} className="mb-4 text-gray-300" />
                <p>No notices available at the moment.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {notices.map((notice) => (
                  <div key={notice._id} className="border-l-4 border-blue-900 pl-4 py-2 hover:bg-gray-50 transition-colors rounded-r-lg">
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Calendar size={14} className="mr-1" />
                      {formatDate(notice.date)}
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-start">
                      <FileText size={18} className="mr-2 mt-1 flex-shrink-0 text-yellow-600" />
                      {notice.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{notice.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
