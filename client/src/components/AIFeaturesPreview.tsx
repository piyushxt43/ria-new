import { motion } from "framer-motion";
import { Camera, Smile, ArrowRight } from "lucide-react";

export default function AIFeaturesPreview() {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-indigo-50/40 to-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Try Our AI-Powered Features
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Experience cutting-edge AI technology for your wellness journey
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Posture Check Card */}
                    <motion.a
                        href="/posture-check"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl overflow-hidden"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }} />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex p-4 bg-white/20 backdrop-blur rounded-2xl mb-6">
                                <Camera className="w-12 h-12" />
                            </div>

                            <h3 className="text-3xl font-bold mb-4">Posture & Form Check</h3>
                            <p className="text-indigo-100 text-lg mb-6">
                                Get real-time AI analysis of your exercise form. Perfect your push-ups, squats, and more with instant feedback.
                            </p>

                            <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                                Try it now
                                <ArrowRight className="w-5 h-5" />
                            </div>

                            {/* Feature Highlights */}
                            <div className="mt-8 space-y-2">
                                <div className="flex items-center gap-2 text-sm text-indigo-100">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    Live camera or video upload
                                </div>
                                <div className="flex items-center gap-2 text-sm text-indigo-100">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    Real-time posture corrections
                                </div>
                                <div className="flex items-center gap-2 text-sm text-indigo-100">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    Rep counter & form scoring
                                </div>
                            </div>
                        </div>
                    </motion.a>

                    {/* Mood Detector Card */}
                    <motion.a
                        href="/mood-detector"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl overflow-hidden"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }} />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex p-4 bg-white/20 backdrop-blur rounded-2xl mb-6">
                                <Smile className="w-12 h-12" />
                            </div>

                            <h3 className="text-3xl font-bold mb-4">AI Mood Detector</h3>
                            <p className="text-purple-100 text-lg mb-6">
                                Analyze your emotions through facial expressions and discover the science-backed power of smiling.
                            </p>

                            <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                                Try it now
                                <ArrowRight className="w-5 h-5" />
                            </div>

                            {/* Feature Highlights */}
                            <div className="mt-8 space-y-2">
                                <div className="flex items-center gap-2 text-sm text-purple-100">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    Real-time emotion detection
                                </div>
                                <div className="flex items-center gap-2 text-sm text-purple-100">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    Smile encouragement system
                                </div>
                                <div className="flex items-center gap-2 text-sm text-purple-100">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    Mood timeline tracking
                                </div>
                            </div>
                        </div>
                    </motion.a>
                </div>

                {/* Privacy Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                >
                    <p className="text-sm text-gray-500">
                        🔒 All AI processing happens locally in your browser. Your video never leaves your device.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
