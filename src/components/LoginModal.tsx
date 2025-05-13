import { useState } from 'react';
import { X } from 'lucide-react';
import { login } from '../data/users';
import type { LoginCredentials } from '../types/user';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const LoginModal = ({ isOpen, onClose, onSuccess }: LoginModalProps) => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const user = login(credentials);
    if (user) {
      onSuccess();
      onClose();
    } else {
      setError('Invalid email or password');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-neo-dark p-6 rounded-sm neon-border-blue max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-vt323 text-xl text-white">Login</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-neo-blue-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-red-500 font-code text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label className="block font-code text-sm text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
              className="w-full bg-neo-black border-0 focus:ring-0 focus:outline-none font-code text-gray-300 px-4 py-3 neon-border-blue"
              required
            />
          </div>
          
          <div>
            <label className="block font-code text-sm text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              className="w-full bg-neo-black border-0 focus:ring-0 focus:outline-none font-code text-gray-300 px-4 py-3 neon-border-blue"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full neon-border-blue px-4 py-3 font-vt323 text-neo-blue-100 hover:bg-neo-blue-100 hover:bg-opacity-10 transition-all duration-300"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;