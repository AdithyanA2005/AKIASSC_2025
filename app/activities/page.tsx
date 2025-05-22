'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Activity {
  id: number;
  image: string;
  date: string;
  time: string;
  topic: string;
  description: string;
}

// Sample activities data - replace with your actual activities
const activities: Activity[] = [
  {
    id: 1,
    image: "/activities/activity1.jpg",
    date: "2024-03-20",
    time: "2:00 PM",
    topic: "IEEE Technical Workshop: Introduction to IoT",
    description: "A hands-on workshop where students learned about Internet of Things (IoT) fundamentals, including sensor integration, microcontroller programming, and cloud connectivity. The workshop featured practical demonstrations and participants built their own basic IoT projects using Arduino and ESP32 boards."
  },
  {
    id: 2,
    image: "/activities/activity1.jpg",
    date: "2024-03-20",
    time: "2:00 PM",
    topic: "IEEE Technical Workshop: Introduction to IoT",
    description: "A hands-on workshop where students learned about Internet of Things (IoT) fundamentals, including sensor integration, microcontroller programming, and cloud connectivity. The workshop featured practical demonstrations and participants built their own basic IoT projects using Arduino and ESP32 boards."
  },
  {
    id: 3,
    image: "/activities/activity1.jpg",
    date: "2024-03-20",
    time: "2:00 PM",
    topic: "IEEE Technical Workshop: Introduction to IoT",
    description: "A hands-on workshop where students learned about Internet of Things (IoT) fundamentals, including sensor integration, microcontroller programming, and cloud connectivity. The workshop featured practical demonstrations and participants built their own basic IoT projects using Arduino and ESP32 boards."
  },
  {
    id: 4,
    image: "/activities/activity1.jpg",
    date: "2024-03-20",
    time: "2:00 PM",
    topic: "IEEE Technical Workshop: Introduction to IoT",
    description: "A hands-on workshop where students learned about Internet of Things (IoT) fundamentals, including sensor integration, microcontroller programming, and cloud connectivity. The workshop featured practical demonstrations and participants built their own basic IoT projects using Arduino and ESP32 boards."
  },
  {
    id: 5,
    image: "/activities/activity1.jpg",
    date: "2024-03-20",
    time: "2:00 PM",
    topic: "IEEE Technical Workshop: Introduction to IoT",
    description: "A hands-on workshop where students learned about Internet of Things (IoT) fundamentals, including sensor integration, microcontroller programming, and cloud connectivity. The workshop featured practical demonstrations and participants built their own basic IoT projects using Arduino and ESP32 boards."
  },
  {
    id: 6,
    image: "/activities/activity1.jpg",
    date: "2024-03-20",
    time: "2:00 PM",
    topic: "IEEE Technical Workshop: Introduction to IoT",
    description: "A hands-on workshop where students learned about Internet of Things (IoT) fundamentals, including sensor integration, microcontroller programming, and cloud connectivity. The workshop featured practical demonstrations and participants built their own basic IoT projects using Arduino and ESP32 boards."
  },
  {
    id: 7,
    image: "/activities/activity1.jpg",
    date: "2024-03-20",
    time: "2:00 PM",
    topic: "IEEE Technical Workshop: Introduction to IoT",
    description: "A hands-on workshop where students learned about Internet of Things (IoT) fundamentals, including sensor integration, microcontroller programming, and cloud connectivity. The workshop featured practical demonstrations and participants built their own basic IoT projects using Arduino and ESP32 boards."
  }
];

const FALLBACK_IMAGE = "/activities/fallback.jpg";

export default function ActivitiesPage() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">IEEE SB UKFCET Activities</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => {
          const [imgSrc, setImgSrc] = useState(activity.image);
          return (
            <div
              key={activity.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg border-2 border-yellow-400 bg-gray-900 min-h-[200px]"
              onClick={() => setSelectedActivity(activity)}
            >
              <div className="aspect-w-4 aspect-h-5 bg-gray-800 flex items-center justify-center">
                <Image
                  src={imgSrc}
                  alt={activity.topic}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={() => setImgSrc(FALLBACK_IMAGE)}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">{activity.topic}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Dialog open={!!selectedActivity} onOpenChange={() => setSelectedActivity(null)}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedActivity && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedActivity.topic}</DialogTitle>
              </DialogHeader>
              <div className="relative w-full h-[300px] mb-4">
                <Image
                  src={selectedActivity.image}
                  alt={selectedActivity.topic}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Date & Time</h3>
                  <p>{selectedActivity.date} at {selectedActivity.time}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Description</h3>
                  <p>{selectedActivity.description}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
} 