"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SystemBoot from "@/components/SystemBoot";
import Hero from "@/components/Hero";
import ChooseMission from "@/components/ChooseMission";
import ChapterStarted from "@/components/ChapterStarted";
import ChapterBuildingSystems from "@/components/ChapterBuildingSystems";
import ChapterBiggerSystems from "@/components/ChapterBiggerSystems";
import ChapterEnterAI from "@/components/ChapterEnterAI";
import EngineeringDNA from "@/components/EngineeringDNA";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ChapterAboutPerson from "@/components/ChapterAboutPerson";
import FieldNotes from "@/components/FieldNotes";
import WorkExperience from "@/components/WorkExperience";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import TheLab from "@/components/TheLab";
import CareerTrajectory from "@/components/CareerTrajectory";
import PostCreditContact from "@/components/PostCreditContact";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import QuickViewModal from "@/components/QuickViewModal";
import PortfolioAIGuide from "@/components/PortfolioAIGuide";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <main className="min-h-screen text-foreground font-sans selection:bg-cyan-500/30 bg-[#030712] relative pb-16 md:pb-0">
      {/* PERSISTENT SYSTEM NAVIGATION HEADER */}
      <Navbar onOpenQuickView={() => setIsQuickViewOpen(true)} />

      {/* CHAPTER 00: HERO SHOWCASE (TOP LANDING) */}
      <Hero onOpenQuickView={() => setIsQuickViewOpen(true)} />

      {/* SYSTEM INITIALIZATION TERMINAL SEQUENCE */}
      <SystemBoot
        onStartStory={() => {
          const el = document.getElementById("mission");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        onSkipIntro={() => {
          const el = document.getElementById("work");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* CHAPTER 01: CHOOSE YOUR MISSION */}
      <ChooseMission />

      {/* CHAPTER 01: WHERE IT STARTED */}
      <ChapterStarted />

      {/* CHAPTER 02: BUILDING REAL SYSTEMS (#work) */}
      <ChapterBuildingSystems />

      {/* CHAPTER 03: WHEN SYSTEMS GOT BIGGER */}
      <ChapterBiggerSystems />

      {/* CHAPTER 04: ENTER AI */}
      <ChapterEnterAI />

      {/* FEATURED PROJECTS SHOWCASE WITH COVER CARDS */}
      <Projects />

      {/* CHAPTER 05: CAREER EXPERIENCE TIMELINE (ELEVATED FOR RECRUITERS) */}
      <WorkExperience />

      {/* CHAPTER 06: THE ENGINEERING DNA & SKILLS ARCHITECTURE */}
      <EngineeringDNA />
      <Skills />

      {/* FIELD NOTES // PROFESSIONAL JOURNAL */}
      <FieldNotes />

      {/* CHAPTER 07: THE PERSON BEHIND THE CODE (#about) */}
      <ChapterAboutPerson />

      {/* WHAT PEOPLE SAY (TESTIMONIALS) */}
      <TestimonialsMarquee />

      {/* CHAPTER 08: THE LAB (EXPERIMENTAL SHOWCASE) */}
      <TheLab />

      {/* CHAPTER 09: THE CAREER TRAJECTORY */}
      <CareerTrajectory />

      {/* BLOGS & ARTICLES */}
      <Blogs />

      {/* CHAPTER 10: POST-CREDIT SCENE & CONTACT */}
      <PostCreditContact />

      {/* FOOTER */}
      <Footer />

      {/* RECRUITER FAST-TRACK QUICK VIEW MODAL */}
      <QuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />

      {/* GROUNDED PORTFOLIO AI GUIDE WIDGET */}
      <PortfolioAIGuide />

      {/* MOBILE APP BOTTOM NAVIGATION SYSTEM */}
      <MobileBottomNav onOpenQuickView={() => setIsQuickViewOpen(true)} />
    </main>
  );
}
