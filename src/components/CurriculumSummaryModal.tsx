import React from 'react';
import {
  X,
  Printer,
  BookOpen,
  Briefcase,
  Award,
  Users,
  CheckCircle2,
  FileCheck,
  Building2,
  Phone,
  Globe,
  Mail
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

  const responsibleStaffs = ACADEMIC_STAFFS.filter((s) => s.role === 'responsible');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-xs print-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-slate-100 rounded-2xl max-w-3xl w-full max-h-[96vh] flex flex-col shadow-2xl border border-slate-300 overflow-hidden print-modal-dialog">
        {/* Modal Action Header - Hidden during print */}
        <div className="p-3 sm:p-4 border-b border-slate-200/90 flex items-center justify-between bg-white print-hide-actions print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0066B3]/10 text-[#0066B3] flex items-center justify-center">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  พรีวิวเอกสารสรุปหลักสูตร (A4 แนวตั้ง)
                </span>
                <span className="text-[10px] font-semibold bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full">
                  A4 Portrait • 1 หน้าจบ
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                เรียงข้อมูลสำคัญ 6 ส่วนเป็นแนวตั้งจากบนลงล่าง พร้อมพิมพ์เป็น PDF 1 หน้า
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0066B3] hover:bg-[#005596] rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-98"
              title="พิมพ์ / บันทึก PDF"
            >
              <Printer className="w-4 h-4" />
              <span>พิมพ์ / บันทึก PDF</span>
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
          {/* Printable 1-Page A4 Sheet (Portrait Orientation) */}
          <div className="print-a4-sheet w-full max-w-[720px] bg-white rounded-lg shadow-lg border border-slate-300 p-5 sm:p-6 text-slate-800 font-prompt text-[10px] leading-snug flex flex-col justify-between space-y-2.5 print:p-0 print:border-none print:shadow-none print:rounded-none">
            
            {/* 1. ส่วนหัวเรื่องหลักสูตร */}
            <div className="border-b-2 border-[#0066B3] pb-2 text-center">
              <div className="flex items-center justify-center gap-2 mb-0.5">
                <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#0066B3] bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
                  มหาวิทยาลัยบูรพา · Burapha University
                </span>
                <span className="text-[9.5px] font-semibold text-slate-600">
                  คณะวิศวกรรมศาสตร์ · ภาควิชาวิศวกรรมเครื่องกล
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-slate-900 leading-snug tracking-tight mt-1">
                {PROGRAM_INFO.programNameTh} (หลักสูตรใหม่ พ.ศ. 2569)
              </h1>
              <p className="text-[10px] font-medium text-slate-500 mt-0.5">
                {PROGRAM_INFO.programNameEn}
              </p>
            </div>

            {/* 2. ส่วนย่อยชื่อปริญญา - หน่วยกิต - การเปิดรับรุ่นแรก - การรับรอง */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200 text-[9.5px]">
              <div>
                <span className="text-slate-500 block text-[8.5px] font-medium">ชื่อปริญญา (ไทย / อังกฤษ)</span>
                <span className="font-bold text-slate-900 leading-tight block">
                  {PROGRAM_INFO.degreeAbbrTh}
                </span>
                <span className="text-[8.5px] text-slate-500 font-medium">{PROGRAM_INFO.degreeAbbrEn}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[8.5px] font-medium">จำนวนหน่วยกิตรวม</span>
                <span className="font-bold text-[#0066B3] leading-tight block">
                  ไม่น้อยกว่า 123 หน่วยกิต
                </span>
                <span className="text-[8.5px] text-slate-500">ระยะเวลาศึกษา 4 ปี (ระบบทวิภาค)</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[8.5px] font-medium">การเปิดรับรุ่นแรก</span>
                <span className="font-bold text-slate-900 leading-tight block">
                  {PROGRAM_INFO.startSemester}
                </span>
                <span className="text-[8.5px] text-emerald-700 font-medium">เปิดรับนิสิตรุ่นแรก ปีการศึกษา 2569</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[8.5px] font-medium">การรับรองหลักสูตร</span>
                <span className="font-bold text-slate-900 leading-tight block">
                  สภามหาวิทยาลัยบูรพา
                </span>
                <span className="text-[8.5px] text-slate-500">อนุมัติ 20 ธ.ค. 2568 (สภาวิชาการ 26 พ.ย. 68)</span>
              </div>
            </div>

            {/* 3. โครงสร้างหลักสูตร */}
            <div className="bg-slate-50/80 p-2.5 rounded-lg border border-slate-200">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[10.5px] text-[#0066B3] mb-1.5 pb-1 border-b border-slate-200">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span>โครงสร้างหลักสูตร (รวม 123 หน่วยกิต)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[9px]">
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>1. วิชาศึกษาทั่วไป</span>
                    <span className="text-[#0066B3]">≥ 24 นก.</span>
                  </div>
                  <p className="text-[8.5px] text-slate-500 mt-0.5">
                    Module 1-4 พัฒนาทักษะศตวรรษที่ 21 (ภาษา, ดิจิทัล, ผู้ประกอบการ)
                  </p>
                </div>
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>2. วิชาเฉพาะ</span>
                    <span className="text-[#0066B3]">93 นก.</span>
                  </div>
                  <div className="text-[8.5px] text-slate-600 mt-0.5 space-y-0.5">
                    <div>• แกนวิศวกรรม: 28 นก. | เอกบังคับ: 36 นก.</div>
                    <div>• โครงงาน 3 ระดับ & CWIE: 17 นก. | เอกเลือก: 12 นก.</div>
                  </div>
                </div>
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>3. วิชาเลือกเสรี</span>
                    <span className="text-[#0066B3]">≥ 6 นก.</span>
                  </div>
                  <p className="text-[8.5px] text-slate-500 mt-0.5">
                    เลือกเรียนรายวิชาตามความสนใจข้ามศาสตร์ในมหาวิทยาลัยบูรพา
                  </p>
                </div>
              </div>
            </div>

            {/* 4. จุดเด่นสำคัญ */}
            <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100">
              <div className="flex items-center gap-1.5 font-bold text-blue-900 text-[10.5px] mb-1.5 pb-1 border-b border-blue-200/60">
                <Award className="w-3.5 h-3.5 text-[#0066B3] shrink-0" />
                <span>จุดเด่นสำคัญ</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[9px] text-slate-700">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#0066B3] shrink-0 mt-0.5" />
                  <span><strong>บูรณาการ Robot & AI:</strong> ครบวงจรฮาร์ดแวร์ ซอฟต์แวร์ และระบบอัตโนมัติอุตสาหกรรม</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#0066B3] shrink-0 mt-0.5" />
                  <span><strong>ร่วมมือกับ EEC Automation Park:</strong> ศูนย์พัฒนาระบบอัตโนมัติมาตรฐานสากลใน ม.บูรพา</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#0066B3] shrink-0 mt-0.5" />
                  <span><strong>สหกิจศึกษา (CWIE):</strong> บังคับฝึกปฏิบัติงานจริงในสถานประกอบการชั้นนำ 1 ภาคการศึกษา</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#0066B3] shrink-0 mt-0.5" />
                  <span><strong>โครงงาน Capstone 3 ระดับ:</strong> ฝึกแก้ไขโจทย์ปัญหาจริงจากภาคอุตสาหกรรมตั้งแต่ปี 2 ถึงปี 4</span>
                </div>
              </div>
            </div>

            {/* 5. สรุปเส้นทางอาชีพ */}
            <div className="bg-slate-50/80 p-2.5 rounded-lg border border-slate-200">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[10.5px] text-[#0066B3] mb-1.5 pb-1 border-b border-slate-200">
                <Briefcase className="w-3.5 h-3.5 shrink-0" />
                <span>สรุปเส้นทางอาชีพ</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[8.5px] text-slate-700">
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900 block">วิศวกรระบบหุ่นยนต์และระบบอัตโนมัติ</strong>
                  <span className="text-slate-500">Robotics & Automation Engineer</span>
                </div>
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900 block">วิศวกรควบคุม PLC, SCADA, DCS & IIoT</strong>
                  <span className="text-slate-500">Control & IIoT Specialist</span>
                </div>
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900 block">วิศวกรบูรณาการระบบ (SI)</strong>
                  <span className="text-slate-500">System Integrator Engineer</span>
                </div>
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900 block">วิศวกรโรงงานอัจฉริยะ (Smart Factory)</strong>
                  <span className="text-slate-500">Smart Manufacturing Engineer</span>
                </div>
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900 block">ผู้เชี่ยวชาญ AI ในงานอุตสาหกรรม</strong>
                  <span className="text-slate-500">Industrial AI Specialist</span>
                </div>
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900 block">วิศวกรซ่อมบำรุงและปรับปรุงระบบ</strong>
                  <span className="text-slate-500">Maintenance & Reliability Engineer</span>
                </div>
              </div>
            </div>

            {/* 6. รายชื่อคณาจารย์ */}
            <div className="bg-slate-50/80 p-2.5 rounded-lg border border-slate-200">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[10.5px] text-[#0066B3] mb-1.5 pb-1 border-b border-slate-200">
                <Users className="w-3.5 h-3.5 shrink-0" />
                <span>รายชื่อคณาจารย์</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[8.5px]">
                {responsibleStaffs.map((staff, idx) => (
                  <div key={staff.id} className="p-1.5 bg-white rounded border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 block">
                        {staff.nameTh}
                      </span>
                      <span className="text-slate-500 text-[8px]">
                        {staff.degrees[0].degree} ({staff.degrees[0].institution}, {staff.degrees[0].country})
                      </span>
                    </div>
                    <span className="text-[8px] font-semibold text-[#0066B3] bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100 shrink-0 ml-1">
                      {idx === 0 ? 'ประธานหลักสูตร' : 'อาจารย์ผู้รับผิดชอบ'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ท้ายตารางล่างสุด: มีชื่อภาควิชา คณะ มหาวิทยาลัย โทร และ eng.buu.ac.th */}
            <div className="pt-2 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[9px] text-slate-600 bg-slate-50 p-2 rounded-md border border-slate-200/80">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <Building2 className="w-3.5 h-3.5 text-[#0066B3] shrink-0" />
                <span>ภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#0066B3] shrink-0" />
                  <span>โทรศัพท์ 0-3810-2222 ต่อ 3352</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="w-3 h-3 text-[#0066B3] shrink-0" />
                  <span className="font-medium text-[#0066B3]">eng.buu.ac.th</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#0066B3] shrink-0" />
                  <span>pakpong@eng.buu.ac.th</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
