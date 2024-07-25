import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StartRating from './StartRating';

// function Test() {
//   const [testsimple, setTestsimple] = useState(0)
//   return (
//     <div>
//       <StartRating color='blue' maxRating={10} leTest={setTestsimple} />
//       <p>This is movies rating is {testsimple} starts</p>
//     </div>
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test></Test> */}
  </React.StrictMode>
);

