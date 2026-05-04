'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useNav } from '@/context/NavContext';

export default function OnasPage() {
  const pathname = usePathname();
  const { setNavInfo } = useNav();
  

  useEffect(() => {
    setNavInfo({
      path: pathname,
      sections: [
        { id: 'onas', label: 'O Nas' },
      ]
    });

    return () => setNavInfo({
      path: "/",
      sections: [],
    });
  }, [setNavInfo, pathname]);

  return (
    <div className="p-20">
      <section id="onas" style={{height: "100vh", width: "100%", display: "grid", placeItems: "center", }}>
        <h2 className="machined-label">O Nas</h2>
      </section>
    </div>
  );
}