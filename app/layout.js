import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { QuickViewProvider } from "@/lib/QuickViewContext";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import CustomCursor from "@/components/CustomCursor";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import FloatingResume from "@/components/FloatingResume";
import GlobalQuickViewModal from "@/components/GlobalQuickViewModal";

export const metadata = {
  title: 'Vivek Singh | Full-Stack & AI Systems Engineer',
  description: 'Portfolio of Vivek Singh — Full-Stack & AI Systems Engineer specializing in distributed microservices, engineering platforms, and grounded AI architectures.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-cyan-500/30 bg-[#030712] text-foreground">
        <SmoothScrollProvider>
          <QuickViewProvider>
            <ScrollProgressBar />
            <CustomCursor />
            <StarBackground />
            <Navbar />
            <FloatingResume />
            <GlobalQuickViewModal />
            {children}
          </QuickViewProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
