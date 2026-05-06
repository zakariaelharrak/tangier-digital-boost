import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/212752104769"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center text-white shadow-2xl transition hover:scale-110"
      style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 150), oklch(0.7 0.2 145))", boxShadow: "0 10px 30px -5px oklch(0.6 0.2 145 / 0.6)" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
