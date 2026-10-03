import React, { useState } from 'react';
import {
  STUDY_PLAN_1,
  STUDY_PLAN_2,
  StudyPlanSemester,
} from '../data/curriculumData';
import {
  Calendar,
  CheckCircle,
  Clock,
  Award,
  Layers,
  Sparkles,
  Info,
  CheckSquare,
  Square,
  RotateCcw
} from 'lucide-react';

export const StudyPlanSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'plan1' | 'plan2'>('plan1');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [completedCourses, setCompletedCourses] = useState<Set<string>>(new Set());

  const currentPlan = selectedPlan === 'plan1' ? STUDY_PLAN_1 : STUDY_PLAN_2;

  const filteredSemesters = currentPlan.filter((sem) => {
    if (selectedYear === 'all') return true;
    return sem.year === selectedYear;
  });

  const toggleCourseCompleted = (courseKey: string) => {
    setCompletedCourses((prev) => {
      const next = new Set(prev);
      if (next.has(courseKey)) {
        next.delete(courseKey);
      } else {
        next.add(courseKey);
      }
      return next;
    });
  };

  // Calculate earned credits from tracked checklist
  const totalEarnedCredits = currentPlan.reduce((acc, sem) => {
    return (
      acc +
      sem.courses.reduce((sAcc, c) => {
        const uniqueKey = `${sem.termKey}-${c.code}`;
        return completedCourses.has(uniqueKey) ? sAcc + c.credits : sAcc;
      }, 0)
    );
  }, 0);

  const completionPercent = Math.min(100, Math.round((totalEarnedCredits / 123) * 100));

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              <span>แผนการจัดการเรียนรู้ 4 ปี</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
              แผนการเรียนตามโครงสร้างหลักสูตร พ.ศ. 2569
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              รองรับ 2 รูปแบบการเรียนรู้: แผน 1 (สหกิจศึกษา 1 ภาคเรียน) และ แผน 2 (สหกิจศึกษาเข้มข้น 2 ภาคเรียนตลอดทั้งปี 4)
            </p>
          </div>

          {/* Plan Selector Buttons */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl shrink-0">
            <button
              onClick={() => setSelectedPlan('plan1')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                selectedPlan === 'plan1'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              แผน 1: สหกิจศึกษา 1 ภาค
            </button>
            <button
              onClick={() => setSelectedPlan('plan2')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                selectedPlan === 'plan2'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              แผน 2: สหกิจศึกษาเข้มข้น 2 ภาค
            </button>
          </div>
        </div>

        {/* Plan Feature Summary Card */}
        <div className="mt-6 p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
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

      {/* Interactive Progress Tracking Widget */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-blue-300">
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              <span>เครื่องมือช่วยวางแผนการเรียนนิสิต (Interactive Credit Tracker)</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white mt-1">
              ติดตามหน่วยกิตสะสมเพื่อสำเร็จการศึกษา
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              คลิกที่ช่องทำเครื่องหมายหน้ารายวิชาด้านล่างเพื่อบันทึกวิชาที่สอบผ่านแล้ว
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-xs text-slate-300">หน่วยกิตสะสม</span>
              <p className="text-xl sm:text-2xl font-bold text-emerald-400 tabular-nums">
                {totalEarnedCredits}{' '}
                <span className="text-xs font-normal text-slate-400">/ 123 นก.</span>
              </p>
            </div>
            {completedCourses.size > 0 && (
              <button
                onClick={() => setCompletedCourses(new Set())}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg text-xs flex items-center gap-1 transition-colors"
                title="รีเซ็ตการเลือกทั้งหมด"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">รีเซ็ต</span>
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-emerald-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>ความก้าวหน้า {completionPercent}%</span>
            <span>เหลืออีก {Math.max(0, 123 - totalEarnedCredits)} หน่วยกิตเพื่อจบการศึกษา</span>
          </div>
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
                ? 'bg-blue-700 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Semesters Cards and Tables */}
      <div className="space-y-6">
        {filteredSemesters.map((sem) => (
          <div
            key={sem.termKey}
            className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs"
          >
            {/* Semester Header */}
            <div className="px-5 py-4 bg-slate-50/80 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {sem.termTitle}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">รวมหน่วยกิตภาคเรียนนี้:</span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60 tabular-nums">
                  {sem.totalCredits} หน่วยกิต
                </span>
              </div>
            </div>

            {/* Courses Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/40 text-slate-500 font-semibold">
                    <th className="py-2.5 px-4 w-10 text-center">ผ่าน</th>
                    <th className="py-2.5 px-3 w-28">รหัสวิชา</th>
                    <th className="py-2.5 px-3">ชื่อรายวิชา (ภาษาไทย / English)</th>
                    <th className="py-2.5 px-3 w-28">หมวดวิชา</th>
                    <th className="py-2.5 px-4 w-24 text-right">หน่วยกิต (บรรยาย-ปฏิบัติ-ค้นคว้า)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sem.courses.map((course, idx) => {
                    const uniqueKey = `${sem.termKey}-${course.code}`;
                    const isChecked = completedCourses.has(uniqueKey);

                    return (
                      <tr
                        key={idx}
                        className={`transition-colors hover:bg-slate-50/70 ${
                          isChecked ? 'bg-emerald-50/30' : ''
                        }`}
                      >
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => toggleCourseCompleted(uniqueKey)}
                            className="text-slate-400 hover:text-emerald-600 transition-colors focus:outline-none"
                            title="ทำเครื่องหมายว่าผ่านวิชานี้แล้ว"
                          >
                            {isChecked ? (
                              <CheckSquare className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-300" />
                            )}
                          </button>
                        </td>
                        <td className="py-3 px-3 font-mono font-bold text-blue-700">
                          {course.code}
                        </td>
                        <td className="py-3 px-3">
                          <div
                            className={`font-semibold text-slate-900 ${
                              isChecked ? 'line-through text-slate-400' : ''
                            }`}
                          >
                            {course.nameTh}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {course.nameEn}
                          </div>
                        </td>
                        <td className="py-3 px-3 text-slate-600 text-[11px]">
                          {course.categoryTh}
                        </td>
                        <td className="py-3 px-4 text-right font-mono tabular-nums">
                          <span className="font-bold text-slate-900">{course.credits}</span>{' '}
                          <span className="text-slate-500 text-[11px]">{course.format}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
