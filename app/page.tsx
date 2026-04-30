import { KineticButton } from "@/components/KineticButton/KineticButton";
import { TechnicalCard } from "@/components/TechnicalCard/TechnicalCard";


export default function Home() {
  return (
    <main className="p-10 min-h-screen space-y-12">
      {/* Nagłówek w stylu "Machined Label" */}
      <h1 className="text-6xl font-bold max-w-2xl">
        Precision <span className="text-[var(--primary-container)]">Brutalism</span> Engine
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Asymetria: Lewa strona cięższa */}
        <div className="space-y-6">
          <TechnicalCard
            label="V-01 / THERMAL" 
            title="KINETIC CORE ACTIVE" 
            description="System diagnostyczny wykrył optymalne parametry pracy. Wszystkie moduły 0px border-radius gotowe do operacji."
          />
          <KineticButton>Uruchom Protokół</KineticButton>
        </div>

        {/* Prawa strona lżejsza - Blueprint vibe */}
        <div className="border-l-2 border-[var(--outline-variant)] pl-8 py-10">
          <p className="text-sm opacity-50 font-mono">
            {'// DATA_STREAM_049'}<br />
            {'// STATUS: OPERATIONAL'}<br />
            {'// GRID: FRACTURED'}
          </p>
        </div>
      </div>
    </main>
  );
}