import "./globals.css";
import CursorTrail from "@/components/CursorTrail";
import FloatingResume from "@/components/FloatingResume";
import Navbar from "@/components/Navbar";
import StarBackground from "@/components/StarBackground";

export const metadata = {
  title: 'Vivek Singh | Fullstack Architect',
  description: 'Portfolio of a Fullstack Engineer & UI/UX Specialist',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-cyan-500/30">
        <StarBackground />
        <CursorTrail />
        <Navbar />
        <FloatingResume />
        {children}
      </body>
    </html>
  );
}
