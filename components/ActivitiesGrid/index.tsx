import { Activity } from "@/lib/types";
import FadeOnSee from "../FadeOnSee";
import { Clock } from "lucide-react";

export default function ActivityGrid({ data }: { data: Activity[] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ul className="space-y-4">
        {data.map((activity, index) => (
          <FadeOnSee
            key={`activity-${activity.id}`}
            delay={index * 0.1}
            className="w-full"
          >
            <li className="flex items-start gap-4 group transition-all duration-300 hover:bg-white/5 p-4 rounded-lg border border-transparent hover:border-purple-500/20">
              <div className="min-w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-3 h-3 bg-purple-400 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#00FFFF] to-[#7FFFD4] bg-clip-text text-transparent">
                  {activity.topic}
                </h3>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock size={16} className="text-[#7FFFD4]" />
                  <span className="text-sm">
                    {activity.time}
                  </span>
                </div>
              </div>
            </li>
          </FadeOnSee>
        ))}
      </ul>
    </div>
  );
}
