import { useEffect, useState } from 'react';
import { LogOut, Search, Filter, Edit2, Trash2, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  preferred_date: string;
  preferred_time: string;
  fitness_goals: string;
  status: string;
  created_at: string;
}

interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  membership_type: string;
  requirements: string;
  status: string;
  created_at: string;
}

type TabType = 'appointments' | 'quotes';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [activeTab, setActiveTab] = useState<TabType>('appointments');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingStatus, setEditingStatus] = useState('');

  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  useEffect(() => {
    const stored = localStorage.getItem('admin_auth');
    if (stored === 'true') {
      setIsLoggedIn(true);
      fetchData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === adminPassword) {
      localStorage.setItem('admin_auth', 'true');
      setIsLoggedIn(true);
      setPasswordError('');
      fetchData();
    } else {
      setPasswordError('Incorrect password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    setIsLoggedIn(false);
    setPassword('');
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [appointmentsData, quotesData] = await Promise.all([
        supabase.from('appointments').select('*').order('created_at', { ascending: false }),
        supabase.from('quote_requests').select('*').order('created_at', { ascending: false }),
      ]);

      if (appointmentsData.data) setAppointments(appointmentsData.data);
      if (quotesData.data) setQuotes(quotesData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (table: TabType, id: string, newStatus: string) => {
    const tableName = table === 'appointments' ? 'appointments' : 'quote_requests';
    try {
      const { error } = await supabase
        .from(tableName)
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
      setEditingId(null);
      fetchData();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteEntry = async (table: TabType, id: string) => {
    if (!window.confirm('Are you sure you want to delete this entry?')) return;

    const tableName = table === 'appointments' ? 'appointments' : 'quote_requests';
    try {
      const { error } = await supabase.from(tableName).delete().eq('id', id);

      if (error) throw error;
      fetchData();
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  const filterData = (data: Appointment[] | QuoteRequest[]) => {
    return data.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  };

  const getStatusBadge = (status: string) => {
    const colors: Record<string, { bg: string; text: string; icon: any }> = {
      pending: { bg: 'bg-yellow-50', text: 'text-yellow-700', icon: Clock },
      confirmed: { bg: 'bg-blue-50', text: 'text-blue-700', icon: CheckCircle },
      completed: { bg: 'bg-green-50', text: 'text-green-700', icon: CheckCircle },
      responded: { bg: 'bg-green-50', text: 'text-green-700', icon: CheckCircle },
    };

    const color = colors[status] || colors.pending;
    const Icon = color.icon;

    return (
      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${color.bg} ${color.text}`}>
        <Icon className="h-4 w-4" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
    );
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
            <p className="text-gray-600">K2 Fitness Studio</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter password"
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {passwordError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredAppointments = filterData(appointments);
  const filteredQuotes = filterData(quotes);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage appointments and quote requests</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`pb-4 px-4 font-semibold transition-all ${
              activeTab === 'appointments'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Appointments ({appointments.length})
          </button>
          <button
            onClick={() => setActiveTab('quotes')}
            className={`pb-4 px-4 font-semibold transition-all ${
              activeTab === 'quotes'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Quote Requests ({quotes.length})
          </button>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="flex-1 outline-none text-sm bg-white"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="responded">Responded</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tables */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-gray-600">Loading...</div>
          ) : activeTab === 'appointments' ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Phone</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date & Time</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredAppointments.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                        No appointments found
                      </td>
                    </tr>
                  ) : (
                    filteredAppointments.map((apt) => (
                      <tr key={apt.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{apt.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{apt.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{apt.phone}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {apt.preferred_date} at {apt.preferred_time}
                        </td>
                        <td className="px-6 py-4">
                          {editingId === apt.id ? (
                            <select
                              value={editingStatus}
                              onChange={(e) => {
                                updateStatus('appointments', apt.id, e.target.value);
                              }}
                              className="text-sm border border-gray-200 rounded px-2 py-1"
                            >
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="completed">Completed</option>
                            </select>
                          ) : (
                            getStatusBadge(apt.status)
                          )}
                        </td>
                        <td className="px-6 py-4 flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingId(apt.id);
                              setEditingStatus(apt.status);
                            }}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                            title="Edit status"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteEntry('appointments', apt.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Phone</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Membership Interest</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredQuotes.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                        No quote requests found
                      </td>
                    </tr>
                  ) : (
                    filteredQuotes.map((quote) => (
                      <tr key={quote.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{quote.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{quote.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{quote.phone}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{quote.membership_type || '-'}</td>
                        <td className="px-6 py-4">
                          {editingId === quote.id ? (
                            <select
                              value={editingStatus}
                              onChange={(e) => {
                                updateStatus('quotes', quote.id, e.target.value);
                              }}
                              className="text-sm border border-gray-200 rounded px-2 py-1"
                            >
                              <option value="pending">Pending</option>
                              <option value="responded">Responded</option>
                            </select>
                          ) : (
                            getStatusBadge(quote.status)
                          )}
                        </td>
                        <td className="px-6 py-4 flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingId(quote.id);
                              setEditingStatus(quote.status);
                            }}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                            title="Edit status"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteEntry('quotes', quote.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
