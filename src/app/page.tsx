'use client'

import { Button } from '@/components/ui/Button';
import { CardFeature } from '@/features/Card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8 ">
        Next.js Component-First Template
      </h1>
      <div className="flex gap-4 mb-4 rounded-lg">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
      
      <CardFeature
        title="Card Title"
        description="This is a card with a modal."
      />
    </main>
  );
}
