import React from 'react';
const Module1 = ({ name = 'N/A' }) => (
  <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    <div
      style={{
        borderBottom: '1px solid #808080',
        lineHeight: '3rem',
        flexBasis: '3rem',
        paddingLeft: '1rem',
      }}
    >
      Module 1 {name}
    </div>
    <div style={{ flex: 1 }}>
      <button>Module 1 Button</button>
    </div>
  </div>
);
export default Module1;
