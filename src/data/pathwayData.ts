// src/data/pathwayData.ts

export type PathwayStatus = 'completed' | 'active' | 'pending';

export interface PathwayStep {
  id: number;
  title: string;
  description: string;
  status: PathwayStatus;
  link?: string; // Optional link to a relevant tool or page
}

// Sample data for the Market Analyst Pathway
export const marketAnalysisPathway: PathwayStep[] = [
  {
    id: 1,
    title: 'Tokenomics Review',
    description: 'Analyze the token supply, distribution, and utility model.',
    status: 'active',
    link: '/tools/tokenomics-analyzer',
  },
  {
    id: 2,
    title: 'Smart Contract Audit Check',
    description: 'Verify the protocol has been audited by reputable firms.',
    status: 'pending',
  },
  {
    id: 3,
    title: 'On-Chain Data Analysis',
    description: 'Review TVL, transaction volume, and unique wallet growth.',
    status: 'pending',
    link: '/tools/on-chain-dashboard',
  },
  {
    id: 4,
    title: 'Community & Social Sentiment',
    description: 'Gauge sentiment from Twitter, Discord, and Telegram.',
    status: 'pending',
  },
  {
    id: 5,
    title: 'Final Report Generation',
    description: 'Compile all findings into a comprehensive analysis report.',
    status: 'pending',
  },
];