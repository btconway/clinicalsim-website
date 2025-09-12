export default function SMSConsentVerification() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">SMS Consent Verification</h1>
        
        <div className="space-y-6 text-gray-800">
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-lg font-semibold mb-2">Personal AI Assistant Consent</h2>
            <p>
              I, Ben Conway, consent to receive automated messages from my personal AI assistant application. 
              This system is for my personal use only.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Use Case Description:</h3>
            <p className="text-sm">
              Personal AI assistant for individual use. I will be the sole user sending and receiving 
              messages to/from my own AI assistant application.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Sample Message:</h3>
            <p className="text-sm italic">
              "Hello AI, what's the weather forecast for today?"
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Additional Information:</h3>
            <p className="text-sm">
              This is a personal project for individual use only. No third parties will receive 
              messages from this number. The AI assistant will only respond to messages I send to it.
              My wife may also text the assistant to add items to my todo list.
            </p>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-600">
              This document serves as verification of consent for SMS messaging services as required 
              by Twilio for toll-free number verification.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Date: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}