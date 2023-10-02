import './settings.scss'
// import React from 'react'

// const Settings = () => {
//   return (
//     <div>Settings</div>
//   )
// }

// export default Settings

import React from 'react';

const SettingsPage = () => {
  const handleResetPassword = () => {
    // Implement password reset logic
    console.log('Password reset initiated.');
  };

  const handleUpdateAccount = () => {
    // Implement account update logic
    console.log('Account details updated.');
  };

  return (
    <div>
      <h1>Settings Page</h1>
      <button onClick={handleResetPassword}>Reset Password</button>
      <button onClick={handleUpdateAccount}>Update Account Details</button>
    </div>
  );
};

export default SettingsPage;
