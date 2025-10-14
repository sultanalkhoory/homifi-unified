'use client';

/**
 * Step 4: Configure & Automate (Placeholder)
 * TODO: Build full automation UI with scenes, voice control, etc.
 */
export default function StepAutomation() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-xl">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Automation UI
        </h3>
        <p className="text-sm text-gray-600">
          Voice & tap scenes
        </p>
      </div>
    </div>
  );
}
