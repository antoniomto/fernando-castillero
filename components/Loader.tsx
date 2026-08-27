"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "map_loader_shown";

export function Loader() {
  const [gone, setGone] = useState(false);
  const [alreadyShown, setAlreadyShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setAlreadyShown(true);
      setGone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    const removeTimer = window.setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 2700);

    return () => {
      window.clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  // CSS drives the whole animation via keyframes; React only removes at the end.
  // alreadyShown branch never renders (gone=true immediately). SSR always renders loader
  // so it covers the pre-hydration paint.
  if (alreadyShown) return null;

  return (
    <div aria-hidden className="loader-root">

      <div className="loader-content">
        <div className="loader-logo">
          <svg viewBox="0 0 80 80" className="h-16 w-16">
            <circle cx="40" cy="40" r="38" fill="#054D5E" />
            <path
              d="M28 52 Q26 44 30 38 Q30 34 34 32 Q36 26 42 28 Q46 26 50 32 Q54 34 54 40 Q56 46 54 54 L52 58 L46 58 L46 54 Q42 56 38 54 L38 58 L30 58 Z M35 34 L32 28 L36 32 Z M45 32 L48 28 L46 34 Z"
              fill="#A9A478"
            />
            <circle cx="37" cy="40" r="1.2" fill="#F6F3D4" />
          </svg>
        </div>

        <svg
          viewBox="0 0 300 60"
          className="loader-ecg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M0 30 H90 L105 30 L112 12 L120 48 L128 8 L136 52 L144 30 H210 L218 30 L225 18 L233 42 L241 30 H300"
            fill="none"
            stroke="#054D5E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="loader-wordmark">MUNDO À PARTE</div>
      </div>
    </div>
  );
}
