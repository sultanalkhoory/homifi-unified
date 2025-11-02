'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactModal } from '@/contexts/ContactModalContext';

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Reset status when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStatus('idle');
      setErrorMessage('');
    }
  }, [isOpen]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      property: formData.get('property'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();

        // Close modal after 3 seconds
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        const error = await response.json();
        setErrorMessage(error.error || 'Something went wrong');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again.');
      setStatus('error');
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-6 md:px-8 py-4 flex items-center justify-between rounded-t-3xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-black">
                  Let's talk about your home.
                </h2>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <div className="px-6 md:px-8 py-6">
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="modal-name"
                        required
                        placeholder="Your name"
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                          outline-none transition-all placeholder:text-gray-400
                          disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="modal-email"
                        required
                        placeholder="ahmed@example.com"
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                          outline-none transition-all placeholder:text-gray-400
                          disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="modal-phone"
                      placeholder="+971 50 123 4567"
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                        outline-none transition-all placeholder:text-gray-400
                        disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Property Type */}
                  <div>
                    <label htmlFor="modal-property" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <select
                      name="property"
                      id="modal-property"
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                        outline-none transition-all bg-white text-gray-900
                        disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="" className="text-gray-500">Select property type</option>
                      <option value="Villa" className="text-gray-900">Villa</option>
                      <option value="Apartment" className="text-gray-900">Apartment</option>
                      <option value="Penthouse" className="text-gray-900">Penthouse</option>
                      <option value="Townhouse" className="text-gray-900">Townhouse</option>
                      <option value="Office" className="text-gray-900">Office</option>
                      <option value="Other" className="text-gray-900">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      id="modal-message"
                      rows={4}
                      required
                      placeholder="I'm interested in smart lighting, climate control, and security for my 4-bedroom villa..."
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                        outline-none transition-all resize-none placeholder:text-gray-400
                        disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                    className="w-full py-4 bg-black text-white rounded-full font-semibold text-base
                      hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed
                      transition-all shadow-lg hover:shadow-xl"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  <AnimatePresence mode="wait">
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-green-50 border border-green-200 rounded-xl"
                      >
                        <p className="text-green-700 font-medium text-center">
                          ✓ Thank you! We'll get back to you within 48 hours.
                        </p>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-red-50 border border-red-200 rounded-xl"
                      >
                        <p className="text-red-700 font-medium text-center">
                          {errorMessage || 'Something went wrong. Please try again or email us directly.'}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>

                {/* Alternative Contact */}
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    Prefer to reach us directly?
                  </p>
                  <div className="flex flex-wrap justify-center items-center gap-3">
                    <a
                      href="mailto:info@homifi.ae"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-blue-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      info@homifi.ae
                    </a>

                    <span className="text-gray-300">•</span>

                    <a
                      href="tel:+971505547744"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-blue-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +971 50 554 7744
                    </a>

                    <span className="text-gray-300">•</span>

                    <a
                      href="https://wa.me/971505547744"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-green-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
