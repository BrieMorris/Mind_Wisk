import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Cloudinary from '../Cloudinary/Cloudinay';
//This is the Admin Page for Apollo to make adjust for users
function UserPage() {
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const handleClick = () => {
    history.push('/LandingPage');
  };

  const isLoggedIn = Object.keys(user).length > 0;

  const levels = ["Insufficient", "Low", "Plenty"];

  const [levelIndex, setLevelIndex] = useState(0);

  useEffect(() => {
    // Fetch the initial level index from the server
    fetch('/api/getLevelIndex')
      .then((response) => response.json())
      .then((data) => setLevelIndex(data.levelIndex));
  }, []);

  const handleButtonClick = () => {
    console.log('Button Clicked');

    // Update the level index on the server
    fetch('/api/updateLevelIndex', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newLevelIndex: (levelIndex + 1) % levels.length }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Server Response', data);
        if (data.success) {
          // Update the level index on the client
          setLevelIndex((prevIndex) => (prevIndex + 1) % levels.length);
        }
      });
  };

  const convertAndDownloadCSV = () => {
    // Fetch all order data from the server using Axios
    axios.get('/orders')
      .then((response) => {
        // Convert response.data to CSV format
        const csvString = convertToCSV(response.data);

        // Create a Blob containing the CSV data
        const blob = new Blob([csvString], { type: 'text/csv' });

        // Create a download link
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);

        // Set the file name for the download
        link.download = 'all_orders_data.csv';

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger the click event on the link to start the download
        link.click();

        // Remove the link from the body
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error('Error fetching all orders:', error);
        // Handle errors, e.g., show an error message
      });
  };

  const convertToCSV = (data) => {
    // Implement your own logic to convert the data to CSV format
    // This is a simplified example, and you may need to customize it based on your data structure
    return data.map((row) => Object.values(row).join(',')).join('\n');
  };

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Admin Page.</p>
      <LogOutButton className="btn" />

      <div className="donatecontainer">
        <ProgressBar level={levels[levelIndex]} />

        <h3>Admin Controls</h3>
        <br />
        {/* Conditionally render the button if the user is logged in */}
        {isLoggedIn && (
          <React.Fragment>
            <button onClick={handleButtonClick}>Change Level</button>
            <button onClick={convertAndDownloadCSV}>Download CSV</button>
          </React.Fragment>
        )}

        <button onClick={handleClick}>Landing Page</button>
        <br/><br/>
        <Cloudinary/>
      </div>
    </div>
  );
}

export default UserPage;
