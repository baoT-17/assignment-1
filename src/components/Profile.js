import { useState } from 'react';

// Profile component manages user login state and name input
export default function Profile() {
    // State variables for login status, input name, and submitted name
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');
  
    // Function to handle form submission (login/logout action)
    const handleAction = (e) => {
      e.preventDefault(); // Prevents page reload
      
      if (isLoggedIn) {
        // Logout: Reset login state and clear submitted name
        setIsLoggedIn(false);
        setSubmittedName('');
      } else {
        // Login: Set submitted name (or default to 'User') and update login state
        setSubmittedName(name || 'User');
        setIsLoggedIn(true);
        setName(''); // Clear input field
      }
    };
  
    return (
      <div className="container">
        <h1>Profile</h1>

        {/* Form for user login/logout */}
        <form onSubmit={handleAction}>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name" 
            disabled={isLoggedIn} // Disable input when logged in
          />
          <button type="submit">
            {isLoggedIn ? 'Logout' : 'Login'} 
            {/* Button toggles between login and logout */}
          </button>
        </form>

        {/* Display welcome message or prompt to log in */}
        <p>{isLoggedIn ? `Welcome, ${submittedName}!` : 'Please log in.'}</p>
      </div>
    );
}