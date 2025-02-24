import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleAction = (e) => {
    e.preventDefault();
    
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setSubmittedName('');
    } else {
      setSubmittedName(name || 'User');
      setIsLoggedIn(true);
      setName('');
    }
  };

  return (
    <div className="container">
      <Header />
      <Navbar />
      <h1>Profile</h1>

      <form onSubmit={handleAction}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name" 
          disabled={isLoggedIn}
        />
        <button type="submit">
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </form>

      <p>{isLoggedIn ? `Welcome, ${submittedName}!` : 'Please log in.'}</p>
    </div>
  );
}