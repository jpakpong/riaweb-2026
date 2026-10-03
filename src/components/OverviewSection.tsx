import React, { useState } from 'react';
import {
  PROGRAM_INFO,
  HIGHLIGHTS,
  PEOS,
  PLOS,
  INDUSTRY_PARTNERS,
  LAB_FACILITIES,
} from '../data/curriculumData';
import {
  CheckCircle2,
  Cpu,
  GraduationCap,
  Layers,
  Building2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  MonitorCheck,
  Wrench,
  Bot
} from 'lucide-react';

interface OverviewSectionProps {
  onNavigateToCurriculum: () => void;
  onNavigateToStudyPlan: () => void;
  onNavigateToStaff: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  onNavigateToCurriculum,
  onNavigateToStudyPlan,
  onNavigateToStaff,
}) => {
  const [activeFacilityTab, setActiveFacilityTab] = useState<'hardware' | 'software'>('hardware');
  const [expandedPlo, setExpandedPlo] = useState<string | null>('PLO1');

  return (
    <div className="space-y-10 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-lg">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/src/assets/images/hero_robotics_automation_1791031840231.jpg"
            alt="Robotics and Automation Lab"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative px-6 py-10 sm:px-10 sm:py-14 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 backdrop-blur-xs border border-blue-400/30 rounded-md text-blue-200 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>หลักสูตรใหม่ พ.ศ. 2569 · ภาควิชาวิศวกรรมเครื่องกล</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight text-balance">
            หลักสูตรวิศวกรรมศาสตรบัณฑิต
            <span className="block text-blue-300 mt-1 font-semibold">
              สาขาวิชาวิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม
            </span>
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium">
            Bachelor of Engineering Program in Robotics and Industrial Automation Engineering
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
            {PROGRAM_INFO.philosophy}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onNavigateToCurriculum}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>ดูโครงสร้างหลักสูตร (123 หน่วยกิต)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onNavigateToStudyPlan}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg backdrop-blur-xs transition-colors border border-white/20"
            >
              <span>แผนการศึกษา 4 ปี (แผน 1 & 2)</span>
            </button>
            <button
              onClick={onNavigateToStaff}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-blue-200 hover:text-white text-sm font-medium transition-colors"
            >
              <span>คณาจารย์ผู้รับผิดชอบ</span>
            </button>
          </div>
        </div>
      </section>

      {/* Program Summary Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">จำนวนหน่วยกิตรวม</p>
          <p className="text-2xl font-bold text-blue-900 mt-1 tabular-nums">
            {PROGRAM_INFO.minCredits} <span className="text-sm font-normal text-slate-500">หน่วยกิต</span>
          </p>
          <p className="text-xs text-slate-400 mt-0.5">ศึกษาทั่วไป 24 · เฉพาะ 93 · เสรี 6</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">ระยะเวลาหลักสูตร</p>
          <p className="text-2xl font-bold text-blue-900 mt-1 tabular-nums">
            {PROGRAM_INFO.durationYears} <span className="text-sm font-normal text-slate-500">ปี (ระบบทวิภาค)</span>
          </p>
          <p className="text-xs text-slate-400 mt-0.5">2 ภาคปกติ + 3 ภาคฤดูร้อน</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">การเริ่มเปิดสอน</p>
          <p className="text-2xl font-bold text-blue-900 mt-1">
            ภาคต้น 2569
          </p>
          <p className="text-xs text-slate-400 mt-0.5">ผ่านสภามหาวิทยาลัย 20 ธ.ค. 68</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">ชื่อย่อปริญญา</p>
          <p className="text-xl font-bold text-blue-900 mt-1">
            วศ.บ. / B.Eng.
          </p>
          <p className="text-xs text-slate-400 mt-0.5">หุ่นยนต์และระบบอัตโนมัติฯ</p>
        </div>
      </section>

      {/* 5 Distinct Program Highlights */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs">
        <div className="max-w-2xl mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>ลักษณะเด่นของหลักสูตร</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            ความโดดเด่นและจุดเด่นหลักสูตรใหม่ พ.ศ. 2569
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            ออกแบบโดยมุ่งตอบโจทย์การเปลี่ยนแปลงของอุตสาหกรรมยุคใหม่อย่างแท้จริง ทั้งทฤษฎีและการปฏิบัติจริง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/60 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-10">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Special EEC & Career Link card */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-800 text-white flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>ทำเลทองแห่งอุตสาหกรรม</span>
              </div>
              <h3 className="text-sm font-bold text-white leading-snug">
                ศูนย์กลางเขตเศรษฐกิจพิเศษ EEC
              </h3>
              <p className="text-xs text-blue-100 mt-2 leading-relaxed">
                มหาวิทยาลัยบูรพาตั้งอยู่ใจกลางกลุ่มคลัสเตอร์อุตสาหกรรมเป้าหมาย รองรับการฝึกงาน สหกิจศึกษา และการจ้างงานโดยตรง
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-blue-200">
              <span>ชลบุรี - ระยอง - ฉะเชิงเทรา</span>
              <span className="font-semibold text-white">100% Demand</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Design Project Continuum (From PDF Page 3-4) */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>กระบวนการเรียนรู้เชิงออกแบบต่อเนื่อง</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            โครงงานบูรณาการ 4 ระดับ (Cornerstone สู่ CWIE)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Project-based & Work-integrated Learning สะพานเชื่อมระหว่างการเรียนในห้องเรียนกับการปฏิบัติงานจริงในโรงงาน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-blue-400">ปีที่ 1 ฤดูร้อน</span>
              <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">1 หน่วยกิต</span>
            </div>
            <h3 className="text-sm font-bold text-white">Cornerstone Design</h3>
            <p className="text-xs text-slate-300 mt-1 font-medium">โครงงานบูรณาการฐานราก</p>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
              ฝึกระบุปัญหา ออกแบบวงจร เซนเซอร์ ไมโครคอนโทรลเลอร์ และสร้างต้นแบบหุ่นยนต์ขนาดเล็กเป็นทีม
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-blue-400">ปีที่ 2 ฤดูร้อน</span>
              <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">1 หน่วยกิต</span>
            </div>
            <h3 className="text-sm font-bold text-white">Keystone Design</h3>
            <p className="text-xs text-slate-300 mt-1 font-medium">โครงงานบูรณาการเชื่อมโยง</p>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
              ต่อยอดสู่ระบบอัตโนมัติระดับกลาง PLC, มอเตอร์ไฟฟ้า, กลไกอุตสาหกรรม และการเขียนโปรแกรมควบคุม
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-blue-400">ปีที่ 3 ฤดูร้อน</span>
              <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">1 หน่วยกิต</span>
            </div>
            <h3 className="text-sm font-bold text-white">Capstone Design</h3>
            <p className="text-xs text-slate-300 mt-1 font-medium">โครงงานบูรณาการเชี่ยวชาญ</p>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
              จำลองและสร้างระบบอัตโนมัติเต็มรูปแบบ ร่วมกับ AI และ SCADA เพื่อแก้โจทย์ที่มาจากภาคอุตสาหกรรมจริง
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-b from-blue-900/60 to-blue-800/40 border border-blue-500/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-300">ปีที่ 4 (1-2 ภาค)</span>
              <span className="text-[10px] bg-blue-600 px-2 py-0.5 rounded text-white">12-24 หน่วยกิต</span>
            </div>
            <h3 className="text-sm font-bold text-white">CWIE สหกิจศึกษา</h3>
            <p className="text-xs text-blue-200 mt-1 font-medium">ปฏิบัติงานจริงในสถานประกอบการ</p>
            <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
              ร่วมทำโครงการจริงกับวิศวกรโรงงานอัจฉริยะ โรงงานผลิตยานยนต์ หรือบริษัทชั้นนำ พร้อมประเมินสมรรถนะ
            </p>
          </div>
        </div>
      </section>

      {/* PEOs & PLOs Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PEOs */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>วัตถุประสงค์ของหลักสูตร</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
            Program Educational Objectives (PEOs)
          </h2>
          <div className="space-y-3.5">
            {PEOS.map((peo) => (
              <div key={peo.code} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-blue-800 bg-blue-100 px-2 py-0.5 rounded-md">
                    {peo.code}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900">{peo.title}</h3>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{peo.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PLOs Accordion */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>ผลลัพธ์การเรียนรู้ที่คาดหวัง</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
            Program Learning Outcomes (PLOs)
          </h2>
          <div className="space-y-2">
            {PLOS.map((plo) => {
              const isExpanded = expandedPlo === plo.code;
              return (
                <div
                  key={plo.code}
                  className={`rounded-xl border transition-all ${
                    isExpanded ? 'border-blue-300 bg-blue-50/40' : 'border-slate-200 bg-white'
                  }`}
                >
                  <button
                    onClick={() => setExpandedPlo(isExpanded ? null : plo.code)}
                    className="w-full text-left p-3.5 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-md shrink-0 ${
                          isExpanded ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {plo.code}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                        {plo.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isExpanded ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="px-3.5 pb-3.5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-blue-100/60 mt-1">
                      {plo.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities & Learning Resources (From PDF Page 20-21) */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
              <Wrench className="w-4 h-4" />
              <span>ความพร้อมของเครื่องมือและห้องปฏิบัติการ</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              สิ่งสนับสนุนการเรียนรู้ระดับอุตสาหกรรม
            </h2>
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setActiveFacilityTab('hardware')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeFacilityTab === 'hardware'
                  ? 'bg-white text-blue-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ฮาร์ดแวร์และชุดฝึกปฏิบัติ
            </button>
            <button
              onClick={() => setActiveFacilityTab('software')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeFacilityTab === 'software'
                  ? 'bg-white text-blue-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ซอฟต์แวร์และลิขสิทธิ์
            </button>
          </div>
        </div>

        {activeFacilityTab === 'hardware' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LAB_FACILITIES.hardware.map((grp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-4 h-4 text-blue-600" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {grp.category}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {grp.items.map((it, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="text-blue-500 font-bold leading-none mt-1">·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LAB_FACILITIES.software.map((sw, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <MonitorCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{sw.name}</h3>
                  <p className="text-xs text-slate-600 mt-1">{sw.spec}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Industrial Partners (From PDF Page 4) */}
      <section className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 sm:p-8">
        <div className="max-w-2xl mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>เครือข่ายความร่วมมือ</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            องค์กรและภาคอุตสาหกรรมที่ให้การสนับสนุน
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            ร่วมมือกับภาคเอกชนชั้นนำในการพัฒนาหลักสูตร สนับสนุนอุปกรณ์ และรับนิสิตเข้าปฏิบัติงานสหกิจศึกษา
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {INDUSTRY_PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors shadow-2xs"
            >
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                {partner.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {partner.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
