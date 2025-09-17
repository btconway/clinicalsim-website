export default function SMSConsentVerification() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Text Message Consent Form</h1>
        
        <div className="space-y-6 text-gray-800">
          <div className="border-2 border-blue-500 p-6 rounded bg-blue-50">
            <h2 className="text-xl font-bold mb-4 text-blue-900">EXPRESS WRITTEN CONSENT</h2>
            <p className="text-lg font-semibold mb-4">
              <strong>I, Ben Conway, hereby provide my express written consent to receive text messages from my Personal AI Assistant system.</strong>
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded border">
            <h3 className="text-lg font-semibold mb-3">What I'm Consenting To:</h3>
            <ul className="space-y-2 ml-4 list-disc">
              <li><strong>I consent to receive automated text message responses from my AI assistant</strong></li>
              <li><strong>I understand these messages will be informational in nature</strong></li>
              <li><strong>I understand I can receive reminders, answers to questions, and general assistance</strong></li>
              <li><strong>I understand message and data rates may apply</strong></li>
              <li><strong>I can opt out at any time by replying STOP</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded border">
            <h3 className="text-lg font-semibold mb-3">Consent Details:</h3>
            <div className="space-y-2">
              <p><strong>Phone Number:</strong> +1[YOUR_PHONE_NUMBER]</p>
              <p><strong>Date of Consent:</strong> {new Date().toLocaleDateString()}</p>
              <p><strong>Signature/Agreement:</strong> Ben Conway</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded border border-yellow-300">
            <h3 className="text-lg font-semibold mb-3">Use Case Description:</h3>
            <p>
              Personal informational AI assistant that provides automated responses to user queries, reminders, and general assistance. 
              Single user (myself) will send questions and receive informational responses. My wife may also send queries to add items to my todo list.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded border border-green-300">
            <h3 className="text-lg font-semibold mb-3">Sample Message:</h3>
            <p className="italic font-medium">
              "Hi Ben, based on your question about today's schedule, you have a meeting at 2 PM. Reply STOP to opt out. Msg&data rates may apply."
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded border border-purple-300">
            <h3 className="text-lg font-semibold mb-3">Message Categories:</h3>
            <ul className="space-y-1 ml-4 list-disc">
              <li>Customer Care - Informational responses to user queries</li>
              <li>Account Notifications - Personal reminders and notifications</li>
              <li>General assistance messages</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded border border-red-300">
            <h3 className="text-lg font-semibold mb-3">Important Disclaimers:</h3>
            <p className="font-medium">
              <em>This consent is for personal use only. No third parties will receive messages from this system. 
              No promotional or marketing messages will be sent. This is solely for informational responses and personal assistance.</em>
            </p>
          </div>

          <div className="border-t-2 border-gray-300 pt-6">
            <p className="text-center text-lg font-semibold">
              This document serves as verification of express written consent for informational SMS messaging services as required by Twilio for toll-free number verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}