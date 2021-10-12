import React from 'react';

const Module1 = ({ name = 'directly' }) => (
  <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    <div
      style={{
        borderBottom: '1px solid #808080',
        lineHeight: '3rem',
        flexBasis: '3rem',
        paddingLeft: '1rem',
      }}
    >
      Application 1 Module 1 - Loaded {name}
    </div>
    <div style={{ flex: 1 }}>
      <button>Module 1 Button</button>
    </div>
  </div>
);
export default Module1;
