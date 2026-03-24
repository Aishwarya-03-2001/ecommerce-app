// app/page.tsx
'use client';

import dynamic from 'next/dynamic';

// Dynamically import your App component and disable SSR
const App = dynamic(() => import('../src/App'), { ssr: false });

export default function Page() {
  return <App />;
}
