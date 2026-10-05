import React, { useState } from 'react';
import {
  ACADEMIC_STAFFS,
  AcademicStaff,
} from '../data/curriculumData';
import {
  Users,
  GraduationCap,
  Mail,
  MapPin,
  ChevronRight,
  Sparkles,
  Award
} from 'lucide-react';

export const AcademicStaffSection: React.FC = () => {
  const [selectedStaff, setSelectedStaff] = useState<AcademicStaff | null>(null);

  // Focus on the 5 responsible curriculum committee professors
  const responsibleStaffs = ACADEMIC_STAFFS.filter((s) => s.role === 'responsible');

  return (
    <div className="space-y-10 pb-12">
      {/* Section Header with Vibrant Official Blue Theme */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0066B3] uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" />
            <span>คณาจารย์ประจำหลักสูตร</span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
            อาจารย์ผู้รับผิดชอบหลักสูตร
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            คณาจารย์ประจำภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา ผู้ทรงคุณวุฒิด้านหุ่นยนต์และระบบอัตโนมัติ สำเร็จการศึกษาจากมหาวิทยาลัยชั้นนำทั้งในและต่างประเทศ
          </p>
        </div>

        {/* Credentials Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-[#F1F8FC] rounded-xl border border-[#d6e3ef]">
            <span className="text-slate-500 block text-[11px]">คณาจารย์ปริญญาเอก</span>
            <span className="font-bold text-[#0066B3] text-sm">100% Ph.D. / วศ.ด.</span>
          </div>
          <div className="p-3 bg-[#F1F8FC] rounded-xl border border-[#d6e3ef]">
            <span className="text-slate-500 block text-[11px]">สำเร็จการศึกษา</span>
            <span className="font-bold text-[#0066B3] text-sm">ในประเทศ, ต่างประเทศ</span>
          </div>
          <div className="p-3 bg-[#F1F8FC] rounded-xl border border-[#d6e3ef]">
            <span className="text-slate-500 block text-[11px]">สัดส่วนอาจารย์ต่อนิสิต</span>
            <span className="font-bold text-[#0066B3] text-sm">ตามเกณฑ์มาตรฐาน สกอ.</span>
          </div>
        </div>
      </div>

      {/* 5 Responsible Committee Members */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0066B3]"></div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              อาจารย์ผู้รับผิดชอบหลักสูตร 5 ท่าน
            </h2>
          </div>
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#0066B3] shrink-0" />
            <span>ที่ทำงาน: อาคารภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {responsibleStaffs.map((staff, idx) => (
            <div
              key={staff.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-[#1689D4] hover:shadow-md transition-all flex flex-col group"
            >
              {/* Photo Area using real portrait photo with robust fallback */}
              <div className="relative h-72 bg-gradient-to-b from-slate-100 to-slate-200/80 overflow-hidden flex items-center justify-center">
                <img
                  src={staff.image}
                  alt={staff.nameTh}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/images/')) {
                      target.src = `/images/${staff.id}.jpg`;
                    }
                  }}
                />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/95 backdrop-blur-xs text-[#0066B3] px-2.5 py-1 rounded-md shadow-2xs border border-slate-200">
                    {idx === 0 ? 'ประธานหลักสูตร' : 'อาจารย์ผู้รับผิดชอบ'}
                  </span>
                </div>
              </div>

              {/* Staff Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0066B3] transition-colors leading-snug">
                    {staff.nameTh}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    {staff.nameEn}
                  </p>
                  <p className="text-xs text-[#0066B3] font-semibold mt-1">
                    {staff.positionTh}
                  </p>

                  {/* Highest Degree */}
                  <div className="mt-3 text-xs text-slate-600 bg-slate-50 rounded-lg p-2.5 border border-slate-100 space-y-0.5">
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      วุฒิการศึกษาสูงสุด
                    </span>
                    <p className="font-semibold text-slate-800">
                      {staff.degrees[0].degree} ({staff.degrees[0].field})
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {staff.degrees[0].institution} {staff.degrees[0].country ? `· ${staff.degrees[0].country}` : ''}
                    </p>
                  </div>

                  {/* Expertise Badges */}
                  <div className="mt-3.5 space-y-1.5">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      ความเชี่ยวชาญทางวิชาการ
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {staff.expertise.map((exp, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-[#005596] bg-[#F1F8FC] px-2 py-0.5 rounded-md border border-[#dce6f0] font-medium"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px] flex items-center gap-1">
                    <Mail className="w-3 h-3 text-slate-400" />
                    {staff.email}
                  </span>
                  <button
                    onClick={() => setSelectedStaff(staff)}
                    className="text-[#0066B3] hover:text-[#004e8a] font-semibold text-[11px] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    ประวัติเต็ม <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staff Profile Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                  <img
                    src={selectedStaff.image}
                    alt={selectedStaff.nameTh}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('/images/')) {
                        target.src = `/images/${selectedStaff.id}.jpg`;
                      }
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {selectedStaff.nameTh}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedStaff.nameEn}
                  </p>
                  <p className="text-xs text-[#0066B3] font-semibold mt-0.5">
                    {selectedStaff.positionTh}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStaff(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-5 space-y-5 text-xs sm:text-sm">
              {/* Education List without any graduation year / พ.ศ. */}
              <div>
                <h4 className="font-bold flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-[#0066B3]">
                  <GraduationCap className="w-4 h-4 text-[#0066B3]" />
                  <span>ประวัติการศึกษา (Education)</span>
                </h4>
                <div className="space-y-2.5 pl-6 border-l-2 border-[#dce6f0]">
                  {selectedStaff.degrees.map((deg, i) => (
                    <div key={i} className="text-xs text-slate-700">
                      <div className="font-bold text-slate-900">
                        {deg.degree} ({deg.field})
                      </div>
                      <div className="text-slate-500">
                        {deg.institution} {deg.country ? `(${deg.country})` : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research & Expertise */}
              <div>
                <h4 className="font-bold flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-[#0066B3]">
                  <Sparkles className="w-4 h-4 text-[#0066B3]" />
                  <span>ความเชี่ยวชาญทางวิชาการ (Areas of Expertise)</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStaff.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="text-xs text-[#005596] bg-[#F1F8FC] px-2.5 py-1 rounded-md border border-[#dce6f0] font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Office & Contact */}
              <div className="p-3.5 bg-slate-50 rounded-xl space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-[#0066B3] shrink-0" />
                  <span>{selectedStaff.office}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-[#0066B3] shrink-0" />
                  <span>{selectedStaff.email}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 text-right">
              <button
                onClick={() => setSelectedStaff(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg text-xs transition-colors cursor-pointer"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
