import { ShieldCheck } from "lucide-react";

export default function TrustBadges() {
  return (
    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-sm py-4">
      <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
      <span>Official ISOs · Always Free · No Registration</span>
    </div>
  );
}