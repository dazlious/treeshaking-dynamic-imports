import React from 'react';

const Module1 = () => import('./module1/module1');
const Module2 = () => import('./module2/module2');

export default () => (
  <div>
    <Module1 />
    <Module2 />
  </div>
);
