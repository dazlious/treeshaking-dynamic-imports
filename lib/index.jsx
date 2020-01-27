import React from 'react';
import loadable from '@loadable/component';

const Module1 = loadable(() => import('./module1/module1'));
const Module2 = loadable(() => import('./module2/module2'));

export default () => (
  <div>
    <Module1 />
    <Module2 />
  </div>
);
