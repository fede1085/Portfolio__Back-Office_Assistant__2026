import { Brain, Search, Laptop, Lightbulb, Rocket, Users } from "lucide-react"

export default function SoftSkills() {
  return (
    <section className="py-16 bg-white text-center pb-12 sm:py-20">
      {/* Título */}
      <div className="mb-12">
        <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
          Soft Skills
        </h3>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333131]">
          Work Approach & Competencies
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {[
          { icon: <Brain size={28} />, label: "Analytical Thinking", desc: "Understand processes, patterns and information flows." },
          { icon: <Search size={28} />, label: "Problem Solving", desc: "Approach administrative tasks with practical solutions." },
          { icon: <Laptop size={28} />, label: "Digital Curiosity", desc: "Interest in modern digital tools and productivity systems." },
          { icon: <Lightbulb size={28} />, label: "User-Focused Mindset", desc: "Understand how technology supports real users." },
          { icon: <Rocket size={28} />, label: "Self-Management & Initiative", desc: "Take initiative and organize work independently." },
          { icon: <Users size={28} />, label: "Collaboration & Teamwork", desc: "Work comfortably with colleagues across departments." },
        ].map((skill) => (
          <div
            key={skill.label}
            className="flex flex-col items-center bg-white rounded-[4px] p-4 hover:bg-gray-100 transition-colors"
          >
            {/* ICONO */}
            <div className="mb-2 text-purple-600">
              {skill.icon}
            </div>

            <h4 className="text-lg font-bold text-[#333131]">{skill.label}</h4>
            <p className="text-md text-[#333131] mt-1">{skill.desc}</p>
          </div>
        ))}
      </div>


    </section>
  )
}