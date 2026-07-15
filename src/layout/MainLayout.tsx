import type { ReactNode } from "react";
import SynthwaveBackground from "../components/background/SynthwaveBackground";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen text-white bg-synth-void font-sans antialiased selection:bg-synth-secondary selection:text-synth-deep">
        <SynthwaveBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
