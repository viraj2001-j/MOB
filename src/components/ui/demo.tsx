"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Planning",
    date: "1-4 Days",
    content: "Project planning and requirements gathering phase.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2,3,4,5],
    status: "completed" as const,
    energy: 10,
  },
  {
    id: 2,
    title: "Design",
    date: "1-9 Days",
    content: "UI/UX design and system architecture.",
    category: "Design",
    icon: FileText,
    relatedIds: [3,4,5],
    status: "completed" as const,
    energy: 30,
  },
  {
    id: 3,
    title: "Development",
    date: "1-14 Days",
    content: "Core features implementation and testing.",
    category: "Development",
    icon: Code,
    relatedIds: [4,5],
    status: "completed" as const,
    energy: 70,
  },
  {
    id: 4,
    title: "Testing",
    date: "1-4 Days",
    content: "User testing and bug fixes.",
    category: "Testing",
    icon: User,
    relatedIds: [5],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 5,
    title: "Release",
    date: "1-4 Days",
    content: "Final deployment and release.",
    category: "Release",
    icon: Clock,
    relatedIds: [1],
    status: "completed" as const,
    energy: 100,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </>
  );
}

export default {
  RadialOrbitalTimelineDemo,
};
