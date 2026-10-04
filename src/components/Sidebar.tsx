import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Users,
  Briefcase,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Award,
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { PROGRAM_INFO } from '../data/curriculumData';

interface SidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  totalCredits: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  mobileOpen,
  onCloseMobile,
  totalCredits,
}) => {
  const menuItems = [
    {
      id: 'overview',
      labelTh: 'ภาพรวมหลักสูตร',
      labelEn: 'Overview & Highlights',
      icon: LayoutDashboard,
      desc: 'วัตถุประสงค์ PEOs, PLOs และพันธมิตร',
    },
    {
      id: 'curriculum',
      labelTh: 'โครงสร้างและรายวิชา',
      labelEn: 'Curriculum & Courses',
      icon: BookOpen,
      desc: '123 หน่วยกิต หมวดวิชาและโมดูล',
    },
    {
      id: 'studyplan',
      labelTh: 'แผนการศึกษา 4 ปี',
      labelEn: 'Study Plan (Plans 1 & 2)',
      icon: CalendarDays,
      desc: 'ตารางเรียนและแทร็กเกอร์ความก้าวหน้า',
    },
    {
      id: 'staff',
      labelTh: 'คณาจารย์ผู้รับผิดชอบ',
      labelEn: 'Academic Staff',
      icon: Users,
      desc: 'ข้อมูลวุฒิการศึกษาและความเชี่ยวชาญ',
    },
    {
      id: 'career',
      labelTh: 'เส้นทางสายอาชีพ',
      labelEn: 'Career Opportunities',
      icon: Briefcase,
      desc: '6 สายงานตลาดแรงงาน EEC และสากล',
    },
    {
      id: 'studentlink',
      labelTh: 'ลิงก์บริการนิสิต',
      labelEn: 'Student Links & Portal',
      icon: ExternalLink,
      desc: 'BUU REG, LMS, หอสมุด, CWIE',
    },
  ];

  const handleSelect = (id: string) => {
    onSelectTab(id);
    onCloseMobile();
  };

  const content = (
    <div className="flex flex-col h-full bg-white border-r border-slate-200">
      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-5 space-y-1">
        <div className="px-3 pb-2 text-[11px] font-bold text-[#0066B3] uppercase tracking-wider">
          เมนูระบบสารสนเทศ
        </div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`w-full text-left flex items-start gap-3 p-3 rounded-xl transition-all group ${
                isActive
                  ? 'bg-[#0066B3] text-white shadow-xs font-medium'
                  : 'text-slate-700 hover:bg-[#F1F8FC] hover:text-[#0066B3]'
              }`}
            >
              <Icon
                className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${
                  isActive ? 'text-white' : 'text-slate-500 group-hover:text-[#0066B3]'
                }`}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold truncate leading-snug">
                    {item.labelTh}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-white/80 translate-x-0.5' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                </div>
                <p
                  className={`text-[11px] truncate mt-0.5 ${
                    isActive ? 'text-blue-100' : 'text-slate-500'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </button>
          );
        })}

        {/* Highlight Card */}
        <div className="pt-4 px-1">
          <div className="p-3.5 bg-[#F1F8FC] rounded-xl border border-[#d6e3ef]">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0066B3]">
              <ShieldCheck className="w-4 h-4 text-[#0066B3] shrink-0" />
              <span>การรับรองมาตรฐาน</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              ผ่านความเห็นชอบจากสภาวิชาการ (26 พ.ย. 68) และสภามหาวิทยาลัยบูรพา (20 ธ.ค. 68)
            </p>
            <div className="mt-2.5 pt-2 border-t border-[#dce6f0] flex items-center justify-between text-xs">
              <span className="text-slate-500">หน่วยกิตขั้นต่ำ</span>
              <span className="font-bold text-[#0066B3] tabular-nums">123 หน่วยกิต</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="p-3.5 border-t border-slate-100 bg-white">
        <div className="flex items-center gap-2.5 text-slate-600">
          <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
          <div className="text-[11px] leading-tight">
            <p className="font-medium text-slate-700">คณะวิศวกรรมศาสตร์</p>
            <p className="text-slate-400">มหาวิทยาลัยบูรพา ชลบุรี</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Permanent) */}
      <aside className="hidden lg:block w-72 shrink-0 sticky top-16 md:top-18 h-[calc(100vh-4.5rem)] overflow-hidden">
        {content}
      </aside>

      {/* Mobile Drawer (Collapsible) */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
            aria-hidden="true"
          />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl transform transition-transform duration-200">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
