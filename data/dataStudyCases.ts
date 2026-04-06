export const CASES = {
  "shared-inbox": {
    title: "Shared Inbox & Email Follow-Up Administration Process",
    label: "Email Inbox Processing & Task Assignment Workflow",
    desc: "Implemented a structured workflow to transform incoming emails into assigned tasks and improve follow-up across a back-office team.",
    problem: `The team managed a shared inbox receiving 50+ emails per day, including orders, delivery changes, and client requests.
              There was no clear system to assign responsibility or track progress.
              As a result:
              - Emails were missed or answered late
              - Multiple people responded to the same request
              - Tasks were hidden inside email threads
              - There was no visibility of pending work`,

    approach: `Designed and implemented a simple, structured workflow using Microsoft Teams and Planner to convert emails into actionable tasks.
               The goal was to create clarity, ownership, and visibility without adding complexity or new tools.`,

    implementation: [
      "Created a dedicated Team and channel for operations",
      "Added a Planner board to centralize all incoming requests",
      "Defined workflow stages: New, In Progress, Waiting, Done",
      "Converted incoming emails into Planner tasks",
      "Assigned responsibility for each request",
      "Added deadlines to ensure follow-up",
      "Used Planner within Teams as the central workspace"
    ],

    result: [
      "Improved visibility of all incoming requests",
      "Clear ownership of tasks across the team",
      "Reduced missed or duplicated responses",
      "Faster and more consistent client follow-up"
    ],

    tools: [
      { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
      { name: "Planner", icon: "/app-logos/workflow_tools/logo_planner.svg" },
      { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
    ],
  },
  
  "document-management": {
  title: "Document Management & Shared Library Organization",
  label: "Shared Document Structure & Version Control System",
  desc: "Organized and standardized document management across shared folders and libraries to improve access, reduce duplication, and ensure version clarity.",
  problem: `The team worked with shared folders across OneDrive, Teams, and SharePoint without a clear structure.
            Files were scattered across multiple locations, often duplicated, and naming conventions were inconsistent.
            As a result:
            - Employees struggled to find the correct documents
            - Multiple versions of the same file existed
            - Time was lost searching or recreating documents
            - There was no clear ownership or structure for shared information`,

  approach: `Designed a simple and scalable folder and document structure to centralize information and make it easy for the team to store, find, and maintain files.
             The focus was on clarity, consistency, and ease of use without adding complexity.`,

  implementation: [
    "Analyzed existing folder structures and identified duplication issues",
    "Designed a clear folder hierarchy by department and function",
    "Defined simple naming conventions for files and folders",
    "Centralized documents into shared libraries (SharePoint / Teams)",
    "Removed duplicate and outdated files",
    "Ensured only one active version per document",
    "Guided team on where and how to store documents correctly"
  ],

  result: [
    "Faster access to documents across the team",
    "Reduced duplication and version confusion",
    "Clear and consistent file organization",
    "Improved collaboration in shared environments",
    "Less time wasted searching for information"
  ],

  tools: [
    { name: "SharePoint", icon: "/app-logos/core_tools/logo_sharepoint.svg" },
    { name: "OneDrive", icon: "/app-logos/core_tools/logo_one-drive.svg" },
    { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
    { name: "Word", icon: "/app-logos/productivity_tools/logo_word.svg" },
  ],
},
"task-tracking": {
  title: "Task Tracking & Team Workflow Management",

  label: "Task Management & Follow-Up System",

  desc: "Implemented a structured system to track tasks, responsibilities, and progress across teams, improving visibility and follow-up in daily operations.",

  problem: `The team managed tasks through emails, chats, and informal communication without a centralized system.

Work was often unclear, deadlines were missed, and responsibilities were not clearly assigned.

As a result:
- Tasks were lost or forgotten
- There was no clear overview of ongoing work
- Deadlines were missed or not tracked
- Team members lacked visibility on progress and priorities`,

  approach: `Designed a simple and centralized task tracking system to make all work visible, assign clear ownership, and ensure consistent follow-up.

The focus was to reduce confusion and create clarity without adding unnecessary complexity.`,

  implementation: [
    "Identified how tasks were currently managed across emails and Teams",
    "Created a centralized task board using Microsoft Planner / Lists",
    "Defined clear task stages (New, In Progress, Completed)",
    "Assigned responsibility for each task",
    "Added deadlines and priorities",
    "Used Teams to centralize communication and visibility",
    "Encouraged daily use and regular task updates"
  ],

  result: [
    "Clear visibility of all tasks and responsibilities",
    "Improved follow-up and accountability",
    "Reduced missed deadlines",
    "Better coordination across team members",
    "More structured and predictable daily operations"
  ],

  tools: [
    { name: "Planner", icon: "/app-logos/workflow_tools/logo_planner.svg" },
    { name: "Lists", icon: "/app-logos/core_tools/logo_sharepoint-lists.svg" },
    { name: "Teams", icon: "/app-logos/core_tools/logo_teams.svg" },
    { name: "OneNote", icon: "/app-logos/productivity_tools/logo_one-note.svg" },
  ],
},
"administrative-support": {
  title: "Daily Administrative Process Optimization",

  label: "Structured Administrative Workflow & Task Support",

  desc: "Improved daily administrative operations by organizing repetitive tasks, reducing manual work, and ensuring consistency across back-office processes.",

  problem: `Daily administrative work was handled manually across different tools without a clear structure.

Tasks were repetitive, sometimes duplicated, and there was no consistent way to track or standardize processes.

As a result:
- Time was lost on repetitive manual work
- Errors occurred due to inconsistent handling of tasks
- Work was duplicated across team members
- There was limited visibility on daily administrative activities`,

  approach: `Analyzed recurring administrative tasks and introduced simple structures to standardize and streamline daily operations.

The goal was to reduce manual effort, improve consistency, and make daily work easier to manage without adding complexity.`,

  implementation: [
    "Identified repetitive administrative tasks across daily operations",
    "Standardized task handling using simple templates and structures",
    "Organized recurring tasks into clear workflows",
    "Used Excel and Forms to structure data input and tracking",
    "Reduced duplication by centralizing task handling",
    "Improved clarity on responsibilities and task execution",
    "Ensured consistent handling of recurring processes"
  ],

  result: [
    "Reduced time spent on repetitive administrative tasks",
    "Fewer errors in daily operations",
    "More consistent and structured workflows",
    "Improved efficiency in back-office processes",
    "Better visibility of daily administrative work"
  ],

  tools: [
    { name: "Excel", icon: "/app-logos/productivity_tools/logo_excel.svg" },
    { name: "Forms", icon: "/app-logos/productivity_tools/logo_forms.svg" },
    { name: "Outlook", icon: "/app-logos/core_tools/logo_outlook.svg" },
    { name: "Power Automate", icon: "/app-logos/workflow_tools/logo_power-automate.svg" },
  ],
}
}