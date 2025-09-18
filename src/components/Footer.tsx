import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t py-3">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between text-sm text-gray-600">
        <div>
          <strong>Ethio Scholar</strong> — 123 Addis Ababa St., Addis Ababa,
          Ethiopia
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
