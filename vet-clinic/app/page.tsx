import LeistungenSection from '@/components/LeistungenSection/LeistungenSection';
import DocTeamSection from '@/components/DocTeamSection/DocTeamSection';

export default function Home() {
  return (
    <>
      {/* <h1>Ich bin die Startseite</h1> */}
      <LeistungenSection sliceAmount={[0, 3]} />
      <DocTeamSection />
    </>
  );
}
