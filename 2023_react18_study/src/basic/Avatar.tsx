import React from 'react';

interface AvatarProps {
  imageUrl: string;
  isNew: boolean;
}

export default function Avatar({ imageUrl, isNew }: AvatarProps) {
  return (
    <div className="avatar">
      <img className="photo" src={imageUrl} alt="profile" />
      {isNew && <span className="new">New</span>}
    </div>
  );
}
