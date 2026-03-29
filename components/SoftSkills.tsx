import { Brain, Search, Laptop, Lightbulb } from "lucide-react"

export default function SoftSkills() {
  return (
    <section className="py-16 bg-white pb-4 sm:py-20">
      <div className="text-center">
        <h3 className="text-sm font-semibold text-[#0078d4] uppercase tracking-wide">
          How I Help
        </h3>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          Operational Support & Back-Office Solutions
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="space-y-16">
          {[
            {
              icon: <Brain size={22} strokeWidth={2.7} />,
              label: "Structure Documents & Eliminate File Chaos",
              desc: "Keep files, folders and shared information clear and easy to follow.",
              problem: "Scattered files, duplicate versions and unclear structures.",
              solution: [
                "Organize shared folders and document libraries",
                "Ensure teams find the correct version quickly",
                "Keep shared information clear and consistent",
              ],
              tools: [
                { name: "SharePoint", icon: "/app-logos/core_tools/logo_sharepoint.svg" },
                { name: "OneDrive", icon: "/app-logos/core_tools/logo_one-drive.svg" },
                { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
                { name: "Word", icon: "/app-logos/productivity_tools/logo_word.svg" },
              ],
            },
            {
              icon: <Search size={22} strokeWidth={2.7} />,
              label: "Manage Shared Inboxes & Email Flow",
              desc: "Bring structure to busy inboxes and daily communication.",
              problem: "Unclear ownership, lost emails and slow responses.",
              solution: [
                "Organize incoming emails into clear categories",
                "Assign responsibility and follow-up",
                "Turn emails into clear tasks for follow-up",
              ],
              tools: [
                { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
                { name: "Planner", icon: "/app-logos/workflow_tools/logo_planner.svg" },
                { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
                { name: "Power Automate", icon: "/app-logos/workflow_tools/logo_power-automate.svg" },
              ],
            },
            {
              icon: <Laptop size={22} strokeWidth={2.7} />,
              label: "Track Tasks & Follow-Ups",
              desc: "Make daily work visible and easy to track.",
              problem: "Tasks lost in emails and missed deadlines.",
              solution: [
                "Convert daily work into clear task lists",
                "Track responsibilities and progress",
                "Keep deadlines visible for the team",
              ],
              tools: [
                { name: "Planner", icon: "/app-logos/workflow_tools/logo_planner.svg" },
                { name: "Lists", icon: "/app-logos/core_tools/logo_sharepoint-lists.svg" },
                { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
                { name: "OneNote", icon: "/app-logos/productivity_tools/logo_one-note.svg" },
              ],
            },
            {
              icon: <Lightbulb size={22} strokeWidth={2.7} />,
              label: "Support Daily Admin Work",
              desc: "Reduce repetitive tasks and keep daily work consistent.",
              problem: "Manual tasks, duplicated work and lack of clarity.",
              solution: [
                "Keep repetitive tasks simple and organized",
                "Create simple tracking systems",
                "Reduce errors in daily work",
              ],
              tools: [
                { name: "Excel", icon: "/app-logos/productivity_tools/logo_excel.svg" },
                { name: "Forms", icon: "/app-logos/productivity_tools/logo_forms.svg" },
                { name: "Power Automate", icon: "/app-logos/workflow_tools/logo_power-automate.svg" },
                { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
              ],
            },
          ].map((skill, index) => (
            <div
              key={skill.label}
              className={`flex flex-col sm:flex-row items-start gap-6 ${
                index !== 3 ? "pb-12 border-b border-gray-100" : ""
              }`}
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-[#0078d4]">
                {skill.icon}
              </div>

              <div className="flex-1 text-left">
                <h4 className="text-xl font-bold text-black">
                  {skill.label}
                </h4>

                <p className="text-gray-500 mt-2">
                  {skill.desc}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs text-black uppercase font-semibold mb-1">
                      Problem
                    </p>
                    <p className="text-gray-600">
                      {skill.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-black uppercase font-semibold mb-1">
                      How I support
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      {skill.solution.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs uppercase font-semibold mb-3">
                    Tools
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-2 py-1 rounded-md bg-gray-50 border border-gray-100"
                      >
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-4 h-4 object-contain"
                        />
                        <span className="text-xs text-gray-600">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}