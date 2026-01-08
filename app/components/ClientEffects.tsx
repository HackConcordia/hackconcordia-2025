'use client';

import dynamic from "next/dynamic";

const BackgroundOverlay = dynamic(() => import("./BackgroundOverlay"), {
  ssr: false,
  loading: () => null,
});

const FloatingBeeCursor = dynamic(() => import("./FloatingBeeCursor"), {
  ssr: false,
  loading: () => null,
});

export default function ClientEffects() {
  return (
    <>
      <div className="hidden md:flex">
        <BackgroundOverlay />
      </div>
      <div className="hidden md:flex">
        <FloatingBeeCursor />
      </div>
    </>
  );
}
