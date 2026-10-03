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
  Upload,
  Check,
  UserCheck
} from 'lucide-react';

export const AcademicStaffSection: React.FC = () => {
  const [selectedStaff, setSelectedStaff] = useState<AcademicStaff | null>(null);
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  const [imgLoadErrors, setImgLoadErrors] = useState<Record<string, boolean>>({});

  // Focus on the 5 responsible curriculum committee professors
  const responsibleStaffs = ACADEMIC_STAFFS.filter((s) => s.role === 'responsible');

  const handleFileUpload = (staffId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotos((prev) => ({ ...prev, [staffId]: url }));
      setImgLoadErrors((prev) => ({ ...prev, [staffId]: false }));
    }
  };

  const getMonogram = (nameTh: string) => {
    // Extract Thai initials (e.g. ภัคพงศ์ -> ภ., ไพบูลย์ -> พ., จิตติ -> จ., ปารีชา -> ป., นัฐพล -> น.)
    const clean = nameTh.replace(/^(ผศ\.ดร\.|ดร\.|ผศ\.|รศ\.|ศ\.)\s*/, '');
    return clean.slice(0, 2);
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Section Header with Soft Muted Blue Theme */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2b4c7e] uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" />
            <span>คณาจารย์ประจำหลักสูตร</span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
            อาจารย์ผู้รับผิดชอบหลักสูตร (Curriculum Committee)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            คณาจารย์ประจำภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา ผู้ทรงคุณวุฒิด้านหุ่นยนต์และระบบอัตโนมัติ สำเร็จการศึกษาจากมหาวิทยาลัยชั้นนำทั้งในและต่างประเทศ
          </p>
        </div>

        {/* Credentials Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-[#f2f6fa] rounded-xl border border-[#d6e3ef]">
            <span className="text-slate-500 block text-[11px]">คณาจารย์ปริญญาเอก</span>
            <span className="font-bold text-[#1f385c] text-sm">100% Ph.D. / วศ.ด.</span>
          </div>
          <div className="p-3 bg-[#f2f6fa] rounded-xl border border-[#d6e3ef]">
            <span className="text-slate-500 block text-[11px]">สำเร็จการศึกษา</span>
            <span className="font-bold text-[#1f385c] text-sm">UK, Australia, Thailand</span>
          </div>
          <div className="p-3 bg-[#f2f6fa] rounded-xl border border-[#d6e3ef]">
            <span className="text-slate-500 block text-[11px]">ที่ทำงาน / ภาควิชา</span>
            <span className="font-bold text-[#1f385c] text-sm">วิศวกรรมเครื่องกล</span>
          </div>
          <div className="p-3 bg-[#f2f6fa] rounded-xl border border-[#d6e3ef]">
            <span className="text-slate-500 block text-[11px]">สัดส่วนอาจารย์ต่อนิสิต</span>
            <span className="font-bold text-[#1f385c] text-sm">ตามเกณฑ์มาตรฐาน สกอ.</span>
          </div>
        </div>
      </div>

      {/* 5 Responsible Committee Members */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#274c77]"></div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              อาจารย์ผู้รับผิดชอบหลักสูตร 5 ท่าน
            </h2>
          </div>
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#274c77] shrink-0" />
            <span>ที่ทำงาน: อาคารภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {responsibleStaffs.map((staff, idx) => {
            const photoSrc = customPhotos[staff.id] || staff.image;
            const hasError = imgLoadErrors[staff.id];

            return (
              <div
                key={staff.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-[#274c77] hover:shadow-md transition-all flex flex-col group"
              >
                {/* Photo Area using attached filename with dignified fallback */}
                <div className="relative h-72 bg-gradient-to-b from-slate-100 to-slate-200/80 overflow-hidden flex items-center justify-center">
                  {!hasError ? (
                    <img
                      src={photoSrc}
                      alt={staff.nameTh}
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                      onError={() => {
                        setImgLoadErrors((prev) => ({ ...prev, [staff.id]: true }));
                      }}
                    />
                  ) : (
                    /* Dignified Academic Portrait Fallback */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#f2f6fa] to-[#e4edf5]">
                      <div className="w-20 h-20 rounded-full bg-[#274c77] text-white flex items-center justify-center text-xl font-bold shadow-sm mb-3">
                        {getMonogram(staff.nameTh)}
                      </div>
                      <span className="text-xs font-bold text-slate-800">{staff.nameTh}</span>
                      <span className="text-[11px] text-slate-500 mt-0.5">{staff.id}.jpg</span>
                      <span className="mt-2 text-[10px] text-slate-600 bg-white/80 px-2 py-0.5 rounded border border-slate-200">
                        ไฟล์แนบ: {staff.id}.jpg
                      </span>
                    </div>
                  )}

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/95 backdrop-blur-xs text-[#1e3a5f] px-2.5 py-1 rounded-md shadow-2xs border border-slate-200">
                      {idx === 0 ? 'ประธานหลักสูตร' : 'อาจารย์ผู้รับผิดชอบ'}
                    </span>
                  </div>

                  {/* Quick Photo Selector for User Testing in Browser */}
                  <div className="absolute bottom-2 right-2 opacity-90 hover:opacity-100 transition-opacity">
                    <label
                      htmlFor={`upload-${staff.id}`}
                      className="cursor-pointer inline-flex items-center gap-1 text-[10px] bg-white/90 hover:bg-white text-slate-700 px-2 py-1 rounded shadow-2xs border border-slate-200 transition-colors"
                      title="เลือกไฟล์รูปจริงจากเครื่อง"
                    >
                      <Upload className="w-3 h-3 text-[#274c77]" />
                      <span>{customPhotos[staff.id] ? 'เปลี่ยนรูป' : staff.id + '.jpg'}</span>
                    </label>
                    <input
                      id={`upload-${staff.id}`}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(staff.id, e)}
                    />
                  </div>
                </div>

                {/* Staff Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#274c77] transition-colors leading-snug">
                      {staff.nameTh}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {staff.nameEn}
                    </p>
                    <p className="text-xs text-[#274c77] font-semibold mt-1">
                      {staff.positionTh}
                    </p>

                    {/* Workplace: อาคารภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ */}
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#274c77] shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight text-slate-700 font-medium">
                          {staff.office}
                        </span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-[#274c77] shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight text-slate-600">
                          {staff.degrees[0].degree} ({staff.degrees[0].field}) - {staff.degrees[0].institution}
                        </span>
                      </div>
                    </div>

                    {/* Expertise Badges */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {staff.expertise.slice(0, 3).map((exp, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-[#1e3a5f] bg-[#f2f6fa] px-2 py-0.5 rounded-md border border-[#dce6f0] font-medium"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px] flex items-center gap-1">
                      <Mail className="w-3 h-3 text-slate-400" />
                      {staff.email}
                    </span>
                    <button
                      onClick={() => setSelectedStaff(staff)}
                      className="text-[#274c77] hover:text-[#1c3858] font-semibold text-[11px] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      ประวัติเต็ม <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Staff Profile Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200 flex items-center justify-center">
                  {!imgLoadErrors[selectedStaff.id] ? (
                    <img
                      src={customPhotos[selectedStaff.id] || selectedStaff.image}
                      alt={selectedStaff.nameTh}
                      className="w-full h-full object-cover"
                      onError={() => {
                        setImgLoadErrors((prev) => ({ ...prev, [selectedStaff.id]: true }));
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#274c77] text-white flex items-center justify-center font-bold text-base">
                      {getMonogram(selectedStaff.nameTh)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {selectedStaff.nameTh}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedStaff.nameEn}
                  </p>
                  <p className="text-xs text-[#274c77] font-semibold mt-0.5">
                    {selectedStaff.positionTh}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStaff(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="py-5 space-y-5 text-xs sm:text-sm">
              {/* Education List without any graduation year / พ.ศ. */}
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-[#1e3a5f]">
                  <GraduationCap className="w-4 h-4 text-[#274c77]" />
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
                <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-[#1e3a5f]">
                  <Sparkles className="w-4 h-4 text-[#274c77]" />
                  <span>ความเชี่ยวชาญทางวิชาการ (Areas of Expertise)</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStaff.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="text-xs text-[#1e3a5f] bg-[#f2f6fa] px-2.5 py-1 rounded-md border border-[#dce6f0] font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Office & Contact */}
              <div className="p-3.5 bg-slate-50 rounded-xl space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-[#274c77] shrink-0" />
                  <span>อีเมล: <a href={`mailto:${selectedStaff.email}`} className="text-[#274c77] font-medium hover:underline">{selectedStaff.email}</a></span>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-[#274c77] shrink-0 mt-0.5" />
                  <span>ที่ทำงาน: {selectedStaff.office}</span>
                </div>
                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>ชื่อไฟล์รูปภาพ: {selectedStaff.id}.jpg</span>
                  <label
                    htmlFor={`modal-upload-${selectedStaff.id}`}
                    className="cursor-pointer inline-flex items-center gap-1 text-[#274c77] font-semibold hover:underline"
                  >
                    <Upload className="w-3 h-3" />
                    <span>เลือกรูปภาพจากเครื่อง</span>
                  </label>
                  <input
                    id={`modal-upload-${selectedStaff.id}`}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload(selectedStaff.id, e)}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedStaff(null)}
                className="px-4 py-2 bg-slate-900 text-white font-medium rounded-lg text-xs hover:bg-slate-800 transition-colors"
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
