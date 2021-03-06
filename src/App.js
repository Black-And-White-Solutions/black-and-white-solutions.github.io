import React from 'react';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import AboutServicesPage from './components/AboutServicesPage';
import AboutTimelinePage from './components/AboutTimelinePage';
import AboutTeamPage from './components/AboutTeamPage';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <LandingPage />
        <AboutServicesPage />
        <AboutTimelinePage />
        <AboutTeamPage />
        <ContactPage />
      </Layout>
    </div>
  );
}

export default App;
