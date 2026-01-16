import { AlertCircle } from 'lucide-react';

const SimplePaymentAlert = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
        <AlertCircle className="text-white flex-shrink-0" size={18} />
        <div className="text-center">
          <p className="text-2xl">
            Payment Overdue. This may affect the entire website. Please pay website Dues.
          </p>
          <button
            onClick={() => window.location.href = ''}
            className="mt-1 text-sm underline hover:text-white/90"
          >
            Contact Developer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimplePaymentAlert;