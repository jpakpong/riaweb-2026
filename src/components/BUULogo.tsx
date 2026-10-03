import React from 'react';

interface BUULogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BUULogo: React.FC<BUULogoProps> = () => {
  return null;
};

export const BUURoboticsBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-md text-blue-800 text-xs font-medium ${className}`}>
      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
      <span className="font-prompt">หลักสูตรใหม่ พ.ศ. 2569 · คณะวิศวกรรมศาสตร์</span>
    </div>
  );
};
