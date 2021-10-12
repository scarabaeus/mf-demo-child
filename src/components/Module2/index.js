import React from 'react';

const Module2 = ({ name = 'directly' }) => (
  <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    <div
      style={{
        borderBottom: '1px solid #808080',
        lineHeight: '3rem',
        flexBasis: '3rem',
        paddingLeft: '1rem',
      }}
    >
      Application 1 Module 2 - Loaded {name}
    </div>
    <div style={{ flex: 1 }}>
      <img src="https://via.placeholder.com/300/09f/fff.png" />
    </div>
  </div>
);
export default Module2;
