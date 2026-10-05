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
  onOpenSummary?: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  onNavigateToCurriculum,
  onNavigateToStudyPlan,
  onNavigateToStaff,
  onOpenSummary,
}) => {
  const [activeFacilityTab, setActiveFacilityTab] = useState<'hardware' | 'software'>('hardware');
  const [expandedPlo, setExpandedPlo] = useState<string | null>('PLO1');

  return (
    <div className="space-y-10 pb-12">
      {/* Hero Section with Vibrant Official Blue Palette */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#005596] via-[#0066B3] to-[#1689D4] text-white shadow-lg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/hero-bg.jpg"
            alt="ห้องปฏิบัติการหุ่นยนต์และระบบอัตโนมัติ มหาวิทยาลัยบูรพา"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('/images/')) {
                target.src = '/images/hero-bg.jpg';
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004e8a]/90 via-[#0066B3]/85 to-[#1689D4]/75" />
        </div>

        <div className="relative px-6 py-8 sm:px-10 sm:py-10 max-w-4xl">
          <h1 className="text-lg sm:text-[22px] lg:text-[27px] font-bold tracking-tight text-white leading-tight text-balance">
            หลักสูตรวิศวกรรมศาสตรบัณฑิต
            <span className="block text-amber-200 mt-1 font-bold">
              สาขาวิชาวิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม
            </span>
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-100 font-medium">
            Bachelor of Engineering Program in Robotics and Industrial Automation Engineering
          </p>

          <p className="mt-1 text-xs sm:text-sm text-sky-200 font-medium">
            ภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา
          </p>

          <p className="mt-4 text-sm sm:text-base text-white/95 leading-relaxed max-w-3xl font-light">
            {PROGRAM_INFO.philosophy}
          </p>
        </div>
      </section>

      {/* Program Summary Stats Bar */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">จำนวนหน่วยกิตรวม</p>
          <p className="text-2xl font-bold text-[#0066B3] mt-1 tabular-nums">
            {PROGRAM_INFO.minCredits} <span className="text-sm font-normal text-slate-500">หน่วยกิต</span>
          </p>
          <p className="text-xs text-slate-400 mt-0.5">ศึกษาทั่วไป 24 · เฉพาะ 93 · เสรี 6</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">ระยะเวลาหลักสูตร</p>
          <p className="text-2xl font-bold text-[#0066B3] mt-1 tabular-nums">
            {PROGRAM_INFO.durationYears} <span className="text-sm font-normal text-slate-500">ปี (ระบบทวิภาค)</span>
          </p>
          <p className="text-xs text-slate-500 mt-0.5">ภาคต้น + ภาคปลาย + ภาคฤดูร้อน</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">ชื่อย่อปริญญา</p>
          <p className="text-xl font-bold text-[#0066B3] mt-1">
            วศ.บ. / B.Eng.
          </p>
          <div className="text-xs text-slate-600 font-normal mt-1 leading-snug">
            <p>วิศวกรรมหุ่นยนต์และระบบอัตโนมัติอุตสาหกรรม</p>
            <p className="text-[11px] text-slate-500">(Robotics and Industrial Automation Engineering)</p>
          </div>
        </div>
      </section>

      {/* 5 Distinct Program Highlights */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
        <div className="max-w-2xl mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#274c77] uppercase tracking-wider">
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
              className="p-5 rounded-xl bg-slate-50 hover:bg-[#f2f6fa] border border-slate-200/80 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#0066B3] text-white font-bold text-xs flex items-center justify-center shrink-0">
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

          {/* Special EEC & Career Link card with vibrant navy gradient */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-[#005596] to-[#0066B3] text-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>ทำเลทองแห่งอุตสาหกรรม</span>
              </div>
              <h3 className="text-sm font-bold text-white leading-snug">
                ศูนย์กลางเขตเศรษฐกิจพิเศษ EEC
              </h3>
              <p className="text-xs text-slate-100 mt-2 leading-relaxed">
                มหาวิทยาลัยบูรพาตั้งอยู่ใจกลางกลุ่มคลัสเตอร์อุตสาหกรรมเป้าหมาย รองรับการฝึกงาน สหกิจศึกษา และการจ้างงานโดยตรง
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-slate-200">
              <span>ชลบุรี - ระยอง - ฉะเชิงเทรา</span>
              <span className="font-semibold text-amber-200">100% Demand</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Design Project Continuum */}
      <section className="bg-gradient-to-br from-[#004e8a] via-[#0066B3] to-[#1689D4] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-blue-400/30">
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-200 uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4 text-sky-200" />
            <span>กระบวนการเรียนรู้เชิงออกแบบต่อเนื่อง</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            โครงงานบูรณาการ 4 ระดับ (Cornerstone สู่ CWIE)
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 mt-1">
            Project-based & Work-integrated Learning สะพานเชื่อมระหว่างการเรียนในห้องเรียนกับการปฏิบัติงานจริงในโรงงาน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 hover:bg-white/15 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-200">ปีที่ 1 ฤดูร้อน</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-medium">1 หน่วยกิต</span>
            </div>
            <h3 className="text-sm font-bold text-white">Cornerstone Design</h3>
            <p className="text-xs text-slate-300 mt-1 font-medium">โครงงานบูรณาการฐานราก</p>
            <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
              ฝึกระบุปัญหา ออกแบบวงจร เซนเซอร์ ไมโครคอนโทรลเลอร์ และสร้างต้นแบบหุ่นยนต์ขนาดเล็กเป็นทีม
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 hover:bg-white/15 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-200">ปีที่ 2 ฤดูร้อน</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-medium">1 หน่วยกิต</span>
            </div>
            <h3 className="text-sm font-bold text-white">Keystone Design</h3>
            <p className="text-xs text-slate-300 mt-1 font-medium">โครงงานบูรณาการเชื่อมโยง</p>
            <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
              ต่อยอดสู่ระบบอัตโนมัติระดับกลาง PLC, มอเตอร์ไฟฟ้า, กลไกอุตสาหกรรม และการเขียนโปรแกรมควบคุม
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 hover:bg-white/15 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-200">ปีที่ 3 ฤดูร้อน</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-medium">1 หน่วยกิต</span>
            </div>
            <h3 className="text-sm font-bold text-white">Capstone Design</h3>
            <p className="text-xs text-slate-300 mt-1 font-medium">โครงงานบูรณาการเชี่ยวชาญ</p>
            <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
              จำลองและสร้างระบบอัตโนมัติเต็มรูปแบบ ร่วมกับ AI และ SCADA เพื่อแก้โจทย์ที่มาจากภาคอุตสาหกรรมจริง
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-b from-amber-500/20 to-amber-600/30 border border-amber-400/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-300">ปีที่ 4 (1-2 ภาค)</span>
              <span className="text-[10px] bg-amber-400 text-slate-900 px-2 py-0.5 rounded font-bold">12-24 หน่วยกิต</span>
            </div>
            <h3 className="text-sm font-bold text-white">CWIE สหกิจศึกษา</h3>
            <p className="text-xs text-amber-200 mt-1 font-medium">ปฏิบัติงานจริงในสถานประกอบการ</p>
            <p className="text-[11px] text-slate-200 mt-2 leading-relaxed">
              ร่วมทำโครงการจริงกับวิศวกรโรงงานอัจฉริยะ โรงงานผลิตยานยนต์ หรือบริษัทชั้นนำ พร้อมประเมินสมรรถนะ
            </p>
          </div>
        </div>
      </section>

      {/* PEOs & PLOs Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PEOs */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#274c77] uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>วัตถุประสงค์ของหลักสูตร</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
            Program Educational Objectives (PEOs)
          </h2>
          <div className="space-y-3.5">
            {PEOS.map((peo) => (
              <div key={peo.code} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-[#1f385c] bg-[#eef3f8] border border-[#d6e3ef] px-2 py-0.5 rounded-md">
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
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#274c77] uppercase tracking-wider mb-1">
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
                    isExpanded ? 'border-[#274c77] bg-[#f4f8fb]' : 'border-slate-200 bg-white'
                  }`}
                >
                  <button
                    onClick={() => setExpandedPlo(isExpanded ? null : plo.code)}
                    className="w-full text-left p-3.5 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-md shrink-0 ${
                          isExpanded ? 'bg-[#274c77] text-white' : 'bg-slate-100 text-slate-700'
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
                        isExpanded ? 'rotate-180 text-[#274c77]' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="px-3.5 pb-3.5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-[#d8e4f0] mt-1">
                      {plo.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities & Learning Resources */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#274c77] uppercase tracking-wider">
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
                  ? 'bg-white text-[#1f385c] shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ฮาร์ดแวร์และชุดฝึกปฏิบัติ
            </button>
            <button
              onClick={() => setActiveFacilityTab('software')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeFacilityTab === 'software'
                  ? 'bg-white text-[#1f385c] shadow-2xs font-bold'
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
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-4 h-4 text-[#274c77]" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {grp.category}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {grp.items.map((it, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="text-[#274c77] font-bold leading-none mt-1">·</span>
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
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <MonitorCheck className="w-5 h-5 text-[#274c77] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{sw.name}</h3>
                  <p className="text-xs text-slate-600 mt-1">{sw.spec}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Industrial Partners */}
      <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
        <div className="max-w-2xl mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#274c77] uppercase tracking-wider">
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
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-[#274c77] transition-colors shadow-2xs"
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
