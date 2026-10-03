import React from 'react';

interface BUULogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BUULogo: React.FC<BUULogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official BUU Monogram styling matching uploaded Logo.jpg */}
      <div className={`flex items-baseline font-black tracking-tight leading-none ${size === 'sm' ? 'text-2xl' : size === 'lg' ? 'text-4xl' : 'text-3xl'}`}>
        <span className="text-[#F5B300] font-sans font-black">B</span>
        <span className="text-[#F5B300] font-sans font-black">U</span>
        <span className="text-[#58595B] font-sans font-black">U</span>
      </div>

      <div className="flex flex-col justify-center border-l-2 border-slate-300 pl-2.5">
        <span className="text-[11px] font-bold tracking-wider text-slate-800 uppercase leading-tight font-prompt">
          BURAPHA UNIVERSITY
        </span>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-4 h-1 bg-[#F5B300] rounded-xs inline-block"></span>
            <span className="text-[9px] font-semibold text-slate-600 tracking-wider uppercase font-prompt">
              WISDOM OF THE EAST
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export const BUURoboticsBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-2.5 py-1 bg-blue-50 border border-blue-200/80 rounded-md text-blue-900 text-xs font-medium ${className}`}>
      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
      <span className="font-prompt">หลักสูตรใหม่ พ.ศ. 2569 · คณะวิศวกรรมศาสตร์</span>
    </div>
  );
};
