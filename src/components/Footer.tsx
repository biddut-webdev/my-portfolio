const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-5 py-7">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <a href="#home" className="text-sm font-bold text-slate-900">
          Biddut<span className="text-blue-600">.</span>
        </a>

        <p className="text-sm text-slate-500">
          © 2026 Biddut Hossen. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;