import React from 'react';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';

interface DiscordMessageProps {
  title: string;
  description: string;
  image?: string;
  date?: string;
  time?: string;
}

export default function DiscordMessage({ 
  title, 
  description, 
  image, 
  date, 
  time 
}: DiscordMessageProps) {
  return (
    <div className="w-auto h-auto">      
      {image && (
        <div className="mt-2 ml-12">
          <div className="rounded-md overflow-hidden bg-[#2f3136] p-1">
            <div className="relative w-full">
              <Image
                src={image}
                alt={title}
                width={1200}
                height={630}
                className="object-cover rounded w-full"
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
