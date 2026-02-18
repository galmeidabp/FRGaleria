import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Info } from "./pages/Info";
import { MainLayout } from "./layout/MainLayout";
import { ArtDetails } from "./components/ArtDetails";
import { ErrorPage } from "./errors/ErrorPage";
import { PrivacyTerms } from "./pages/PrivacyTerms";
import { TermsOfUse } from "./pages/TermsOfUse";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Copyright } from "./pages/Copyright";
import { ScrollToTop } from "./components/details/ScrollToTop";

export function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/obras/:slug" element={<ArtDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/info" element={<Info />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/privacyterms" element={<PrivacyTerms />} />
            <Route path="/termsofuse" element={<TermsOfUse />} />
            <Route path="/cookiepolicy" element={<CookiePolicy />} />
            <Route path="/copyright" element={<Copyright />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

