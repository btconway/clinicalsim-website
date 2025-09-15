export default function SMSConsentVerification() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">SMS Consent Verification</h1>
        
        <div className="space-y-6 text-gray-800">
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-lg font-semibold mb-2">Express Consent for Informational Messages</h2>
            <p>
              I, Ben Conway, provide express consent to receive automated informational messages and responses from my personal AI assistant system. I understand that:
            </p>
            <ul className="mt-3 ml-4 space-y-1 text-sm list-disc">
              <li>This system will send me informational responses to my queries</li>
              <li>I will receive automated assistance and reminder messages</li>
              <li>I can stop these messages at any time by replying STOP</li>
              <li>This is for my personal use only</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Use Case Description:</h3>
            <p className="text-sm">
              Personal conversational AI assistant that provides informational responses, reminders, and general assistance. 
              I am the sole user who will send queries and receive automated responses from my AI system. 
              My wife may also send queries to add items to my todo list.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Sample Message:</h3>
            <p className="text-sm italic">
              "Based on your query about the weather, here's today's forecast: Sunny, 75°F with light winds. Is there anything else I can help you with?"
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Message Categories:</h3>
            <ul className="text-sm space-y-1 ml-4 list-disc">
              <li>Informational responses to user queries</li>
              <li>Personal reminders and notifications</li>
              <li>General assistance messages</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Additional Information:</h3>
            <p className="text-sm">
              This is a personal project for individual use only. No third parties will receive 
              messages from this number. The AI assistant will only provide informational responses 
              to messages I send to it. No promotional or marketing messages will be sent.
            </p>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-600">
              This document serves as verification of consent for informational SMS messaging services as required 
              by Twilio for toll-free number verification.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Date: {new Date().toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">
              Signature/Agreement: Ben Conway
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}