'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useNav } from '@/context/NavContext';

export default function WynajemPage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();
  

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [
        { id: 'podnosniki', label: 'Podnośniki Koszowe' },
        { id: 'ladowarki', label: 'Ładowarki Tele' },
        { id: 'wozki', label: 'Wózki Widłowe' }
      ]
    });

    return () => setNavInfo({
      path: "/",
      sections: [],
    });
  }, [setNavInfo, pathname]);

  return (
    <div className="p-20">
      <section id="podnosniki" style={{height: "100vh", width: "100%", display: "grid", placeItems: "center", backgroundColor: "red", }}>
        <h2 className="machined-label">Podnośniki</h2>
      </section>
      <section id="ladowarki" style={{height: "100vh", width: "100%", display: "grid", placeItems: "center", backgroundColor: "blue", }}>
        <h2 className="machined-label">Ładowarki Tele</h2>
      </section>
      <section id="wozki" style={{height: "100vh", width: "100%", display: "grid", placeItems: "center", backgroundColor: "green", }}>
        <h2 className="machined-label">Wózki Widłowe</h2>
      </section>

    </div>
  );
}