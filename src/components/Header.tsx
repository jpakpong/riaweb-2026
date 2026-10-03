import React from 'react';
import { Menu, X, Search, FileDown } from 'lucide-react';
import { BUULogo } from './BUULogo';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onOpenSearch: () => void;
  onDownloadSummary: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  mobileMenuOpen,
  onToggleMobileMenu,
  onOpenSearch,
  onDownloadSummary,
}) => {
  const navItems = [
    { id: 'overview', label: 'ภาพรวม' },
    { id: 'curriculum', label: 'หลักสูตร' },
    { id: 'studyplan', label: 'แผนการเรียน' },
    { id: 'staff', label: 'คณาจารย์' },
    { id: 'career', label: 'สายอาชีพ' },
    { id: 'studentlink', label: 'บริการนิสิต' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Zone 1: Single Brand Zone */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectTab('overview')}
              className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#274c77] rounded-md py-1"
              aria-label="หน้าแรกหลักสูตรวิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม มหาวิทยาลัยบูรพา"
            >
              <div>
                <p className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-tight">
                  วิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม
                </p>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  ภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา
                </p>
              </div>
            </button>
          </div>

          {/* Zone 2: 4-6 Nav Links (Single line, text with active state) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#1f385c] bg-[#edf3f8] font-semibold'
                      : 'text-slate-600 hover:text-[#274c77] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-[#274c77] hover:bg-slate-100 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#274c77]"
              title="ค้นหารายวิชาและข้อมูล"
              aria-label="ค้นหารายวิชาและอาจารย์"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={onDownloadSummary}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#274c77] hover:bg-[#1f3d60] rounded-lg transition-colors whitespace-nowrap shadow-xs focus-visible:ring-2 focus-visible:ring-[#274c77]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>สรุปเล่มหลักสูตร</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={onToggleMobileMenu}
              className="lg:hidden p-2 text-slate-700 hover:text-[#274c77] hover:bg-slate-100 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#274c77]"
              aria-label={mobileMenuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
