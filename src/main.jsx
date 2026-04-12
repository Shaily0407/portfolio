import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Easter egg for recruiters
console.log(
  '%c👋 Hey Recruiter!',
  'font-size:24px; font-weight:bold; color:#7C3AED;'
)
console.log(
  '%cWelcome to Shaily Gujarathi\'s portfolio! 🚀\nLooks like you know how to dig deep — just like a good engineer.\nFeel free to reach out: shailygujarathi04@gmail.com',
  'font-size:14px; color:#0D9488;'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
