export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-white/5 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-accent-gold-light to-accent-gold flex items-center justify-center">
              <span className="text-black font-bold font-heading text-sm">A</span>
            </div>
            <span className="text-lg font-heading font-semibold tracking-wide text-white">
              Ascend Digital
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#services" className="hover:text-accent-gold transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-accent-gold transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-accent-gold transition-colors">Contact</a>
            <div className="w-px h-4 bg-white/10 hidden md:block"></div>
            <a 
              href="https://www.instagram.com/ascenddigital_official/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-accent-gold transition-all duration-300 hover:scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Ascend Digital. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
