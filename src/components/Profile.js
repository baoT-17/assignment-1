import { useState } from 'react';
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