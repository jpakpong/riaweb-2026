/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { OverviewSection } from './components/OverviewSection';
import { CurriculumSection } from './components/CurriculumSection';
import { StudyPlanSection } from './components/StudyPlanSection';
import { AcademicStaffSection } from './components/AcademicStaffSection';
import { CareerPathSection } from './components/CareerPathSection';
import { StudentLinkSection } from './components/StudentLinkSection';
import { SearchModal } from './components/SearchModal';
import { CurriculumSummaryModal } from './components/CurriculumSummaryModal';
import { Footer } from './components/Footer';
import { PROGRAM_INFO } from './data/curriculumData';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [summaryModalOpen, setSummaryModalOpen] = useState<boolean>(false);

  // Scroll to top when changing tab
  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getBreadcrumbTitle = () => {
    switch (currentTab) {
      case 'overview':
        return 'ภาพรวมและจุดเด่นหลักสูตร';
      case 'curriculum':
        return 'โครงสร้างหลักสูตรและรายวิชา';
      case 'studyplan':
        return 'แผนการศึกษา 4 ปี (แผน 1 & 2)';
      case 'staff':
        return 'คณาจารย์ผู้รับผิดชอบหลักสูตร';
      case 'career':
        return 'แนวทางการประกอบอาชีพ';
      case 'studentlink':
        return 'บริการและสารสนเทศนิสิต';
      default:
        return 'หลักสูตรวิศวกรรมหุ่นยนต์ฯ';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F1F8FC] text-slate-800 font-prompt print:bg-white print:min-h-0">
      {/* Main Application Screen (Hidden completely during print) */}
      <div className="flex-1 flex flex-col print:hidden">
        {/* Top Bar Header */}
        <Header
          currentTab={currentTab}
          onSelectTab={handleSelectTab}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
          onOpenSearch={() => setSearchOpen(true)}
          onDownloadSummary={() => setSummaryModalOpen(true)}
        />

        {/* Main Dashboard Layout Container */}
        <div className="flex-1 flex max-w-7xl w-full mx-auto">
          {/* Navigation Sidebar */}
          <Sidebar
            currentTab={currentTab}
            onSelectTab={handleSelectTab}
            mobileOpen={mobileMenuOpen}
            onCloseMobile={() => setMobileMenuOpen(false)}
            totalCredits={PROGRAM_INFO.minCredits}
            onDownloadSummary={() => setSummaryModalOpen(true)}
          />

          {/* Dynamic Content Main Viewport */}
          <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6">
            {/* Breadcrumb Navigation Bar */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-slate-500">
              <button
                onClick={() => handleSelectTab('overview')}
                className="flex items-center gap-1 text-slate-500 hover:text-blue-700 transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>หน้าแรก</span>
              </button>
              <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
              <span className="font-semibold text-blue-900 truncate">
                {getBreadcrumbTitle()}
              </span>
            </nav>

            {/* Tab Views */}
            {currentTab === 'overview' && (
              <OverviewSection
                onNavigateToCurriculum={() => handleSelectTab('curriculum')}
                onNavigateToStudyPlan={() => handleSelectTab('studyplan')}
                onNavigateToStaff={() => handleSelectTab('staff')}
              />
            )}

            {currentTab === 'curriculum' && <CurriculumSection />}

            {currentTab === 'studyplan' && <StudyPlanSection />}

            {currentTab === 'staff' && <AcademicStaffSection />}

            {currentTab === 'career' && <CareerPathSection />}

            {currentTab === 'studentlink' && <StudentLinkSection />}
          </main>
        </div>

        {/* Footer */}
        <Footer onSelectTab={handleSelectTab} />
      </div>

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleSelectTab}
      />

      {/* Curriculum Summary Printable Modal (Prints strictly as 1-Page A4) */}
      <CurriculumSummaryModal
        isOpen={summaryModalOpen}
        onClose={() => setSummaryModalOpen(false)}
      />
    </div>
  );
}
