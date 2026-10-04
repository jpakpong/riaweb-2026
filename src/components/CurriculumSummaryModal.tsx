import React from 'react';
import { X, Printer, Download, Check, ShieldCheck } from 'lucide-react';
import { PROGRAM_INFO, HIGHLIGHTS, ACADEMIC_STAFFS } from '../data/curriculumData';
import { BUULogo } from './BUULogo';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header Actions */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#274c77]" />
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              เอกสารสรุปสาระสำคัญหลักสูตร พ.ศ. 2569
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>พิมพ์เอกสาร</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-800 font-prompt">
          {/* Document Header */}
          <div className="border-b border-slate-200 pb-5 text-center space-y-1.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              {PROGRAM_INFO.programNameTh}
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              {PROGRAM_INFO.programNameEn}
            </p>
            <p className="text-xs text-[#0066B3] font-semibold">
              ภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา
            </p>
          </div>

          {/* Key Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl text-xs">
            <div>
              <span className="text-slate-500 block text-[11px]">ชื่อปริญญา (ไทย):</span>
              <span className="font-bold text-slate-900">{PROGRAM_INFO.degreeAbbrTh}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">ชื่อปริญญา (อังกฤษ):</span>
              <span className="font-bold text-slate-900">{PROGRAM_INFO.degreeAbbrEn}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">จำนวนหน่วยกิตรวม:</span>
              <span className="font-bold text-blue-800">ไม่น้อยกว่า 123 หน่วยกิต</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">ระยะเวลาการศึกษา:</span>
              <span className="font-bold text-slate-900">4 ปี (ระบบทวิภาค)</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">สถานภาพการเปิดสอน:</span>
              <span className="font-bold text-slate-900">{PROGRAM_INFO.startSemester}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">การรับรองหลักสูตร:</span>
              <span className="font-bold text-slate-900">สภามหาวิทยาลัย (20 ธ.ค. 68)</span>
            </div>
          </div>

          {/* Structure Breakdown */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-xs sm:text-sm">โครงสร้างหน่วยกิตหลักสูตร</h3>
            <ul className="space-y-1.5 text-xs text-slate-700 pl-4 list-disc">
              <li><strong>หมวดวิชาศึกษาทั่วไป:</strong> ไม่น้อยกว่า 24 หน่วยกิต (Module 1-4)</li>
              <li>
                <strong>หมวดวิชาเฉพาะ:</strong> 93 หน่วยกิต
                <ul className="pl-4 list-circle mt-1 space-y-0.5 text-slate-600">
                  <li>วิชาแกนคณิตศาสตร์และพื้นฐานวิศวกรรม: 28 หน่วยกิต</li>
                  <li>วิชาเอกบังคับ (หุ่นยนต์, PLC, AI): 36 หน่วยกิต</li>
                  <li>โครงงานบูรณาการ 3 ระดับ และ สหกิจศึกษา (CWIE): 17 หน่วยกิต</li>
                  <li>วิชาเอกเลือกขั้นสูง: 12 หน่วยกิต</li>
                </ul>
              </li>
              <li><strong>หมวดวิชาเลือกเสรี:</strong> ไม่น้อยกว่า 6 หน่วยกิต</li>
            </ul>
          </div>

          {/* Committee List */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-xs sm:text-sm">อาจารย์ผู้รับผิดชอบหลักสูตร</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {ACADEMIC_STAFFS.filter((s) => s.role === 'responsible').map((staff) => (
                <div key={staff.id} className="p-2.5 bg-slate-50 rounded-lg">
                  <p className="font-bold text-slate-900">{staff.nameTh}</p>
                  <p className="text-[11px] text-slate-500">{staff.positionTh}</p>
                  <p className="text-[11px] text-[#274c77] mt-0.5">{staff.degrees[0].degree} ({staff.degrees[0].institution})</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact note */}
          <div className="pt-3 border-t border-slate-200 text-center text-[11px] text-slate-500">
            เอกสารฉบับนี้ใช้สำหรับเผยแพร่ข้อมูลหลักสูตรเบื้องต้นเพื่อการศึกษา · ภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา
          </div>
        </div>
      </div>
    </div>
  );
};
