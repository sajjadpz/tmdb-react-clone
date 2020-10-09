import React from 'react';
import Box from '@material-ui/core/Box';
import WhatIsPopular from './components/WhatIsPopular';


const Movies = () => {
  return (
    <WhatIsPopular />
  );
}

export default function App() {
  return (
    <Box overflow="hidden">
      <Movies />
    </Box>
  );
}
