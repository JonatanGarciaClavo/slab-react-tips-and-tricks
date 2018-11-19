import React from 'react';
import { generateName } from '../utils';

// Generates a random avatar using the adorable avatars api
// For more info about Adorable Avatars 👉 http://avatars.adorable.io/
function generateAvatarUrl(size) {
  return `https://api.adorable.io/avatars/${size}/${generateName()}`;
}

const Avatar = ({ size = 64 }) => {
  return (
    <div>
      <img src={generateAvatarUrl(size)} alt={'user-avatar'} style={{ borderRadius: 5 }} />
    </div>
  );
};

export default Avatar;
