import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import LetsConnect from './pages/LetsConnect';
import LetsConnectResult from './pages/LetsConnectResult';
import JoinTheTeam from './pages/JoinTheTeam';
import JoinTheTeamResult from './pages/JoinTheTeamResult';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import './index.css';

export const ApplicantContext = React.createContext();
export const ClientContext = React.createContext();

const App = () => {
  const [applicantFormData, setApplicantFormData] = useState({
    applicantName: '',
    position: '',
    number: '',
    email: '',
    hearAboutUs: 'Social Media',
    referralPerson: ''
  });

  const [clientFormData, setClientFormData] = useState({
    clientName: '',
    number: '',
    email: '',
    industry: '',
    company: '',
    brand: '',
    position: '',
    budget: '',
    service: ''
  });

  return (
    <ApplicantContext.Provider value={{applicantFormData, setApplicantFormData}}>
      <ClientContext.Provider value={{clientFormData, setClientFormData}}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lets-connect" element={<LetsConnect />} />
              <Route path="/lets-connect-result" element={<LetsConnectResult />} />
              <Route path="/join-the-team" element={<JoinTheTeam />} />
              <Route path="/join-the-team-result" element={<JoinTheTeamResult />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Layout>
        </Router>
      </ClientContext.Provider>
    </ApplicantContext.Provider>
  );
}

export default App;
