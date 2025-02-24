import { useState } from "react"; 

// Counter component manages a simple counter with increment and decrement functionality
export default function Counter() {
  // State variable 'count' to track the counter value, initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter</h1>
      
      {/* Display the current count */}
      <p>Current Count: {count}</p>

      {/* Button to increase the count by 1 */}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Button to decrease the count by 1 */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}