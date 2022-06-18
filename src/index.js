import React from 'react';
import {createRoot} from 'react-dom/client';
import ContactApp from './components/ContactApp';
import CounterApp from './components/CounterApp';
import MyForm from './components/MyForm';

// style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));

// root.render(<CounterApp />);
// root.render(<ContactApp />);
root.render(<MyForm />);