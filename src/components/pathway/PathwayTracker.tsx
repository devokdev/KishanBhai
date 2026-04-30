// src/components/pathway/PathwayTracker.tsx

'use client'; // Required for Next.js 13+ App Router due to useState

import { useState } from 'react';
import { marketAnalysisPathway, PathwayStep } from '@/data/pathwayData'; // Adjust path if needed
import { PathwayStepItem } from './PathwayStepItem';

export const PathwayTracker = () => {
  const [steps, setSteps] = useState<PathwayStep[]>(marketAnalysisPathway);

  const handleStepClick = (id: number) => {
    setSteps(prevSteps => {
      // Find the step that was clicked
      const clickedStepIndex = prevSteps.findIndex(step => step.id === id);
      if (clickedStepIndex === -1) return prevSteps;

      // Create a new array to avoid direct state mutation
      const newSteps = [...prevSteps];

      // Mark the clicked step as completed
      newSteps[clickedStepIndex] = { ...newSteps[clickedStepIndex], status: 'completed' };

      // If there is a next step, mark it as active
      const nextStepIndex = clickedStepIndex + 1;
      if (nextStepIndex < newSteps.length) {
        newSteps[nextStepIndex] = { ...newSteps[nextStepIndex], status: 'active' };
      }

      return newSteps;
    });
  };

  return (
    <div className="p-6 bg-gray-900 border border-gray-700 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6">DeFi Protocol Analysis Pathway</h2>
      <div>
        {steps.map((step, index) => (
          <PathwayStepItem
            key={step.id}
            step={step}
            isLast={index === steps.length - 1}
            onStepClick={handleStepClick}
          />
        ))}
      </div>
    </div>
  );
};