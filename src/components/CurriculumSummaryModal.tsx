import React from 'react';
import {
  X,
  Printer,
  ShieldCheck,
  Award,
  BookOpen,
  Briefcase,
  Users,
  CheckCircle2,
  Phone,
  Globe,
  FileCheck
} from 'lucide-react';
import { PROGRAM_INFO, ACADEMIC_STAFFS } from '../data/curriculumData';

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurriculumSummaryModal: React.FC<SummaryModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-xs print-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-slate-100 rounded-2xl max-w-4xl w-full max-h-[95vh] flex flex-col shadow-2xl border border-slate-300 overflow-hidden print-modal-dialog">
        {/* Modal Action Header - Hidden during print */}
        <div className="p-3 sm:p-4 border-b border-slate-200/90 flex items-center justify-between bg-white print-hide-actions print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0066B3]/10 text-[#0066B3] flex items-center justify-center">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  พรีวิวเอกสารสรุปหลักสูตร (1 หน้า A4)
                </span>
                <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  1 หน้าจบพร้อมพิมพ์
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                จัดรูปแบบกระดาษ A4 หน้าเดียว สำหรับปริ้นหรือบันทึกเป็น PDF
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#0066B3] hover:bg-[#005596] rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-98"
              title="พิมพ์เอกสารออกเป็น PDF 1 หน้า"
            >
              <Printer className="w-4 h-4" />
              <span>พิมพ์ / บันทึก PDF (1 หน้า)</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              title="ปิดหน้าต่าง"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Workspace Preview Canvas */}
        <div className="p-2 sm:p-6 overflow-y-auto flex justify-center bg-slate-200/70 print-preview-container">
          {/* Printable 1-Page A4 Sheet */}
          <div className="print-a4-sheet w-full max-w-[760px] bg-white rounded-lg shadow-lg border border-slate-300/80 p-5 sm:p-7 text-slate-800 font-prompt text-[11px] leading-relaxed flex flex-col justify-between space-y-3.5 print:p-0 print:border-none print:shadow-none print:rounded-none">
            {/* 1. Header Section */}
            <div className="border-b-2 border-[#0066B3] pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066B3] bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                      มหาวิทยาลัยบูรพา · Burapha University
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">
                      คณะวิศวกรรมศาสตร์ · ภาควิชาวิศวกรรมเครื่องกล
                    </span>
                  </div>
                  <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-snug tracking-tight">
                    {PROGRAM_INFO.programNameTh} (หลักสูตรใหม่ พ.ศ. 2569)
                  </h1>
                  <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                    {PROGRAM_INFO.programNameEn}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-block text-[10px] font-bold text-[#0066B3] bg-[#F1F8FC] border border-[#0066B3]/20 px-2 py-1 rounded-md">
                    เอกสารสรุปสาระสำคัญ (1 หน้า)
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Key Facts Strip (4 Columns) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 text-[10.5px]">
              <div>
                <span className="text-slate-500 block text-[9.5px]">ชื่อปริญญา (ไทย/Eng)</span>
                <span className="font-bold text-slate-900 leading-tight block">
                  {PROGRAM_INFO.degreeAbbrTh}
                </span>
                <span className="text-[9.5px] text-slate-500 font-medium">{PROGRAM_INFO.degreeAbbrEn}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[9.5px]">จำนวนหน่วยกิตรวม</span>
                <span className="font-bold text-[#0066B3] leading-tight block">
                  ไม่น้อยกว่า 123 หน่วยกิต
                </span>
                <span className="text-[9.5px] text-slate-500">ระยะเวลา 4 ปี (ทวิภาค)</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[9.5px]">การเปิดรับนิสิต</span>
                <span className="font-bold text-slate-900 leading-tight block">
                  {PROGRAM_INFO.startSemester}
                </span>
                <span className="text-[9.5px] text-emerald-700 font-medium">เปิดรับรุ่นแรก พ.ศ. 2569</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[9.5px]">การรับรองหลักสูตร</span>
                <span className="font-bold text-slate-900 leading-tight block">
                  สภามหาวิทยาลัยบูรพา
                </span>
                <span className="text-[9.5px] text-slate-500">อนุมัติ 20 ธ.ค. 2568</span>
              </div>
            </div>

            {/* 3. Main Content Grid (Two Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Left Column: Structure & Highlights */}
              <div className="space-y-3">
                {/* Credit Structure */}
                <div className="bg-slate-50/70 p-2.5 rounded-lg border border-slate-200/70">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs text-[#0066B3] mb-1.5 pb-1 border-b border-slate-200">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>โครงสร้างหน่วยกิตหลักสูตร (รวม 123 หน่วยกิต)</span>
                  </div>
                  <div className="space-y-1 text-[10.5px]">
                    <div className="flex justify-between items-center text-slate-700 font-medium">
                      <span>1. หมวดวิชาศึกษาทั่วไป (Module 1-4)</span>
                      <span className="font-bold text-slate-900">≥ 24 นก.</span>
                    </div>
                    <div className="text-slate-800 font-semibold pt-0.5">
                      <div className="flex justify-between items-center">
                        <span>2. หมวดวิชาเฉพาะ</span>
                        <span className="font-bold text-slate-900">93 นก.</span>
                      </div>
                      <div className="pl-2 space-y-0.5 text-[9.5px] text-slate-600 font-normal mt-0.5">
                        <div className="flex justify-between">
                          <span>• วิชาแกนคณิตศาสตร์-พื้นฐานวิศวกรรม</span>
                          <span>28 นก.</span>
                        </div>
                        <div className="flex justify-between">
                          <span>• วิชาเอกบังคับ (หุ่นยนต์, PLC, IIoT, AI)</span>
                          <span>36 นก.</span>
                        </div>
                        <div className="flex justify-between text-blue-900 font-medium">
                          <span>• โครงงาน 3 ระดับ & สหกิจศึกษา (CWIE)</span>
                          <span>17 นก.</span>
                        </div>
                        <div className="flex justify-between">
                          <span>• วิชาเอกเลือกขั้นสูง</span>
                          <span>12 นก.</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-slate-700 font-medium pt-0.5">
                      <span>3. หมวดวิชาเลือกเสรี</span>
                      <span className="font-bold text-slate-900">≥ 6 นก.</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-blue-900 mb-1.5 pb-1 border-b border-blue-200/60">
                    <Award className="w-3.5 h-3.5 text-[#0066B3]" />
                    <span>จุดเด่นสำคัญของหลักสูตร</span>
                  </div>
                  <ul className="space-y-1 text-[10px] text-slate-700">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#0066B3] shrink-0 mt-0.5" />
                      <span><strong>บูรณาการ Robot & AI:</strong> ครบวงจรทั้งฮาร์ดแวร์ ซอฟต์แวร์ และระบบอัตโนมัติอุตสาหกรรม</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#0066B3] shrink-0 mt-0.5" />
                      <span><strong>เรียนรู้ร่วม EEC Automation Park:</strong> ศูนย์พัฒนาระบบอัตโนมัติมาตรฐานสากลใน ม.บูรพา</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#0066B3] shrink-0 mt-0.5" />
                      <span><strong>สหกิจศึกษา (CWIE):</strong> บังคับฝึกปฏิบัติงานจริงในสถานประกอบการชั้นนำ 1 ภาคการศึกษาเต็ม</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#0066B3] shrink-0 mt-0.5" />
                      <span><strong>โครงงาน 3 ระดับ:</strong> ฝึกแก้โจทย์จริงภาคอุตสาหกรรมตั้งแต่ชั้นปีที่ 2 ถึงปีที่ 4</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Faculty & Careers */}
              <div className="space-y-3">
                {/* Academic Committee (5 Members) */}
                <div className="bg-slate-50/70 p-2.5 rounded-lg border border-slate-200/70">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-[#0066B3] mb-1.5 pb-1 border-b border-slate-200">
                    <Users className="w-3.5 h-3.5" />
                    <span>คณาจารย์ผู้รับผิดชอบหลักสูตร (5 ท่าน)</span>
                  </div>
                  <div className="space-y-1 text-[10px]">
                    {ACADEMIC_STAFFS.filter((s) => s.role === 'responsible').map((staff, idx) => (
                      <div key={staff.id} className="flex items-start justify-between border-b border-slate-100 last:border-none pb-0.5">
                        <div>
                          <span className="font-bold text-slate-900 block leading-tight">
                            {idx + 1}. {staff.nameTh}
                          </span>
                          <span className="text-[9px] text-slate-500">
                            {staff.degrees[0].degree} ({staff.degrees[0].institution}, {staff.degrees[0].country})
                          </span>
                        </div>
                        <span className="text-[9px] font-semibold text-[#0066B3] shrink-0 ml-1">
                          {idx === 0 ? 'ประธานหลักสูตร' : 'อาจารย์ผู้รับผิดชอบ'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div className="bg-slate-50/70 p-2.5 rounded-lg border border-slate-200/70">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-[#0066B3] mb-1.5 pb-1 border-b border-slate-200">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>แนวทางการประกอบอาชีพหลังสำเร็จการศึกษา</span>
                  </div>
                  <div className="grid grid-cols-1 gap-0.5 text-[9.5px] text-slate-700">
                    <div>• วิศวกรระบบหุ่นยนต์และระบบอัตโนมัติ (Robotics & Automation Engineer)</div>
                    <div>• วิศวกรควบคุมระบบ PLC, SCADA, DCS และ IIoT (Control & IIoT Engineer)</div>
                    <div>• วิศวกรบูรณาการระบบ (System Integrator - SI)</div>
                    <div>• วิศวกรซ่อมบำรุงและปรับปรุงกระบวนการผลิตอัจฉริยะ (Smart Manufacturing)</div>
                    <div>• นักวิจัยและผู้เชี่ยวชาญเทคโนโลยีปัญญาประดิษฐ์ในอุตสาหกรรม (Industrial AI)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Footer & Contact Strip */}
            <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-1 text-[9px] text-slate-500">
              <div className="flex items-center gap-2">
                <span>ภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา</span>
                <span>•</span>
                <span>โทร: 038-102-222 ต่อ 3483</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <span>เว็บคณะ: eng.buu.ac.th</span>
                <span>•</span>
                <span className="text-slate-400">หน้า 1 จาก 1 (Single Page PDF)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
