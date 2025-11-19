import HeroLayout from "@/components/HeroLayout";
import InteractiveHero from "@/components/InteractiveHero";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {

  return (
    <main style={{ width: '100%', height: '100vh' }}>
      {/* <SplashScreen /> */}
      <HeroLayout />
    </main>
  );
}