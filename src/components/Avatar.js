import React from 'react';

// Generates a random avatar using the adorable avatars api
// For more info about Adorable Avatars 👉 http://avatars.adorable.io/
function generateAvatarUrl(size, name) {
  return `https://api.adorable.io/avatars/${size}/${name}`;
}

const Avatar = ({ size = 64, name }) => {
  return (
    <div>
      <img src={generateAvatarUrl(size, name)} alt={'user-avatar'} style={{ borderRadius: 5 }} />
    </div>
  );
};

export default Avatar;
