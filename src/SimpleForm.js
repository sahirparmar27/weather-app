import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [hobbies, setHobbies] = useState({
    sing: false,
    dance: false,
    cricket: false
  });
  const [notifications, setNotifications] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleHobbyChange = (event) => {
    const hobby = event.target.name;
    const checked = event.target.checked;
    setHobbies((prevHobbies) => ({ ...prevHobbies, [hobby]: checked }));
  };

  const handleNotificationToggle = () => {
    setNotifications((prevNotifications) => !prevNotifications);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      name,
      address,
      gender,
      hobbies,
      notifications
    });
  };

  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Address:
          <textarea value={address} onChange={handleAddressChange} />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="radio"
            value="male"
            checked={gender === 'male'}
            onChange={handleGenderChange}
          />
          Male
          <input
            type="radio"
            value="female"
            checked={gender === 'female'}
            onChange={handleGenderChange}
          />
          Female
        </label>
        <br />
        <label>
          Hobbies:
          <input
            type="checkbox"
            name="sing"
            checked={hobbies.sing}
            onChange={handleHobbyChange}
          />
          Sing
          <input
            type="checkbox"
            name="dance"
            checked={hobbies.dance}
            onChange={handleHobbyChange}
          />
          Dance
          <input
            type="checkbox"
            name="cricket"
            checked={hobbies.cricket}
            onChange={handleHobbyChange}
          />
          Cricket
        </label>
        <br />
        <label>
          Receive Notifications:
          <button
            type="button"
            onClick={handleNotificationToggle}
            style={{
              backgroundColor: notifications ? 'green' : 'red',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            {notifications ? 'ON' : 'OFF'}
          </button>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;