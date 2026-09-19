import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { CROP_TO_LAYOUT } from "./data";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Home from "./pages/Home";
import Location from "./pages/Location";

/** Scroll to top on navigation and move focus to <main> for keyboard/screen-reader users. */
function RouteEffects() {
  const { pathname } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (first.current) {
      first.current = false;
      return;
    }
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className={CROP_TO_LAYOUT ? undefined : "natural"}>
      <RouteEffects />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          {/* any other path is treated as a location slug; unknown slugs show a not-found page */}
          <Route path="/:slug" element={<Location />} />
          <Route path="*" element={<Location />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
