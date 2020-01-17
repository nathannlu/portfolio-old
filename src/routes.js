import React from 'react';

// Import all components
const Personal = React.lazy(() => import('./pages/Personal/index'));

const routes = [

    // public Routes
    { path: '/', component: Personal }

];

export default routes;