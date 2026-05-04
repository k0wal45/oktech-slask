'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useNav } from '@/context/NavContext';

export default function KontaktPage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();
  

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [
        { id: 'kontakt', label: 'kontakt' },
      ]
    });

    return () => setNavInfo({
      path: "/",
      sections: [],
    });
  }, [setNavInfo, pathname]);

  return (
    <div className="p-20">
      <section id="kontakt" style={{height: "100vh", width: "100%", display: "grid", placeItems: "center", }}>
        <h2 className="machined-label">Kontakt</h2>
      </section>
    </div>
  );
}