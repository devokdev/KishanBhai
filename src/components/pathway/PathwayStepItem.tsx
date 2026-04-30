// src/components/pathway/PathwayStepItem.tsx

import type { PathwayStep, PathwayStatus } from '@/data/pathwayData'; // Adjust path if needed

// Helper to get styles based on status
const getStatusStyles = (status: PathwayStatus) => {
  switch (status) {
    case 'completed':
      return {
        ring: 'ring-green-500',
        iconBg: 'bg-green-500',
        text: 'text-gray-400',
        line: 'bg-green-500',
      };
    case 'active':
      return {
        ring: 'ring-blue-500',
        iconBg: 'bg-blue-500',
        text: 'text-white',
        line: 'bg-gray-700',
      };
    case 'pending':
    default:
      return {
        ring: 'ring-gray-700',
        iconBg: 'bg-gray-700',
        text: 'text-gray-500',
        line: 'bg-gray-700',
      };
  }
};

// SVG Checkmark Icon
const CheckIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

interface PathwayStepItemProps {
  step: PathwayStep;
  isLast: boolean;
  onStepClick: (id: number) => void;
}

export const PathwayStepItem = ({ step, isLast, onStepClick }: PathwayStepItemProps) => {
  const styles = getStatusStyles(step.status);

  return (
    <div className="relative flex items-start">
      {/* Vertical Line Connector */}
      {!isLast && (
        <div className={`absolute top-5 left-4 -ml-px h-full w-0.5 ${styles.line}`} />
      )}
      
      {/* Icon and Ring */}
      <div className="flex items-center h-10">
        <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full ring-4 ${styles.ring} ${styles.iconBg}`}>
          {step.status === 'completed' ? (
            <CheckIcon />
          ) : (
            <span className="text-white font-semibold">{step.id}</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="ml-4 flex-grow pb-8">
        <h3 className={`text-lg font-semibold ${styles.text}`}>{step.title}</h3>
        <p className="mt-1 text-sm text-gray-400">{step.description}</p>
        <button
          onClick={() => onStepClick(step.id)}
          className="mt-2 text-sm text-blue-400 hover:text-blue-300 disabled:text-gray-600 disabled:cursor-not-allowed"
          disabled={step.status === 'completed'}
        >
          {step.status === 'completed' ? 'Done' : 'Mark as Complete'}
        </button>
      </div>
    </div>
  );
};