import React from 'react';

const FOO_BAR = 'foo';

const localvar = 'module1';

const module1 = () => <div>{localvar}</div>;

export { module1 as default, FOO_BAR };
