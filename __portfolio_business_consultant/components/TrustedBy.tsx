// components/TrustedBy.tsx
import React, { useEffect, useState } from "react";

type LogoItem = { name: string; src?: string; role?: string };

const LogoPlaceholder: React.FC<{ text: string }> = ({ text }) => (
  <div className="text-gray-400 font-blackk text-sm text-center tracking-wide">
    {text}
  </div>
);

const PRIMARY_LOGOS: LogoItem[] = [
  { name: "Google Workspace", src: "/assets/logos/google-workspace.svg", role: "productivity & collaboration" },
  { name: "OpenAI", src: "/assets/logos/openai.svg", role: "generative AI & copilots" },
  { name: "n8n", src: "/assets/logos/n8n.svg", role: "workflow orchestration" },
  { name: "Zapier", src: "/assets/logos/zapier.svg", role: "integrations & automations" },
  { name: "HeyGen", src: "/assets/logos/heygen.svg", role: "digital avatars" },
  { name: "ComfyUI", src: "/assets/logos/comfyui.svg", role: "local image/video prompt workflows" },
];

const FULL_TOOLSET = {
  "AI Generation": [
    "OpenAI (ChatGPT, Custom GPTs, Codex)",
    "Google AI (Gemini, AI Studio)",
    "Veo3 / Nano Banana / Sora"
  ],
  "Automation & Agents": [
    "n8n",
    "Zapier",
    "Make",
    "Manus AI"
  ],
  "Development & Design": [
    "Figma",
    "Visual Studio Code",
    "Firebase / Google Stitch"
  ],
  "Productivity / Collaboration": [
    "Google Workspace",
    "Notion"
  ],
  "Digital Avatars & Voice": [
    "HeyGen",
    "ElevenLabs",
    "D-ID"
  ],
  "Multimedia / Creative": [
    "ComfyUI",
    "Adobe Firefly",
    "Veo3"
  ]
};

const TrustedBy: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // close modal on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section className="bg-gray-100 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-black text-lg mb-8">
            Tools I work with to deliver fast, secure AI & automation.
          </p>

          {/* Primary logos */}
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {PRIMARY_LOGOS.map((l) => (
              <li key={l.name} className="w-28 h-12 flex items-center justify-center">
                {l.src ? (
                  // Use <img> so it's easy to swap with actual SVG files in public/
                  <img
                    src={l.src}
                    alt={`${l.name} — ${l.role ?? ""}`}
                    title={l.name}
                    className="max-h-10 object-contain"
                    onError={(e) => {
                      // fallback to placeholder text if image fails to load
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = document.createElement("div");
                        fallback.className = "text-gray-400 font-black text-sm tracking-wide text-center";
                        fallback.textContent = l.name;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                ) : (
                  <LogoPlaceholder text={l.name} />
                )}
              </li>
            ))}
          </ul>

          <div className="text-center mt-6">
            <button
              onClick={() => setIsOpen(true)}
              className="text-sm underline text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-haspopup="dialog"
            >
              See full toolset
            </button>
          </div>
        </div>
      </section>

      {/* Modal: Full toolset */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 flex items-start justify-center p-6"
        >
          {/* backdrop */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-50 max-w-3xl w-full bg-white rounded-lg shadow-lg p-6 overflow-auto max-h-[80vh]">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-lg font-semibold">Full toolset</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Close full toolset"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              My curated toolset for rapid AI, automation and creative work. Below are categories and the main tools I use.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(FULL_TOOLSET).map(([category, tools]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">{category}</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tools.map((t) => (
                      <li key={t}>• {t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-100 rounded text-sm hover:bg-gray-200 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrustedBy;
