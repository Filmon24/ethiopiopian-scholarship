// ...existing code...
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white/90 dark:bg-slate-900/80 border-t border-gray-200 dark:border-slate-700 py-4 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-600 dark:text-gray-300 transition-colors">
        <div className="text-center sm:text-left">
          <strong className="block text-gray-800 dark:text-gray-100">
            Ethio Scholar
          </strong>
          <span className="block text-gray-600 dark:text-gray-300">
            123 Addis Ababa St., Addis Ababa, Ethiopia
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/support" className="text-blue-600 hover:underline">
            Support
          </Link>
          <a
            href="mailto:info@ethio-scholar.org"
            className="text-blue-600 hover:underline"
          >
            info@ethio-scholar.org
          </a>
        </div>
      </div>
    </footer>
  );
}
// ...existing code...
