// import { Puzzle, Rocket, Users } from "lucide-react"

export default function SoftSkills() {
  return (
    <section className="py-16 bg-white text-center pb-12 sm:py-20">
      {/* Título */}
      <div className="mb-12">
        <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
          Soft Skills
        </h3>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          Human-Centered Competencies
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {[
          { emoji: "🧩", label: "Analytical Thinking", desc: "Interpretar procesos, datos y patrones." },
          { emoji: "🔍", label: "Problem Solving", desc: "Aplicar IA y automatización de forma práctica." },
          { emoji: "🤝", label: "Collaboration & Teamwork", desc: "Trabajar con equipos multidisciplinares." },
          { emoji: "🧠", label: "Critical Thinking", desc: "Evaluar datos y decisiones con criterio." },
          { emoji: "✨", label: "Creativity & Innovation", desc: "Diseñar soluciones nuevas con low-code." },
          { emoji: "💡", label: "Empathy & User-Centric Approach", desc: "Entender el uso real de la tecnología." },
          { emoji: "🚀", label: "Self-Management & Proactivity", desc: "Tomar iniciativa en proyectos." },
          { emoji: "📚", label: "Continuous Learning", desc: "Mantenerse actualizado en IA y automatización." },
          // { emoji: "💬", label: "Communication Skills", desc: "Traducir lo técnico a lenguaje de negocio." },
          // { emoji: "🌐", label: "Leadership through Enablement", desc: "Empoderar a otros a usar IA sin miedo." },
        ].map((skill) => (
          <div
            key={skill.label}
            className="flex flex-col items-center bg-white border border-gray-300 rounded-[4px] p-4 hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl mb-2">{skill.emoji}</span>
            <h4 className="text-sm font-medium text-black">{skill.label}</h4>
            <p className="text-xs text-gray-500 mt-1">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
