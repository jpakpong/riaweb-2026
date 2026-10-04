import React, { useState, useMemo } from 'react';
import {
  COURSES,
  CURRICULUM_STRUCTURE,
  Course,
} from '../data/curriculumData';
import { COURSE_DESCRIPTIONS } from '../data/courseDescriptions';
import { formatCredits } from './StudyPlanSection';
import {
  Search,
  Filter,
  BookOpen,
  CheckCircle,
  HelpCircle,
  Layers,
  ChevronRight,
  Info,
  Calculator,
  FileText,
  AlertCircle
} from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filterTabs = [
    { id: 'all', label: 'ทั้งหมด (40+ วิชา)' },
    { id: 'general', label: 'ศึกษาทั่วไป (24 หน่วยกิต)' },
    { id: 'core', label: 'วิชาแกน (28 หน่วยกิต)' },
    { id: 'major-compulsory', label: 'วิชาเอกบังคับ (36 หน่วยกิต)' },
    { id: 'project-cwie', label: 'โครงงาน & CWIE (17 หน่วยกิต)' },
    { id: 'major-elective', label: 'วิชาเอกเลือก (12 หน่วยกิต)' },
  ];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchSearch =
        course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.nameTh.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.nameEn.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory =
        selectedCategory === 'all' || course.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header & Overview Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>โครงสร้างหลักสูตรและรายวิชา</span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
            โครงสร้างหลักสูตรวิศวกรรมศาสตรบัณฑิต (123 หน่วยกิต)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            จัดหมวดหมู่รายวิชาตามเกณฑ์มาตรฐานอุดมศึกษา พ.ศ. 2565 และแนวทางการรับรองปริญญาทางวิศวกรรมศาสตร์ แบ่งออกเป็น 3 หมวดวิชาหลัก พร้อมการเรียนรู้แบบโมดูล
          </p>
        </div>

        {/* 3 Main Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 rounded-xl bg-[#f2f6fa] border border-[#d6e3ef] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0066B3]">หมวดที่ 1</span>
                <span className="text-lg font-bold text-[#0066B3] tabular-nums">24 หน่วยกิต</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">หมวดวิชาศึกษาทั่วไป</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                พัฒนาทักษะภาษาอังกฤษ (6), การคิดแก้ปัญหาในยุคดิจิทัล (6), การจัดการชีวิตในสังคม (6) และความเป็นผู้ประกอบการ (6)
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#d8e4f0] text-[11px] text-[#0066B3] font-medium">
              4 โมดูลพัฒนาทักษะศตวรรษที่ 21
            </div>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-700">หมวดที่ 2</span>
                <span className="text-lg font-bold text-indigo-900 tabular-nums">93 หน่วยกิต</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">หมวดวิชาเฉพาะ</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                วิชาแกนวิศวกรรม (28), เอกบังคับหุ่นยนต์-PLC-AI (36), โครงงาน 4 ขั้นและ CWIE (17), และวิชาเอกเลือกตามความสนใจ (12)
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-indigo-200/60 text-[11px] text-indigo-800 font-medium">
              เน้นปฏิบัติจริงในห้องปฏิบัติการและโรงงาน
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600">หมวดที่ 3</span>
                <span className="text-lg font-bold text-slate-800 tabular-nums">6 หน่วยกิต</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">หมวดวิชาเลือกเสรี</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                เลือกเรียนวิชาใดๆ ที่เปิดสอนในมหาวิทยาลัยบูรพา หรือจากสถาบันอุดมศึกษาอื่นทั้งภายในและต่างประเทศ
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] text-slate-600 font-medium">
              เปิดกว้างตามความสนใจของผู้เรียน
            </div>
          </div>
        </div>
      </div>

      {/* Course Code Meaning Guide (From PDF page 9 & 12) */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">เกณฑ์การอ่านรหัสวิชา 8 หลัก: </span>
            <span className="text-slate-600">
              เลข 3 หลักแรก = รหัสส่วนงาน/ภาควิชา (เช่น <code className="bg-white px-1 py-0.5 rounded border border-slate-200 text-blue-700 font-mono">513</code> = วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ, <code className="bg-white px-1 py-0.5 rounded border border-slate-200 text-blue-700 font-mono">503</code> = วิศวกรรมเครื่องกล) · 
              เลขหลักที่ 4-6 = ลำดับโมดูล (100 = พื้นฐาน, 200 = หุ่นยนต์, 300 = ระบบอัตโนมัติ, 400 = AI, 500 = วิชาเลือก, 600 = โครงงาน/สหกิจ) · 
              เลข 2 หลักท้าย <code className="bg-white px-1 py-0.5 rounded border border-slate-200 text-blue-700 font-mono">69</code> = ปี พ.ศ. ที่ปรับปรุง/สร้างหลักสูตร
            </span>
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="ค้นหาด้วยรหัสวิชา เช่น 51310169, หรือชื่อวิชา เช่น PLC, ปัญญาประดิษฐ์, หุ่นยนต์..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ล้างคำค้น
              </button>
            )}
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === tab.id
                  ? 'bg-[#0066B3] text-white shadow-2xs font-semibold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Courses List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.code}
              onClick={() => setSelectedCourse(course)}
              className="p-4 bg-white rounded-xl border border-slate-200/80 hover:border-[#1689D4] hover:shadow-2xs transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#0066B3] bg-[#F1F8FC] px-2 py-0.5 rounded-md border border-[#d6e3ef]">
                      {course.code}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {course.module}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-800 shrink-0">
                    {formatCredits(course.credits, course.format, course.category)}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mt-2 group-hover:text-[#0066B3] transition-colors leading-snug">
                  {course.nameTh}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium leading-tight">
                  {course.nameEn}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">
                  {course.category === 'core'
                    ? 'วิชาแกนวิศวกรรม'
                    : course.category === 'major-compulsory'
                    ? 'วิชาเอกบังคับ'
                    : course.category === 'project-cwie'
                    ? 'โครงงาน / สหกิจศึกษา'
                    : course.category === 'major-elective'
                    ? 'วิชาเอกเลือก'
                    : 'วิชาศึกษาทั่วไป'}
                </span>
                <span className="text-[#0066B3] font-semibold text-[11px] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  ดูรายละเอียด <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-white rounded-xl border border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">ไม่พบรายวิชาที่ตรงกับคำค้น</p>
            <p className="text-xs text-slate-400 mt-1">ลองเปลี่ยนคำค้นหา หรือเลือกหมวดหมู่อื่น</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-blue-600 font-semibold hover:underline"
            >
              รีเซ็ตตัวกรองทั้งหมด
            </button>
          </div>
        )}
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (() => {
        const detail = COURSE_DESCRIPTIONS[selectedCourse.code];
        const descTh = detail?.descriptionTh || selectedCourse.descriptionTh || 'อยู่ระหว่างการปรับปรุงข้อมูลคำอธิบายรายวิชา';
        const descEn = detail?.descriptionEn || selectedCourse.descriptionEn || 'Course description is being updated.';
        const prereqTh = detail?.prerequisiteTh;
        const prereqEn = detail?.prerequisiteEn;

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-7 shadow-xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                    {selectedCourse.code}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
                    {selectedCourse.nameTh}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {selectedCourse.nameEn}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 text-sm font-bold shrink-0"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-4 text-xs sm:text-sm">
                {/* Credit and Format stats */}
                <div className="grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl">
                  <div>
                    <span className="text-slate-400 block text-[11px]">
                      {selectedCourse.category === 'general' || selectedCourse.category === 'free-elective' ? 'จำนวนหน่วยกิต' : 'หน่วยกิต (บรรยาย-ปฏิบัติ-ค้นคว้า)'}
                    </span>
                    <span className="font-bold text-[#0066B3] text-sm sm:text-base font-mono">
                      {formatCredits(selectedCourse.credits, selectedCourse.format, selectedCourse.category)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">หมวดวิชา</span>
                    <span className="font-semibold text-slate-900 text-xs sm:text-sm mt-0.5 block">
                      {selectedCourse.category === 'core'
                        ? 'วิชาแกนวิศวกรรม'
                        : selectedCourse.category === 'major-compulsory'
                        ? 'วิชาเอกบังคับ'
                        : selectedCourse.category === 'project-cwie'
                        ? 'โครงงาน / สหกิจศึกษา'
                        : selectedCourse.category === 'major-elective'
                        ? 'วิชาเอกเลือก'
                        : 'วิชาศึกษาทั่วไป'}
                    </span>
                  </div>
                </div>

                {/* Prerequisite if any */}
                {(prereqTh || prereqEn) && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-amber-900">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>บุรพวิชาที่ต้องเรียนผ่านมาก่อน (Prerequisite)</span>
                    </div>
                    {prereqTh && <p className="text-amber-800 pl-5">{prereqTh}</p>}
                    {prereqEn && <p className="text-amber-700 pl-5 text-[11px] font-mono">{prereqEn}</p>}
                  </div>
                )}

                {/* Module badge */}
                <div>
                  <span className="text-slate-500 font-semibold block text-xs mb-1">หมวดหมู่และโมดูล</span>
                  <div className="text-blue-900 bg-blue-50/70 p-2.5 rounded-lg border border-blue-100 text-xs font-medium">
                    {selectedCourse.module || 'วิชาในหลักสูตร'}
                  </div>
                </div>

                {/* Thai Description */}
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs sm:text-sm mb-1.5 text-blue-900">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>คำอธิบายรายวิชา (ภาษาไทย)</span>
                  </h4>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    {descTh}
                  </div>
                </div>

                {/* English Description */}
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs sm:text-sm mb-1.5 text-slate-700">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span>Course Description (English)</span>
                  </h4>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {descEn}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-5 py-2 bg-[#0066B3] hover:bg-[#004e8a] text-white font-medium rounded-lg text-xs transition-colors cursor-pointer"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
