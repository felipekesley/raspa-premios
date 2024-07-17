import { useEffect, useState } from "react";

export const usePwaInstallPrompt = () => {
  const [show, setShow] = useState(false);
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [prompt, setPrompt] = useState<any>(null);

  useEffect(() => {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setPrompt(e);

      if (!window.matchMedia("(display-mode: standalone)").matches) {
        setShow(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = () => {
    if (prompt) {
      prompt.prompt();
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      prompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("PWA installed");
        } else {
          console.log("PWA installation dismissed");
        }
        setPrompt(null);
        setShow(false);
      });
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  return {
    show,
    handleInstall,
    handleClose,
  };
};
