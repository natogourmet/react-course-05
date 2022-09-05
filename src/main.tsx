import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './01-useState/CounterApp';
import { HooksApp } from './HooksApp';
import './index.css';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>
);
