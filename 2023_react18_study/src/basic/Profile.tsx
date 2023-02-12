import React from 'react';
import Avatar from './Avatar';

interface ProfileProps {
  imageUrl: string;
  name: string;
  job: string;
  isNew: boolean;
}

export default function Profile({ imageUrl, name, job, isNew }: ProfileProps) {
  return (
    <div className="profile">
      <Avatar imageUrl={imageUrl} isNew={isNew} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
