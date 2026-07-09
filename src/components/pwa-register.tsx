"use client";

import { useEffect, useState } from "react";

// Registers the offline service worker and shows a small banner when the device
// loses signal (so people know they're seeing saved information).
export function PWARegister({ offlineText }: { offlineText: string }) {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // A failed SW registration must never break the page.
      });
    }
    const update = () => setOffline(!navigator.onLine);
    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  if (!offline) return null;
  return (
    <div role="status" className="bg-ink-soft px-4 py-1.5 text-center text-[14px] font-medium text-paper">
      {offlineText}
    </div>
  );
}
