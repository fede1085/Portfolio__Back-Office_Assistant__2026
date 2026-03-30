import React from 'react';

interface SkillsProps {
  toolStack: Record<string, string[]>;
}

const Skills: React.FC<SkillsProps> = ({ toolStack }) => {

  // 👉 AI tools hardcoded (no dependen de constants todavía)
  const aiTools = [
    "Copilot (Microsoft 365)",
    "Copilot Studio",
    "ChatGPT",
    "Custom GPTs",
    "OpenAI Platform (AgentKit)",
    "Gemini",
    "Google AI Studio",
    "NotebookLM",
    "Perplexity",
    "Perplexity Labs"
  ];

  return (
    <section id="tools" className="pb-12 sm:py-20 sm:pb-28 text-[#333131]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-sm font-semibold text-[#0067B8] tracking-wider uppercase">
            Digital Tools
          </h2>
          <p className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Microsoft 365 & AI Tool Stack
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#333131]">
            Focused on Microsoft 365 and digital tools to organize information,
            manage documents and support team operations.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {Object.entries(toolStack || {}).map(([category, tools]) => {

            const categoryPathMap: Record<string, string> = {
              core_tools: "/app-logos/core_tools/",
              admin_tools: "/app-logos/admin_tools/",
              productivity_tools: "/app-logos/productivity_tools/",
              workflow_tools: "/app-logos/workflow_tools/",
            };

            const basePath = categoryPathMap[category] || "";

            const logoMap: Record<string, string> = {
              "Word": "logo_word.svg",
              "Excel": "logo_excel.svg",
              "PowerPoint": "logo_power-point.svg",
              "OneNote": "logo_one-note.svg",
              "Outlook": "logo_outlook.svg",
              "OneDrive": "logo_one-drive.svg",
              "Teams": "logo_teams.svg",
              "SharePoint": "logo_sharepoint.svg",
              "SharePoint Lists": "logo_sharepoint-lists.svg",
              "Copilot": "logo_copilot.svg",
              "Forms": "logo_forms.svg",
              "Planner": "logo_planner.svg",
              "Power Apps": "logo_power-apps.svg",
              "Power Automate": "logo_power-automate.svg",
              "MS365 Admin Center": "logo_admin-center.svg",
              "Teams Admin Center": "logo_teams-admin-center.svg",
              "SharePoint Admin Center": "logo_sharepoint-admin-center.svg"
            };

            return (
              <div key={category}>
                <h3 className="text-lg font-bold text-[#333131] tracking-wide capitalize mb-4 border-b border-gray-200 pb-2">
                  {category.replace(/_/g, ' ')}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {((tools as string[]) || []).map((tool) => {
                    const fileName = logoMap[tool];
                    const logoPath = fileName
                      ? `${basePath}${fileName}`
                      : "/app-logos/microsoft-logo.svg";

                    return (
                      <div
                        key={tool}
                        className="flex items-center gap-1 px-2 py-1 rounded-sm border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <img
                          src={logoPath}
                          alt={tool}
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {tool}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* 🔥 NUEVA SECCIÓN AI TOOLS */}
          <div>
            <h3 className="text-lg font-bold text-[#333131] tracking-wide capitalize mb-4 border-b border-gray-200 pb-2">
              AI support tools
            </h3>

            <div className="flex flex-wrap gap-4">
              {aiTools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-1 px-2 py-1 rounded-sm border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-700">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;