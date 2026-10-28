import { DashboardShowcase } from "@/components/landing/dashboard-showcase";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Primitives } from "@/components/landing/primitives";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
          <DashboardShowcase />
        </section>
        <Primitives />
      </main>
      <Footer />
    </>
  );
}
