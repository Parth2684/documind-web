import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { GetStartedSection } from "@/components/get-started-section";
import { ReleaseNotes, Footer } from "@/components/release-notes";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <GetStartedSection />
        <ReleaseNotes />
      </main>
      <Footer />
    </>
  );
}
