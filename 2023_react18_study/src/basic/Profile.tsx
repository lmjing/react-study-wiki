import React from 'react';

interface ProfileProps {
  imageUrl: string;
  name: string;
  job: string;
}

export default function Profile({ imageUrl, name, job }: ProfileProps) {
  return (
    <div className="profile">
      <img className="photo" src={imageUrl} alt="profile" />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
