"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { cn } from '../../lib/utils';

export const ServiceCard = ({ service, className }) => {
  return (
    <Card 
      className={cn(
        'h-full transition-all duration-300 hover:shadow-xl group bg-white text-black border border-gray-200 overflow-hidden rounded-lg',
        className
      )}
    >
      <CardContent className="p-0 flex flex-col h-full">
        {/* Top colored bar - visual accent */}
        <div className="h-2 w-full bg-primary"></div>
        
        <div className="p-6 flex flex-col h-full">
          {/* Icon with background */}
          <div className="mb-6 bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
            <div className="text-primary">
              {service.icon}
            </div>
          </div>
          
          {/* Title with hover effect */}
          <h3 className="text-xl font-bold mb-3 text-black group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 mb-6 flex-grow">
            {service.description}
          </p>
          
          {/* Doctor name with styled badge */}
          <div className="flex justify-between items-center">
            <div className="inline-block bg-gray-100 text-primary text-sm px-3 py-1 rounded-full mb-4">
              {service.doctor}
            </div>
            
            {/* Read more link with animated arrow */}
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group/link"
            >
              <span className="border-b border-transparent group-hover/link:border-primary transition-all">קרא עוד</span>
              <ArrowLeft className="mr-2 h-4 w-4 transform transition-transform group-hover/link:-translate-x-1" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 