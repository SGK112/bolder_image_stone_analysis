// Use React from CDN
const { useState, createElement: h } = React;
const { createRoot } = ReactDOM;

// Simple App component
function App() {
  return h('div', { className: 'min-h-screen bg-gradient-to-br from-slate-50 to-slate-100' },
    // Header
    h('header', { className: 'bg-white shadow-sm border-b' },
      h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4' },
        h('div', { className: 'flex items-center justify-between' },
          h('div', null,
            h('h1', { className: 'text-2xl font-bold text-gray-900' }, 'Boulder Image Stone'),
            h('p', { className: 'text-gray-600' }, 'Digital Marketing Analysis & Strategic Solutions')
          ),
          h('span', { className: 'bg-green-100 text-green-800 px-2 py-1 rounded text-sm' }, 'Confidential Presentation')
        )
      )
    ),
    // Hero Section
    h('section', { className: 'bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16' },
      h('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        h('div', { className: 'text-center' },
          h('h2', { className: 'text-4xl font-bold mb-4' }, 'Unlock Your Digital Potential'),
          h('p', { className: 'text-xl text-gray-300 mb-8 max-w-3xl mx-auto' }, 
            'Comprehensive analysis reveals significant opportunities to improve search rankings, increase leads, and strengthen your B2B market position in Phoenix.'
          )
        )
      )
    )
  );
}

// Mount the app
createRoot(document.getElementById('root')).render(h(App));
