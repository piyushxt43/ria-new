import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

type FloatingSOSButtonProps = {
  onClick: () => void;
};

export default function FloatingSOSButton({ onClick }: FloatingSOSButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-br from-rose-500 to-orange-400 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-rose-400/40"
      animate={{ boxShadow: ["0 20px 35px rgba(255,107,107,0.4)", "0 12px 25px rgba(255,107,107,0.2)"], scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <AlertTriangle size={18} />
      SOS
    </motion.button>
  );
}

