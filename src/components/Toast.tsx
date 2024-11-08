import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  show: boolean;
  message: string;
}

export function Toast({ show, message }: ToastProps) {
  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center">
        <CheckCircle className="h-5 w-5 mr-2" />
        <span>{message}</span>
      </div>
    </div>
  );
}