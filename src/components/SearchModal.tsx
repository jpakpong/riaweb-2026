import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Users, Briefcase, ChevronRight } from 'lucide-react';
import { COURSES, ACADEMIC_STAFFS, CAREER_PATHS } from '../data/curriculumData';
import { formatCredits } from './StudyPlanSection';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return { courses: [], staffs: [], careers: [] };
    const q = query.toLowerCase();

    const courses = COURSES.filter(
      (c) =>
        c.code.toLowerCase().includes(q) ||
        c.nameTh.toLowerCase().includes(q) ||
        c.nameEn.toLowerCase().includes(q)
    ).slice(0, 5);

    const staffs = ACADEMIC_STAFFS.filter(
      (s) =>
        s.nameTh.toLowerCase().includes(q) ||
        s.nameEn.toLowerCase().includes(q) ||
        s.expertise.some((e) => e.toLowerCase().includes(q))
    ).slice(0, 4);

    const careers = CAREER_PATHS.filter(
      (c) =>
        c.titleTh.toLowerCase().includes(q) ||
        c.titleEn.toLowerCase().includes(q) ||
        c.skills.some((sk) => sk.toLowerCase().includes(q))
    ).slice(0, 3);

    return { courses, staffs, careers };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search input header */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#274c77] shrink-0" />
          <input
            type="text"
            placeholder="ค้นหา เช่น PLC, ปัญญาประดิษฐ์, ดร.ภัคพงศ์, สหกิจศึกษา, หุ่นยนต์..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 text-xs px-2 py-1 rounded bg-slate-100"
            >
              ล้าง
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 text-sm font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query.trim() ? (
            <div className="py-8 text-center text-xs text-slate-400">
              พิมพ์คำค้นหาเพื่อค้นหารายวิชา คณาจารย์ หรือสายอาชีพในหลักสูตร
            </div>
          ) : (
            <>
              {/* Courses */}
              {results.courses.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#274c77]" />
                    <span>รายวิชา ({results.courses.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.courses.map((course) => (
                      <div
                        key={course.code}
                        onClick={() => {
                          onNavigate('curriculum');
                          onClose();
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-100 cursor-pointer flex items-center justify-between text-xs transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-[#274c77]">{course.code}</span>
                            <span className="font-semibold text-slate-900">{course.nameTh}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">{course.nameEn}</p>
                        </div>
                        <span className="font-mono text-slate-600 text-[11px] shrink-0 font-medium">
                          {formatCredits(course.credits, course.format)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Staffs */}
              {results.staffs.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <Users className="w-3.5 h-3.5 text-[#274c77]" />
                    <span>คณาจารย์ ({results.staffs.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.staffs.map((staff) => (
                      <div
                        key={staff.id}
                        onClick={() => {
                          onNavigate('staff');
                          onClose();
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-100 cursor-pointer flex items-center justify-between text-xs transition-colors"
                      >
                        <div>
                          <p className="font-semibold text-slate-900">{staff.nameTh}</p>
                          <p className="text-[11px] text-slate-500">{staff.positionTh}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Careers */}
              {results.careers.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#274c77]" />
                    <span>เส้นทางอาชีพ ({results.careers.length})</span>
                  </div>
                  <div className="space-y-1">
                    {results.careers.map((career) => (
                      <div
                        key={career.id}
                        onClick={() => {
                          onNavigate('career');
                          onClose();
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-100 cursor-pointer flex items-center justify-between text-xs transition-colors"
                      >
                        <div>
                          <p className="font-semibold text-slate-900">{career.titleTh}</p>
                          <p className="text-[11px] text-slate-500">{career.titleEn}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results.courses.length === 0 &&
                results.staffs.length === 0 &&
                results.careers.length === 0 && (
                  <div className="py-8 text-center text-xs text-slate-500">
                    ไม่พบข้อมูลที่ตรงกับ &ldquo;{query}&rdquo;
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
