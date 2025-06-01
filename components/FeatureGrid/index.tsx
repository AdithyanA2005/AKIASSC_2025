import React from 'react';
import FadeOnSee from '@/components/FadeOnSee';
import { Event, Activity } from '@/lib/types';
import DiscordMessage from '@/components/Poster';

interface FeatureGridProps {
  data: Event[];
  alternateLayout?: boolean;
}

export default function FeatureGrid({ data, alternateLayout = true }: FeatureGridProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-16 md:space-y-24">
        {data.map((item, index) => (
          <div key={`feature-${index}`} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <FadeOnSee
              delay={0.1}
              className={`order-2 ${alternateLayout && index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
            >
              {'image' in item ? (
                <DiscordMessage
                  title={item.topic}
                  description={item.description}
                  image={item.image}
                />
              ) : (
                <DiscordMessage
                  title={item.topic}
                  description={item.description}
                />
              )}
            </FadeOnSee>
            
            <FadeOnSee
              delay={0.2}
              className={`order-1 ${alternateLayout && index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                  {item.topic}
                </h3>
                <p className="text-gray-300 text-lg">
                  {item.description}
                </p>
              </div>
            </FadeOnSee>
          </div>
        ))}
      </div>
    </div>
  );
}
