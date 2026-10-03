import React from 'react';
import { BUULogo } from './BUULogo';
import { PROGRAM_INFO } from '../data/curriculumData';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-sm tracking-tight">
              {PROGRAM_INFO.universityTh}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300 font-medium text-xs">
              {PROGRAM_INFO.facultyTh}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 max-w-md">
            {PROGRAM_INFO.programNameTh} (วศ.บ. หุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม)
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
          <button onClick={() => onSelectTab('overview')} className="hover:text-white transition-colors">
            ภาพรวมหลักสูตร
          </button>
          <span className="text-slate-700">·</span>
          <button onClick={() => onSelectTab('curriculum')} className="hover:text-white transition-colors">
            โครงสร้างรายวิชา
          </button>
          <span className="text-slate-700">·</span>
          <button onClick={() => onSelectTab('studyplan')} className="hover:text-white transition-colors">
            แผนการศึกษา 4 ปี
          </button>
          <span className="text-slate-700">·</span>
          <button onClick={() => onSelectTab('staff')} className="hover:text-white transition-colors">
            คณาจารย์
          </button>
          <span className="text-slate-700">·</span>
          <button onClick={() => onSelectTab('career')} className="hover:text-white transition-colors">
            สายอาชีพ
          </button>
          <span className="text-slate-700">·</span>
          <button onClick={() => onSelectTab('studentlink')} className="hover:text-white transition-colors">
            บริการนิสิต
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
        <div>
          © 2569 {PROGRAM_INFO.facultyTh} {PROGRAM_INFO.universityTh}. สงวนลิขสิทธิ์ทั้งหมด
        </div>
        <div className="flex items-center gap-4">
          <span>169 ถนนลงหาดบางแสน ตำบลแสนสุข อำเภอเมืองชลบุรี จังหวัดชลบุรี 20131</span>
        </div>
      </div>
    </footer>
  );
};
