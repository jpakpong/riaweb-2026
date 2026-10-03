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
  const heightClass =
    size === 'sm'
      ? 'h-9 sm:h-10'
      : size === 'lg'
      ? 'h-14 sm:h-16'
      : 'h-11 sm:h-12';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* logo1.png (Official University Seal) and logo2.jpg (BUU Typography Logo) connected together */}
      <div className="flex items-center gap-2">
        <img
          src="/images/logo1.png"
          alt="ตราสัญลักษณ์ มหาวิทยาลัยบูรพา"
          className={`${heightClass} w-auto object-contain shrink-0`}
          onError={(e) => {
            // Fallback to /logo1.png if /images/logo1.png is not found
            const target = e.currentTarget;
            if (target.src.includes('/images/')) {
              target.src = '/logo1.png';
            }
          }}
        />
        <img
          src="/images/logo2.jpg"
          alt="BURAPHA UNIVERSITY WISDOM OF THE EAST"
          className={`${heightClass} w-auto object-contain shrink-0`}
          onError={(e) => {
            // Fallback to /logo2.jpg if /images/logo2.jpg is not found
            const target = e.currentTarget;
            if (target.src.includes('/images/')) {
              target.src = '/logo2.jpg';
            }
          }}
        />
      </div>
    </div>
  );
};

export const BUURoboticsBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-md text-blue-800 text-xs font-medium ${className}`}>
      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
      <span className="font-prompt">หลักสูตรใหม่ พ.ศ. 2569 · คณะวิศวกรรมศาสตร์</span>
    </div>
  );
};
