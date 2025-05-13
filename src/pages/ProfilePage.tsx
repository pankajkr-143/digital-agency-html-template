import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../data/users';
import { Camera, Copy, Calendar, Bell, Settings, LogOut, Clock, MapPin, Briefcase, Hash, CreditCard, CalendarIcon, Save, Edit2, Mail, Phone, Building2, Award, FileText, Heart, Target, BookOpen, Users } from 'lucide-react';
import type { User } from '../types/user';

const ProfilePage = () => {
  const user = getCurrentUser() as User;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically make an API call to update the user data
  };

  const handleInputChange = (field: string, value: string) => {
    setEditedUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA] pt-16">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-gray-800">Profile</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm font-medium text-gray-600">
            {currentTime.toLocaleTimeString()}
          </div>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Basic Info Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="relative">
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                Active
              </div>
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <button className="absolute bottom-4 right-1/2 transform translate-x-12 bg-white rounded-full p-2 shadow-lg">
                <Camera className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-500">{user.position}</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <div className="flex items-center mt-1">
                  <input
                    type="email"
                    value={user.email}
                    readOnly
                    className="flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm"
                  />
                  <button 
                    onClick={() => handleCopy(user.email)}
                    className="ml-2 text-gray-400 hover:text-gray-600"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-500">Phone</label>
                <div className="flex items-center mt-1">
                  <input
                    type="tel"
                    value={user.phone}
                    readOnly={!isEditing}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm"
                  />
                  <button 
                    onClick={() => handleCopy(user.phone)}
                    className="ml-2 text-gray-400 hover:text-gray-600"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-500">Employee ID</label>
                <input
                  type="text"
                  value={user.employeeId}
                  readOnly
                  className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 mt-1 text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Department</label>
                <input
                  type="text"
                  value={user.department}
                  readOnly
                  className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 mt-1 text-sm"
                />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between">
              <button 
                onClick={handleLogout}
                className="flex items-center text-red-500 hover:text-red-600"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </button>
              
              <button
                onClick={isEditing ? handleSave : handleEdit}
                className="flex items-center text-blue-500 hover:text-blue-600"
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit2 className="h-4 w-4 mr-2" />
                    Edit
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Employment Details */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Employment Details</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Position</label>
                <input
                  type="text"
                  value={user.position}
                  readOnly
                  className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 mt-1 text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Hire Date</label>
                <input
                  type="text"
                  value={user.hireDate}
                  readOnly
                  className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 mt-1 text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Work Duration</label>
                <input
                  type="text"
                  value={user.workDuration}
                  readOnly
                  className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 mt-1 text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Salary</label>
                <div className="text-sm text-gray-800 mt-1">
                  {user.salary.currency} {user.salary.amount.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">
                  Last Review: {user.salary.lastReview}
                  <br />
                  Next Review: {user.salary.nextReview}
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-500">Benefits</label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {Object.entries(user.benefits).map(([benefit, hasIt]) => (
                    <div key={benefit} className={`text-sm ${hasIt ? 'text-green-600' : 'text-red-500'}`}>
                      • {benefit.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills & Certifications</h3>
            
            <div className="mb-6">
              <label className="text-sm text-gray-500">Skills</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {user.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">Certifications</label>
              <div className="space-y-3 mt-2">
                {user.certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded">
                    <div className="font-medium text-gray-800">{cert.name}</div>
                    <div className="text-sm text-gray-500">
                      ID: {cert.credentialId}
                      <br />
                      Issued: {cert.issueDate}
                      <br />
                      {cert.expiryDate && `Expires: ${cert.expiryDate}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance & Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance</h3>
            
            <div className="mb-6">
              <label className="text-sm text-gray-500">Last Review</label>
              <div className="bg-gray-50 p-4 rounded mt-2">
                <div className="flex items-center mb-2">
                  <div className="text-2xl font-semibold text-blue-600">{user.performance.lastReview.rating}</div>
                  <div className="text-sm text-gray-500 ml-2">/ 5.0</div>
                </div>
                <div className="text-sm text-gray-700">{user.performance.lastReview.feedback}</div>
                <div className="text-xs text-gray-500 mt-2">Date: {user.performance.lastReview.date}</div>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">Goals</label>
              <div className="space-y-2 mt-2">
                {user.performance.goals.map((goal, index) => (
                  <div key={index} className="flex items-start">
                    <Target className="h-4 w-4 text-blue-600 mt-1 mr-2" />
                    <div className="text-sm text-gray-700">{goal}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Projects</h3>
            
            <div className="space-y-4">
              {user.projects.map((project, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded">
                  <div className="font-medium text-gray-800">{project.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{project.role}</div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-xs text-gray-500">
                      {project.startDate} - {project.endDate || 'Present'}
                    </div>
                    <div className={`text-xs px-2 py-1 rounded ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attendance */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Attendance & Leave</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded">
              <div className="text-sm text-gray-500">Total Leaves</div>
              <div className="text-2xl font-semibold text-gray-800 mt-1">{user.attendance.totalLeaves}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <div className="text-sm text-gray-500">Leaves Used</div>
              <div className="text-2xl font-semibold text-gray-800 mt-1">{user.attendance.leavesUsed}</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <div className="text-sm text-gray-500">Leaves Remaining</div>
              <div className="text-2xl font-semibold text-gray-800 mt-1">{user.attendance.leavesRemaining}</div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium text-gray-800 mb-3">Leave History</h4>
            <div className="space-y-3">
              {user.attendance.leaveHistory.map((leave, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-800">{leave.type}</div>
                    <div className="text-sm text-gray-500">
                      {leave.startDate} - {leave.endDate}
                    </div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded ${
                    leave.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {leave.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;