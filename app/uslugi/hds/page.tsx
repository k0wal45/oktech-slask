'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useNav } from '@/context/NavContext';

export default function UslugiPage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();
  

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [
        { id: 'uslugi', label: 'Uslugi' },
      ]
    });

    return () => setNavInfo({
      path: "/",
      sections: [],
    });
  }, [setNavInfo, pathname]);

  return (
    <div className="p-20">
      <section id="uslugi" style={{height: "100vh", width: "100%", display: "grid", placeItems: "center", }}>
        <h2 className="machined-label">HDS</h2>
      </section>
    </div>
  );
}