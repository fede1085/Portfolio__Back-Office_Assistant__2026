import React from 'react';

interface SkillsProps {
  toolStack: Record<string, string[]>;
}

const Skills: React.FC<SkillsProps> = ({ toolStack }) => {

  // 👉 SOLO mostramos estas categorías
  const allowedCategories = ["core_tools", "extended_toolset"];

  // 👉 CORE TOOLS (office worker)
  const coreAllowed = ["Outlook", "Excel", "Teams", "SharePoint", "OneDrive", "Copilot"];

  // 👉 estado para acordeón
  const [showMore, setShowMore] = React.useState(false);

  return (
    <section id="tools" className="pb-1 sm:py-20 sm:pb-12 text-[#333131]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-sm font-medium text-[#0067B8] tracking-widest uppercase">
            Digital Tools
          </h2>
          <p className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Microsoft 365 Tools
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#333131]">
            Tools I use daily to organize information, manage documents and support team operations.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {Object.entries(toolStack || {})
            .filter(([category]) => allowedCategories.includes(category))
            .map(([category, tools]) => {

              // ✅ FIX TypeScript
              const toolsArray = tools as string[];

              // ✅ NUEVO: rutas reales por tool (fix imágenes)
              const toolPathMap: Record<string, string> = {
                // core
                "Outlook": "/app-logos/core_tools/logo_outlook.svg",
                "Excel": "/app-logos/productivity_tools/logo_excel.svg",
                "Teams": "/app-logos/core_tools/logo_teams.svg",
                "SharePoint": "/app-logos/core_tools/logo_sharepoint.svg",
                "OneDrive": "/app-logos/core_tools/logo_one-drive.svg",
                "Copilot": "/app-logos/productivity_tools/logo_copilot.svg",

                // productivity
                "Word": "/app-logos/productivity_tools/logo_word.svg",
                "PowerPoint": "/app-logos/productivity_tools/logo_power-point.svg",
                "OneNote": "/app-logos/productivity_tools/logo_one-note.svg",
                "Forms": "/app-logos/productivity_tools/logo_forms.svg",

                // workflow
                "Planner": "/app-logos/workflow_tools/logo_planner.svg",
                "Power Apps": "/app-logos/workflow_tools/logo_power-apps.svg",
                "Power Automate": "/app-logos/workflow_tools/logo_power-automate.svg",

                // admin
                "MS365 Admin Center": "/app-logos/admin_tools/logo_admin-center.svg",
                "Teams Admin Center": "/app-logos/admin_tools/logo_teams-admin-center.svg",
                "SharePoint Admin Center": "/app-logos/admin_tools/logo_sharepoint-admin-center.svg",

                // special
                "SharePoint Lists": "/app-logos/core_tools/logo_sharepoint-lists.svg"
              };

              let filteredTools: string[] = [];

              // ✅ CORE → filtrado + Copilot
              if (category === "core_tools") {
                filteredTools = toolsArray.filter(tool => coreAllowed.includes(tool));

                if (!filteredTools.includes("Copilot")) {
                  filteredTools.push("Copilot");
                }
              }

              // ✅ PRODUCTIVITY → todo lo que NO es core
              if (category === "extended_toolset") {

                const allTools = Object.values(toolStack).flat() as string[];

                filteredTools = allTools.filter(tool => !coreAllowed.includes(tool));

                filteredTools = Array.from(new Set(filteredTools));

                if (!showMore) {
                  filteredTools = [];
                }
              }

              return (
                <div key={category}>
                  <h3 className="text-lg font-bold text-[#333131] tracking-wide capitalize mb-4 border-b border-gray-200 pb-2">
                    {category.replace(/_/g, ' ')}
                  </h3>

                  {filteredTools.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                      {filteredTools.map((tool) => {

                        // ✅ FIX real de imagen
                        const logoPath = toolPathMap[tool] || "/app-logos/microsoft-logo.svg";

                        return (
                          <div
                            key={tool}
                            className="flex items-center gap-1 px-2 py-1 rounded-sm border border-gray-200 bg-[#F7F7F7] hover:bg-gray-200 transition-colors"
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
                  )}

                  {category === "extended_toolset" && (
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="mt-4 text-sm text-[#0067B8] hover:underline"
                    >
                      {showMore ? "Hide toolset" : "View full toolset"}
                    </button>
                  )}

                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
};

export default Skills;