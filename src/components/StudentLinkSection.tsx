import React, { useState } from 'react';
import {
  STUDENT_SERVICES,
  FAQS,
  PROGRAM_INFO,
} from '../data/curriculumData';
import {
  ExternalLink,
  GraduationCap,
  Laptop,
  BookOpen,
  Wifi,
  FileText,
  Briefcase,
  Users,
  HeartHandshake,
  Calendar,
  HelpCircle,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Building2,
  CheckCircle2
} from 'lucide-react';

export const StudentLinkSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const iconMap: Record<string, React.ElementType> = {
    GraduationCap,
    Laptop,
    BookOpen,
    Wifi,
    FileText,
    Briefcase,
    Users,
    HeartHandshake,
  };

  const filteredLinks = STUDENT_SERVICES.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="space-y-10 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
            <ExternalLink className="w-4 h-4" />
            <span>บริการและสารสนเทศนิสิต</span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
            ศูนย์รวมลิงก์บริการและระบบสารสนเทศนิสิต (Student Portal)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            เข้าถึงระบบทะเบียน BUU REG, ห้องเรียนออนไลน์ LMS, สำนักหอสมุด, แบบฟอร์มคำร้องวิชาการ และศูนย์ประสานงานสหกิจศึกษา คณะวิศวกรรมศาสตร์
          </p>
        </div>

        {/* Filter Categories */}
        <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {[
            { id: 'all', label: 'บริการทั้งหมด' },
            { id: 'academic', label: 'ทะเบียน & สหกิจศึกษา' },
            { id: 'facility', label: 'หอสมุด & สิ่งอำนวยความสะดวก' },
            { id: 'it', label: 'ระบบเครือข่าย & ไอที' },
            { id: 'student-affair', label: 'กิจกรรม & ทุนการศึกษา' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === tab.id
                  ? 'bg-blue-700 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLinks.map((service) => {
          const Icon = iconMap[service.icon] || ExternalLink;
          return (
            <a
              key={service.id}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  {service.titleTh}
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                  {service.titleEn}
                </p>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                  {service.descriptionTh}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-semibold">
                <span>เข้าสู่ระบบบริการ</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Academic Calendar Milestones (From PDF page 7) */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
          <Calendar className="w-4 h-4" />
          <span>รอบการศึกษาและการดำเนินการหลักสูตร</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
          กำหนดช่วงเวลาเปิดภาคการศึกษา (ระบบทวิภาค)
        </h2>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl">
          การจัดการเรียนการสอนในวันและเวลาราชการปกติ ตามประกาศมหาวิทยาลัยบูรพา
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-xs">
          <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
            <span className="text-blue-400 font-bold block mb-1">ภาคการศึกษาต้น</span>
            <h4 className="text-sm font-bold text-white">เดือนกรกฎาคม — พฤศจิกายน</h4>
            <p className="text-slate-400 mt-1.5 leading-relaxed">
              ระยะเวลาศึกษาไม่น้อยกว่า 15 สัปดาห์ การเรียนการสอนภาคปกติประจำภาคเรียนที่ 1
            </p>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
            <span className="text-blue-400 font-bold block mb-1">ภาคการศึกษาปลาย</span>
            <h4 className="text-sm font-bold text-white">เดือนพฤศจิกายน — เมษายน</h4>
            <p className="text-slate-400 mt-1.5 leading-relaxed">
              ระยะเวลาศึกษาไม่น้อยกว่า 15 สัปดาห์ การเรียนการสอนภาคปกติประจำภาคเรียนที่ 2
            </p>
          </div>

          <div className="p-4 bg-blue-900/60 rounded-xl border border-blue-500/40">
            <span className="text-amber-300 font-bold block mb-1">ภาคการศึกษาฤดูร้อน (Summer)</span>
            <h4 className="text-sm font-bold text-white">เดือนเมษายน — มิถุนายน</h4>
            <p className="text-blue-100 mt-1.5 leading-relaxed">
              ระยะเวลาไม่น้อยกว่า 8 สัปดาห์ สำหรับโครงงานบูรณาการ Cornerstone, Keystone, Capstone
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
          <HelpCircle className="w-4 h-4" />
          <span>คำถามที่พบบ่อย</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">
          ข้อสงสัยเกี่ยวกับหลักสูตรและการเข้าศึกษา
        </h2>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isExpanded = expandedFaq === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all ${
                  isExpanded ? 'border-blue-300 bg-blue-50/30' : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : index)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4"
                >
                  <span className="text-sm font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isExpanded ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact & Location Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
              <Building2 className="w-4 h-4" />
              <span>ช่องทางการติดต่อ</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 leading-tight">
              ภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              มหาวิทยาลัยบูรพา (Burapha University)
            </p>

            <div className="mt-5 space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  169 ถนนลงหาดบางแสน ตำบลแสนสุข อำเภอเมืองชลบุรี จังหวัดชลบุรี 20131
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>โทรศัพท์: 0-3810-2222 ต่อ 3300 (สำนักงานคณบดีคณะวิศวกรรมศาสตร์)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>อีเมลหลักสูตร: <a href="mailto:pakpong@eng.buu.ac.th" className="text-blue-700 font-medium hover:underline">pakpong@eng.buu.ac.th</a></span>
              </div>
            </div>
          </div>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-900 block mb-2">
                เวลาทำการสำนักงาน
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                วันจันทร์ - วันศุกร์ เวลา 08:30 - 16:30 น. (เว้นวันหยุดราชการและวันหยุดนักขัตฤกษ์)
              </p>
              <div className="mt-3 text-xs text-slate-600">
                สำหรับนิสิตที่ต้องการปรึกษาการลงทะเบียนเรียนหรือติดต่ออาจารย์ที่ปรึกษา สามารถนัดหมายล่วงหน้าผ่านอีเมลของอาจารย์ผู้รับผิดชอบหลักสูตร
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-xs flex items-center justify-between text-blue-700 font-semibold">
              <a
                href="https://eng.buu.ac.th"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                เว็บไซต์คณะวิศวกรรมศาสตร์ ม.บูรพา <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
