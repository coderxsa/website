import React from 'react';
import { FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const Terms = () => {
  return (
    <section id="terms" className="py-16 px-4 bg-gray-900/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Terms & Conditions
          </h2>
          <p className="text-xl text-gray-300">
            Please read our terms and conditions carefully before using our services.
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="space-y-8">
            {/* Service Agreement */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Service Agreement</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• All services are provided on a prepaid basis using our coin system</li>
                  <li>• WhatsApp Bot Panel: 1000 coins for 7 days, 4600 coins for 30 days</li>
                  <li>• Fortnite Bot Lobbies: 1000 coins for 10 lobbies</li>
                  <li>• Services begin immediately upon payment confirmation</li>
                  <li>• No refunds after service activation unless technical failure on our end</li>
                </ul>
              </div>
            </div>

            {/* Usage Policy */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Usage Policy</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Services must be used in compliance with platform terms of service</li>
                  <li>• No spam, harassment, or illegal activities permitted</li>
                  <li>• Account sharing is prohibited and may result in service termination</li>
                  <li>• We reserve the right to suspend accounts violating our policies</li>
                  <li>• Users are responsible for their account security and activities</li>
                </ul>
              </div>
            </div>

            {/* Service Guarantees */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Service Guarantees</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• 99.9% uptime guarantee for all services</li>
                  <li>• 24/7 technical support via Telegram and WhatsApp</li>
                  <li>• Service credits provided for downtime exceeding 0.1%</li>
                  <li>• Regular maintenance windows announced 24 hours in advance</li>
                  <li>• Backup systems ensure minimal service interruption</li>
                </ul>
              </div>
            </div>

            {/* Limitations */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Limitations & Liability</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Services provided "as is" without warranty beyond stated guarantees</li>
                  <li>• We are not liable for third-party platform changes affecting service</li>
                  <li>• Maximum liability limited to the amount paid for affected service</li>
                  <li>• Force majeure events may affect service availability</li>
                  <li>• Users must backup important data independently</li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-gray-700/30 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Payment & Refund Policy</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">Payment Terms</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• All payments processed securely</li>
                    <li>• Coins credited instantly upon payment</li>
                    <li>• Multiple payment methods accepted</li>
                    <li>• Bulk purchase discounts available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Refund Policy</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 24-hour refund window before service activation</li>
                    <li>• Technical issues: Full refund or service credit</li>
                    <li>• Partial refunds for unused service time</li>
                    <li>• Refunds processed within 3-5 business days</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Last updated: January 2024 | For questions about these terms, contact us via Telegram or WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;