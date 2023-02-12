import React from 'react';

interface ProfileProps {
  imageUrl: string;
  name: string;
  job: string;
  isNew: boolean;
}

export default function Profile({ imageUrl, name, job, isNew }: ProfileProps) {
  return (
    <div className="profile">
      <img className="photo" src={imageUrl} alt="profile" />
      {isNew && <span className="new">New</span>}
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
