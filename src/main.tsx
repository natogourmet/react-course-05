import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';
import './index.css';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHoks } from './03-examples/MultipleCustomHoks';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <MultipleCustomHoks />
  </>
);
