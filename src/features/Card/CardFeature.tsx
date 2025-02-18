import React, { useState } from 'react';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';


interface CardFeatureProps {
  title: string;
  description: string;
}

export const CardFeature: React.FC<CardFeatureProps> = ({ title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 border-2 border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <Button onClick={() => setIsModalOpen(true)}>
        View Details
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      >
        <div className="space-y-4">
          <p>{description}</p>
          <Button onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};
