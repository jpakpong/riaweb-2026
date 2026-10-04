import React, { useState, useMemo } from 'react';
import {
  STUDY_PLAN_1,
  STUDY_PLAN_2,
  StudyPlanSemester,
} from '../data/curriculumData';
import {
  Calendar,
  Search,
  X,
  Info,
  BookOpen
} from 'lucide-react';

// Format credits cleanly e.g. "3 (3-0-6)" without duplicate credit numbers
// For general education and free-elective, requirement 6: do not use parentheses (e.g. 2, 3)
export const formatCredits = (credits: number, format?: string, category?: string): string => {
  if (
    category === 'general' ||
    category === 'free-elective' ||
    (category && (category.includes('ศึกษาทั่วไป') || category.includes('เสรี')))
  ) {
    return `${credits}`;
  }
  if (!format) return `${credits}`;
  const trimmed = format.trim();
  // If format already has no parentheses e.g. "3" or "2"
  if (/^\d+$/.test(trimmed)) {
    return trimmed;
  }
  // If format already starts with digit(s) e.g. "3 (3-0-6)" or "2 (1-2-3)"
  if (/^\d+\s*\(/.test(trimmed)) {
    return trimmed;
  }
  // If format is like "(3-0-6)"
  if (trimmed.startsWith('(')) {
    return `${credits} ${trimmed}`;
  }
  return `${credits} (${trimmed})`;
};

export const StudyPlanSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'plan1' | 'plan2'>('plan1');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const currentPlan = selectedPlan === 'plan1' ? STUDY_PLAN_1 : STUDY_PLAN_2;

  // Filter semesters by year
  const filteredSemesters = useMemo(() => {
    return currentPlan.filter((sem) => {
      if (selectedYear === 'all') return true;
      return sem.year === selectedYear;
    });
  }, [currentPlan, selectedYear]);

  // Search filtering/matching logic
  const searchResultsCount = useMemo(() => {
    if (!searchTerm.trim()) return 0;
    const q = searchTerm.toLowerCase().trim();
    let count = 0;
    filteredSemesters.forEach((sem) => {
      sem.courses.forEach((c) => {
        if (
          c.code.toLowerCase().includes(q) ||
          c.nameTh.toLowerCase().includes(q) ||
          c.nameEn.toLowerCase().includes(q) ||
          c.categoryTh.toLowerCase().includes(q)
        ) {
          count++;
        }
      });
    });
    return count;
  }, [filteredSemesters, searchTerm]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0066B3] uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              <span>แผนการจัดการเรียนรู้ 4 ปี</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
              แผนการเรียนตามโครงสร้างหลักสูตร
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              รองรับ 2 รูปแบบการเรียนรู้: แผน 1 (สหกิจศึกษา 1 ภาคเรียน) และ แผน 2 (สหกิจศึกษาตลอดทั้งปี 4)
            </p>
          </div>

          {/* Plan Selector Buttons */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl shrink-0">
            <button
              onClick={() => setSelectedPlan('plan1')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                selectedPlan === 'plan1'
                  ? 'bg-[#0066B3] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              แผน 1: สหกิจศึกษา 1 ภาค
            </button>
            <button
              onClick={() => setSelectedPlan('plan2')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                selectedPlan === 'plan2'
                  ? 'bg-[#0066B3] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              แผน 2: สหกิจศึกษา 2 ภาค
            </button>
          </div>
        </div>

        {/* Plan Feature Summary Card */}
        <div className="mt-6 p-4 rounded-xl bg-[#F1F8FC] border border-[#d6e3ef] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#0066B3] shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            {selectedPlan === 'plan1' ? (
              <p className="text-slate-700">
                <span className="font-bold text-slate-900">จุดเด่นแผน 1: </span>
                นิสิตจะได้เลือกเรียนวิชาเอกเลือกขั้นสูง 4 วิชา (12 หน่วยกิต) ในปี 4 ภาคต้น เพื่อเจาะลึกความเชี่ยวชาญเฉพาะทาง (AI Maintenance, AR/VR, Green Mfg) และไปปฏิบัติงานสหกิจศึกษา CWIE ในปี 4 ภาคปลาย (12 หน่วยกิต)
              </p>
            ) : (
              <p className="text-slate-700">
                <span className="font-bold text-slate-900">จุดเด่นแผน 2: </span>
                เหมาะสำหรับนิสิตที่มุ่งเน้นการทำงานจริงในโรงงานอัจฉริยะต่อเนื่อง 1 ปีเต็ม โดยไปปฏิบัติงานสหกิจศึกษาในสถานประกอบการตลอดทั้งปี 4 (สหกิจศึกษา 1 ในภาคต้น 12 นก. และ สหกิจศึกษา 2 ในภาคปลาย 12 นก. รวม 24 หน่วยกิต)
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Course Search in Study Plan */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0066B3] uppercase tracking-wider">
            <Search className="w-4 h-4" />
            <span>ค้นหารายวิชาในแผนการเรียน</span>
          </div>
          {searchTerm && (
            <span className="text-xs text-slate-500">
              พบ {searchResultsCount} รายวิชาที่ตรงกับคำค้น
            </span>
          )}
        </div>

        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="ค้นหารายวิชา เช่น 51310169, PLC, ระบบหุ่นยนต์, แคลคูลัส, ปัญญาประดิษฐ์, Cornerstone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066B3] focus:bg-white transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-md"
              title="ล้างคำค้นหา"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Year Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {[
          { id: 'all', label: 'ทุกชั้นปี (ปี 1 - 4)' },
          { id: 1, label: 'ชั้นปีที่ 1' },
          { id: 2, label: 'ชั้นปีที่ 2' },
          { id: 3, label: 'ชั้นปีที่ 3' },
          { id: 4, label: 'ชั้นปีที่ 4' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedYear(tab.id as number | 'all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              selectedYear === tab.id
                ? 'bg-[#0066B3] text-white shadow-2xs font-bold'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Semesters Cards and Tables */}
      <div className="space-y-6">
        {filteredSemesters.map((sem) => {
          const q = searchTerm.toLowerCase().trim();
          const displayCourses = sem.courses.filter((course) => {
            if (!q) return true;
            return (
              course.code.toLowerCase().includes(q) ||
              course.nameTh.toLowerCase().includes(q) ||
              course.nameEn.toLowerCase().includes(q) ||
              course.categoryTh.toLowerCase().includes(q)
            );
          });

          // If search is active and no courses match in this semester, skip
          if (q && displayCourses.length === 0) {
            return null;
          }

          return (
            <div
              key={sem.termKey}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs"
            >
              {/* Semester Header */}
              <div className="px-5 py-4 bg-slate-50/80 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0066B3]"></span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {sem.termTitle}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">รวมหน่วยกิตภาคเรียนนี้:</span>
                  <span className="text-xs font-bold text-[#0066B3] bg-[#F1F8FC] px-2.5 py-1 rounded-md border border-[#d6e3ef] tabular-nums">
                    {sem.totalCredits} หน่วยกิต
                  </span>
                </div>
              </div>

              {/* Courses Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/40 text-slate-500 font-semibold">
                      <th className="py-2.5 px-4 w-32">รหัสวิชา</th>
                      <th className="py-2.5 px-4">ชื่อรายวิชา (ภาษาไทย / English)</th>
                      <th className="py-2.5 px-4 w-36">หมวดวิชา</th>
                      <th className="py-2.5 px-4 w-36 text-right">หน่วยกิต (บรรยาย-ปฏิบัติ-ค้นคว้า)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {displayCourses.map((course, idx) => {
                      const isHighlighted =
                        q &&
                        (course.code.toLowerCase().includes(q) ||
                          course.nameTh.toLowerCase().includes(q) ||
                          course.nameEn.toLowerCase().includes(q));

                      return (
                        <tr
                          key={idx}
                          className={`transition-colors ${
                            isHighlighted
                              ? 'bg-amber-50/60'
                              : 'hover:bg-slate-50/70'
                          }`}
                        >
                          <td className="py-3 px-4 font-mono font-bold text-[#0066B3]">
                            {course.code}
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-semibold text-slate-900">
                              {course.nameTh}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              {course.nameEn}
                            </div>
                          </td>
                          <td className="py-3 px-4 text-slate-600 text-[11px]">
                            {course.categoryTh}
                          </td>
                          {/* Display as e.g. 3 (3-0-6) without repeating credits twice, or e.g. 2, 3 for GE/Free Elective */}
                          <td className="py-3 px-4 text-right font-mono tabular-nums font-semibold text-slate-800">
                            {formatCredits(course.credits, course.format, course.categoryTh)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}

        {searchTerm && searchResultsCount === 0 && (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            ไม่พบรายวิชาที่ตรงกับคำค้นหา &ldquo;{searchTerm}&rdquo; ในชั้นปีที่เลือก
          </div>
        )}
      </div>
    </div>
  );
};
