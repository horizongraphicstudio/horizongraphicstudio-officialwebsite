import { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
  prompt(): Promise<void>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Only show banner if user hasn't dismissed it recently
      const dismissed = localStorage.getItem('pwa-banner-dismissed');
      if (!dismissed || Date.now() - parseInt(dismissed) > 24 * 60 * 60 * 1000) {
        setTimeout(() => setShowBanner(true), 3000); // Show after 3s
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setShowBanner(false);
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    setIsInstalling(true);

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
    } catch (err) {
      console.error('[Horizon PWA] Install error:', err);
    }

    setIsInstalling(false);
    setShowBanner(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('pwa-banner-dismissed', Date.now().toString());
  };

  if (isInstalled || !showBanner) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] max-w-md animate-in slide-in-from-bottom-8 duration-700">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1124]/95 backdrop-blur-2xl shadow-2xl shadow-black/50">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e5c158] to-transparent" />

        <div className="p-5">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#e5c158]/20 to-[#00b4d8]/10 border border-[#e5c158]/20 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-[#e5c158]" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-white mb-0.5">
                Install Horizon Studio
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Add to home screen for instant access, offline browsing & a native app experience.
              </p>
            </div>

            {/* Dismiss */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-1.5 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/5 transition-all duration-200"
              aria-label="Dismiss install prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={isInstalling}
            className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#e5c158] to-[#ffd166] text-[#070d18] font-semibold text-sm hover:shadow-lg hover:shadow-[#e5c158]/25 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-wait"
          >
            {isInstalling ? (
              <>
                <div className="w-4 h-4 border-2 border-[#070d18]/30 border-t-[#070d18] rounded-full animate-spin" />
                Installing...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Install App
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
