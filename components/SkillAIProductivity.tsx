import React from "react"

export default function SkillAIProductivity() {
  return (
    <section className="py-16 bg-white pt-0 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-16">
          
          <div className="flex flex-col sm:flex-row items-start gap-6 pb-12 border-b border-gray-200">
            
            {/* spacer (mantiene alineación con otros bloques) */}
            <div className="w-11 h-11 flex items-center justify-center" />

            {/* content */}
            <div className="flex-1 text-left">
              
              <h4 className="text-xl font-bold text-[#333131]">
                AI-Enhanced Productivity & Information Structuring
              </h4>

              <p className="text-[#333131] mt-2">
                Prepare and structure information before integrating it into Microsoft 365 workflows.
              </p>

              {/* PROBLEM */}
              <div className="mt-6">
                <p className="text-xs text-[#333131] uppercase font-semibold mb-1">
                  Problem
                </p>
                <p className="text-gray-600">
                  Unstructured information, scattered data and unclear task ownership slow down daily operations.
                </p>
              </div>

              {/* HOW I SUPPORT */}
              <div className="mt-6">
                <p className="text-xs text-[#333131] uppercase font-semibold mb-1">
                  How I support
                </p>

                <ul className="space-y-1 text-gray-600">
                  <li>• Research and analyze information from different sources</li>
                  <li>• Create clear summaries and extract key insights</li>
                  <li>• Structure tasks, priorities and follow-ups</li>
                  <li>• Prepare project notes, reports and documentation</li>
                  <li>• Organize information into clear and usable formats</li>
                  <li>• Improve clarity before sharing across teams</li>
                </ul>
              </div>

              {/* APPROACH (reemplaza tools) */}
              <div className="mt-6">
                <p className="text-xs text-[#333131] uppercase font-semibold mb-3">
                  Approach
                </p>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Prepare → structure → organize → deliver</p>
                  <p>• AI-enhanced workflow to simplify and clarify information</p>
                  <p>• Deliver ready-to-use content into Microsoft 365 environments</p>
                </div>
              </div>

              {/* FOOT LINE */}
              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  Improves clarity, reduces errors and makes daily administrative work easier to manage.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}