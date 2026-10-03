import React, { useState } from 'react';
import {
  CAREER_PATHS,
  CareerPathItem,
} from '../data/curriculumData';
import {
  Briefcase,
  TrendingUp,
  MapPin,
  CheckCircle2,
  DollarSign,
  Compass,
  ArrowRight,
  Sparkles,
  Building,
  Target
} from 'lucide-react';

export const CareerPathSection: React.FC = () => {
  const [selectedCareer, setSelectedCareer] = useState<CareerPathItem>(CAREER_PATHS[0]);

  return (
    <div className="space-y-10 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
            <Briefcase className="w-4 h-4" />
            <span>แนวทางการประกอบอาชีพ</span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
            6 เส้นทางสายอาชีพเมื่อสำเร็จการศึกษา
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            ตอบโจทย์ตลาดแรงงานภาคอุตสาหกรรมยุค 4.0 ทั้งในเขตพัฒนาพิเศษภาคตะวันออก (EEC) และระดับสากล ด้วยทักษะวิศวกรรมเฉพาะทางที่เป็นที่ต้องการสูงสุด
          </p>
        </div>

        {/* Market Demand Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-100 text-xs">
          <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100/60">
            <span className="text-slate-500 block text-[11px]">อุตสาหกรรมเป้าหมาย</span>
            <span className="font-bold text-blue-900 text-sm">New S-Curve & EEC</span>
          </div>
          <div className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-100/60">
            <span className="text-slate-500 block text-[11px]">อัตราการมีงานทำ</span>
            <span className="font-bold text-emerald-900 text-sm">สูงกว่า 95%</span>
          </div>
          <div className="p-3.5 bg-indigo-50/50 rounded-xl border border-indigo-100/60">
            <span className="text-slate-500 block text-[11px]">เงินเดือนเริ่มต้นเฉลี่ย</span>
            <span className="font-bold text-indigo-900 text-sm tabular-nums">30,000 - 45,000 ฿</span>
          </div>
          <div className="p-3.5 bg-amber-50/50 rounded-xl border border-amber-100/60">
            <span className="text-slate-500 block text-[11px]">ใบอนุญาตประกอบวิชาชีพ</span>
            <span className="font-bold text-amber-900 text-sm">ตามเกณฑ์สภาวิศวกร</span>
          </div>
        </div>
      </div>

      {/* Interactive Career Explorer: 2-Column Desktop View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 6 Career Cards List */}
        <div className="lg:col-span-5 space-y-2.5">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            เลือกสายอาชีพเพื่อดูรายละเอียดเชิงลึก
          </h2>
          {CAREER_PATHS.map((item) => {
            const isSelected = selectedCareer.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedCareer(item)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-blue-300 text-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {item.titleTh}
                  </h3>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-white translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </div>
                <p className={`text-[11px] mt-1 truncate ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                  {item.titleEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Career Deep Dive Card */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-800 rounded-md text-xs font-semibold mb-2">
                <Target className="w-3.5 h-3.5 text-blue-600" />
                <span>รายละเอียดบทบาทหน้าที่</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {selectedCareer.titleTh}
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {selectedCareer.titleEn}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed">
                {selectedCareer.descriptionTh}
              </p>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>หน้าที่ความรับผิดชอบหลักในโรงงานอุตสาหกรรม</span>
              </h4>
              <ul className="space-y-2">
                {selectedCareer.responsibilities.map((resp, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Essential Skills */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>ทักษะทางเทคนิคที่จำเป็น (Key Hard Skills)</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedCareer.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-100 text-slate-800 px-3 py-1 rounded-lg font-medium border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Industry Sectors */}
            <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-xs">
              <span className="font-bold text-slate-900 block">อุตสาหกรรมและสถานประกอบการเป้าหมาย:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCareer.targetSectors.map((sector, i) => (
                  <span
                    key={i}
                    className="bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md text-[11px]"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Salary Estimation */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-500 font-medium">ค่าตอบแทนและเงินเดือนเฉลี่ย:</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                {selectedCareer.averageStartingSalary}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Career Growth Continuum with Bright Blue theme */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-blue-700/50">
        <h3 className="text-lg font-bold text-white mb-2">
          เส้นทางการเติบโตในสายอาชีพ (Engineering Career Progression)
        </h3>
        <p className="text-xs text-blue-100 max-w-2xl mb-6">
          โครงสร้างหลักสูตรเตรียมความพร้อมตั้งแต่ระดับปฏิบัติการ สู่การบริหารจัดการโครงการและผู้ประกอบการเทคโนโลยี
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 bg-white/10 backdrop-blur-xs rounded-xl border border-white/20">
            <span className="text-sky-300 font-bold block mb-1">ปีที่ 1-2 หลังจบ</span>
            <h4 className="font-bold text-white text-sm">Junior Engineer</h4>
            <p className="text-blue-200 mt-1 leading-relaxed">
              ผู้ควบคุมและเขียนโปรแกรมหุ่นยนต์ PLC, วิเคราะห์และแก้ไขปัญหาระบบหน้างาน
            </p>
          </div>

          <div className="p-4 bg-white/10 backdrop-blur-xs rounded-xl border border-white/20">
            <span className="text-sky-300 font-bold block mb-1">ปีที่ 3-5 หลังจบ</span>
            <h4 className="font-bold text-white text-sm">Senior Engineer</h4>
            <p className="text-blue-200 mt-1 leading-relaxed">
              ผู้ออกแบบระบบอัตโนมัติเต็มรูปแบบ (System Designer), ควบคุมทีมวิศวกรและโครงการ
            </p>
          </div>

          <div className="p-4 bg-white/10 backdrop-blur-xs rounded-xl border border-white/20">
            <span className="text-sky-300 font-bold block mb-1">ปีที่ 5-10 หลังจบ</span>
            <h4 className="font-bold text-white text-sm">Engineering Manager / SI Lead</h4>
            <p className="text-blue-200 mt-1 leading-relaxed">
              บริหารจัดการโรงงานอัจฉริยะ วางแผนการลงทุนเทคโนโลยี และนำการทำ Digital Transformation
            </p>
          </div>

          <div className="p-4 bg-gradient-to-b from-amber-500/20 to-amber-600/30 rounded-xl border border-amber-400/50">
            <span className="text-amber-300 font-bold block mb-1">10 ปีขึ้นไป</span>
            <h4 className="font-bold text-white text-sm">Tech Entrepreneur / CTO</h4>
            <p className="text-amber-100 mt-1 leading-relaxed">
              ก่อตั้งบริษัท System Integrator ของตนเอง หรือดำรงตำแหน่งผู้บริหารสายเทคโนโลยีระดับสูง
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
