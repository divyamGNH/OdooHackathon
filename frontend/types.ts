
export interface RequestItem {
  id: string;
  title: string;
  category: string;
  icon: string;
  status: 'new' | 'in-progress' | 'on-hold';
  priorityColor: string;
  assignedTo?: string; // Avatar URL
  tag?: string;
}

export interface StatItem {
  label: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: string;
  iconBg: string;
  iconColor: string;
}

export interface ScheduledTask {
  time: string;
  period: string;
  title: string;
  location: string;
  icon: string;
}

export interface AttentionItem {
  id: string;
  title: string;
  overdue: string;
}

export interface TeamMember {
  name: string;
  role: string;
  activeJobs: number;
  available: string;
  workload: 'High' | 'Normal' | 'Critical';
  workloadValue: number;
  workloadColor: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}

export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  targetId: string;
  timestamp: string;
  type: 'close' | 'comment' | 'system';
  comment?: string;
  isLast?: boolean;
}
