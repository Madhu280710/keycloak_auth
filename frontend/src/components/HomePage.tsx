import React from 'react';
import ProtectedComponent from './ProtectedComponent';

const HomePage: React.FC = () => {
  return (
    <ProtectedComponent>
      <h1>Welcome to the Home Page!</h1>
      <p>This is some content within the layout.</p>
    </ProtectedComponent>
  );
};

export default HomePage;
