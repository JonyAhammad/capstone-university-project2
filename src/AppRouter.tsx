import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { RequestSupport } from './pages/RequestSupport';
import { BecomeDonor } from './pages/BecomeDonor';
import { Contact } from './pages/Contact';
import { InstantSupport } from './pages/InstantSupport';
import { TrackDonation } from './pages/TrackDonation';
import { VerificationCenter } from './pages/VerificationCenter';
import { SocialActivity } from './pages/SocialActivity';
import { GlobalHunger } from './pages/GlobalHunger';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/request-support" element={<RequestSupport />} />
        <Route path="/become-donor" element={<BecomeDonor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/instant-support" element={<InstantSupport />} />
        <Route path="/track-donation" element={<TrackDonation />} />
        <Route path="/verification-center" element={<VerificationCenter />} />
        <Route path="/social-activity" element={<SocialActivity />} />
        <Route path="/global-hunger" element={<GlobalHunger />} />
      </Routes>
    </BrowserRouter>;
}