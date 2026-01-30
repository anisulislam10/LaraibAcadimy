import { AlertCircle } from 'lucide-react';

const SimplePaymentAlert = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-r from-red-600 to-red-700 text-white">
      {/* Keep your original header bar */}
      <div className="bg-gradient-to-r from-red-700 to-red-800 text-white py-4 px-4 border-b border-red-800">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
          <AlertCircle className="text-white flex-shrink-0" size={24} />
          <div className="text-center">
            <p className="text-3xl font-bold">
              Payment Overdue. Website access has been suspended.
            </p>
          </div>
        </div>
      </div>

      {/* Full page content */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] p-6 text-center">
        <div className="max-w-2xl">
          {/* Large warning icon */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
              <AlertCircle className="relative" size={120} />
            </div>
          </div>

          {/* Main message */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WEBSITE DOWN
          </h1>
          
          <div className="bg-red-700/50 border border-red-800 rounded-xl p-8 mb-8 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl mb-4">
              This site is unavailable due to unpaid developer fees
            </p>
            <p className="text-xl text-red-100">
              Payment required to restore service
            </p>
          </div>

          {/* Simple status indicator */}
          <div className="inline-block bg-red-800/70 px-6 py-3 rounded-lg border border-red-900">
            <p className="text-lg">
              Status: <span className="font-bold">SUSPENDED</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePaymentAlert;