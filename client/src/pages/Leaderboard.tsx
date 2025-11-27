import { motion } from "framer-motion";
import { Trophy, TrendingUp, Award, Star, Flame } from "lucide-react";

// Mock leaderboard data
const leaderboardData = [
    { rank: 1, name: "Priya Sharma", streak: 45, score: 9850, avatar: "🏆" },
    { rank: 2, name: "Rahul Verma", streak: 42, score: 9720, avatar: "🥈" },
    { rank: 3, name: "Ananya Patel", streak: 38, score: 9580, avatar: "🥉" },
    { rank: 4, name: "Vikram Singh", streak: 35, score: 9340, avatar: "⭐" },
    { rank: 5, name: "Sneha Reddy", streak: 33, score: 9180, avatar: "💫" },
    { rank: 6, name: "Arjun Kumar", streak: 30, score: 8950, avatar: "✨" },
    { rank: 7, name: "Meera Iyer", streak: 28, score: 8720, avatar: "🌟" },
    { rank: 8, name: "Rohan Gupta", streak: 25, score: 8500, avatar: "💪" },
    { rank: 9, name: "Kavya Nair", streak: 23, score: 8280, avatar: "🎯" },
    { rank: 10, name: "Aditya Joshi", streak: 20, score: 8050, avatar: "🚀" },
];

export default function Leaderboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Community Leaderboard
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See how you rank against others on their wellness journey. Compete, motivate, and celebrate together!
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white shadow-xl"
                    >
                        <Flame className="w-10 h-10 mb-3" />
                        <div className="text-3xl font-bold mb-1">45 Days</div>
                        <div className="text-yellow-100">Longest Streak</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-6 text-white shadow-xl"
                    >
                        <Trophy className="w-10 h-10 mb-3" />
                        <div className="text-3xl font-bold mb-1">1,247</div>
                        <div className="text-green-100">Active Users</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-6 text-white shadow-xl"
                    >
                        <Award className="w-10 h-10 mb-3" />
                        <div className="text-3xl font-bold mb-1">9,850</div>
                        <div className="text-purple-100">Top Score</div>
                    </motion.div>
                </div>

                {/* Leaderboard Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            <TrendingUp className="w-6 h-6" />
                            Top Performers This Month
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Rank
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Streak
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Score
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {leaderboardData.map((user, index) => (
                                    <motion.tr
                                        key={user.rank}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + index * 0.05 }}
                                        className={`hover:bg-indigo-50 transition-colors ${user.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : ''
                                            }`}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span className={`text-2xl font-bold ${user.rank === 1 ? 'text-yellow-500' :
                                                        user.rank === 2 ? 'text-gray-400' :
                                                            user.rank === 3 ? 'text-orange-600' :
                                                                'text-gray-600'
                                                    }`}>
                                                    #{user.rank}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <span className="text-3xl">{user.avatar}</span>
                                                <span className="font-semibold text-gray-800">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Flame className="w-5 h-5 text-orange-500" />
                                                <span className="font-bold text-gray-800">{user.streak} days</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Star className="w-5 h-5 text-yellow-500" />
                                                <span className="font-bold text-indigo-600">{user.score.toLocaleString()}</span>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-gray-50 p-6 text-center">
                        <p className="text-gray-600 mb-4">Want to see your name here?</p>
                        <a
                            href="/signin"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                            Join the Challenge
                        </a>
                    </div>
                </motion.div>

                {/* How Points Work */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200"
                >
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">How to Earn Points</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                                1
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Daily Check-ins</h4>
                                <p className="text-sm text-gray-600">Complete your daily tasks and maintain your streak (+100 points/day)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                                2
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Perfect Form</h4>
                                <p className="text-sm text-gray-600">Achieve 90%+ form quality in posture checks (+50 points/session)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                                3
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Mood Improvement</h4>
                                <p className="text-sm text-gray-600">Show consistent positive mood changes (+30 points/day)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                                4
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Milestone Achievements</h4>
                                <p className="text-sm text-gray-600">Complete 7, 14, 21, and 30-day milestones (+500 bonus points)</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
