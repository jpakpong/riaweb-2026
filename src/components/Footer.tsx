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
          <p className="text-[11px] text-slate-400 max-w-lg">
            วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม หลักสูตรใหม่ พ.ศ. 2569
          </p>
          <div className="pt-1">
            <a
              href="https://www.facebook.com/profile.php?id=100057879120543"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors font-medium"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>FB : ภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา</span>
            </a>
          </div>
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
            แผนการเรียน
          </button>
          <span className="text-slate-700">·</span>
          <button onClick={() => onSelectTab('staff')} className="hover:text-white transition-colors">
            คณาจารย์
          </button>
          <span className="text-slate-700">·</span>
          <button onClick={() => onSelectTab('career')} className="hover:text-white transition-colors">
            อาชีพ
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
        <div className="flex flex-col sm:items-end gap-0.5 text-right">
          <span>169 ถนนลงหาดบางแสน ตำบลแสนสุข อำเภอเมืองชลบุรี จังหวัดชลบุรี 20131</span>
          <span className="text-slate-400">โทรศัพท์ 0-3810-2222 ต่อ 3352</span>
        </div>
      </div>
    </footer>
  );
};
