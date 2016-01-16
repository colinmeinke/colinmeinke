import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import React from 'react';
import { createDevTools } from 'redux-devtools';

const DevTools = createDevTools(
  <DockMonitor
    changePositionKey="ctrl-q"
    toggleVisibilityKey="ctrl-h"
  >
    <LogMonitor />
  </DockMonitor>
);

export default DevTools;
