// Astra product content, sourced from the Astra app (TNSA Astra repository):
// connectors from lib/composio-connectors.ts, approval policy from
// docs/agent-execution-contract.md, plans from app/subscriptions, Gens from app/gens-store.

export type AstraProduct = {
  slug: string
  name: string
  label: string
  icon: string
  status?: string
  description: string
  capabilities: string[]
}

export const astraProducts: AstraProduct[] = [
  {
    slug: 'work',
    name: 'Astra Work',
    label: 'General work agent',
    icon: '/astra/astra-work.svg',
    description:
      'A grounded workspace for research, analysis, planning, and multi-step work across projects, knowledge bases, and connected applications.',
    capabilities: ['Projects and task context', 'Knowledge-grounded answers', 'Connected app actions', 'Plan and approval modes'],
  },
  {
    slug: 'vibe',
    name: 'Vibe',
    label: 'Software engineering agent',
    icon: '/astra/vibe.svg',
    description:
      'A code-focused environment that understands repositories, branches, and commit history before it proposes or makes changes.',
    capabilities: ['Repository-aware reasoning', 'Branch and commit workflows', 'Visible tool activity', 'Developer connectors'],
  },
  {
    slug: 'awaaz',
    name: 'Awaaz',
    label: 'Voice agent platform',
    icon: '/astra/awaaz.svg',
    status: 'In development',
    description:
      'Voice agents that listen, reason, and speak in natural, multilingual conversation, and hand off to approved work.',
    capabilities: ['Realtime conversation', 'Multilingual voices', 'Configurable agent roles', 'Connected workflows'],
  },
  {
    slug: 'docs',
    name: 'Doc Agents',
    label: 'Document intelligence',
    icon: '/astra/doc-agents.svg',
    description:
      'Extract, digitize, translate, and reason over documents while keeping the source context behind every result.',
    capabilities: ['OCR and structured extraction', 'Document digitization', 'Translation workspaces', 'Reusable project context'],
  },
]

export type ToolClass = 'read' | 'safe_write' | 'consequential_write'
export type Decision = 'execute' | 'ask' | 'scoped'

export const toolClasses: { id: ToolClass; name: string; description: string; examples: string }[] = [
  { id: 'read', name: 'Read', description: 'No external change.', examples: 'Search mail, read files, query a sheet' },
  { id: 'safe_write', name: 'Safe write', description: 'Reversible, private change.', examples: 'Draft a reply, create a private note' },
  {
    id: 'consequential_write',
    name: 'Consequential write',
    description: 'Sends, publishes, shares, deletes, deploys, or changes permissions.',
    examples: 'Send an email, publish a post, merge a PR',
  },
]

export const approvalModes: {
  id: 'ask' | 'auto_safe' | 'full'
  name: string
  summary: string
  policy: Record<ToolClass, Decision>
}[] = [
  {
    id: 'ask',
    name: 'Ask for approval',
    summary: 'Astra pauses before any connected action and waits for you.',
    policy: { read: 'ask', safe_write: 'ask', consequential_write: 'ask' },
  },
  {
    id: 'auto_safe',
    name: 'Approve for me',
    summary: 'The default. Reads and reversible changes run; anything consequential waits for you.',
    policy: { read: 'execute', safe_write: 'execute', consequential_write: 'ask' },
  },
  {
    id: 'full',
    name: 'Full access',
    summary: 'Astra completes the work end to end, always within OAuth scopes and organization policy.',
    policy: { read: 'execute', safe_write: 'execute', consequential_write: 'scoped' },
  },
]

export const approvalGuarantees = [
  'Each approval is single-use and bound to the exact arguments you reviewed.',
  'Approvals expire after ten minutes or when the run ends.',
  'No tool starts before it is authorized.',
  'Full access never expands provider scopes or organization policy.',
]

export type ConnectorCategory = 'Productivity' | 'Communication' | 'Developer' | 'Data' | 'CRM' | 'Research' | 'Automation'

// Logos are local copies of Composio's toolkit logos (public/astra/connectors).
export const connectors: { name: string; logo: string; category: ConnectorCategory; description: string }[] = [
  { name: 'Gmail', logo: 'gmail', category: 'Communication', description: 'Search mail, draft replies, send messages, and manage labels.' },
  { name: 'GitHub', logo: 'github', category: 'Developer', description: 'Work with repositories, code, issues, pull requests, and releases.' },
  { name: 'Google Calendar', logo: 'googlecalendar', category: 'Productivity', description: 'Read calendars, find availability, and create or update events.' },
  { name: 'Notion', logo: 'notion', category: 'Productivity', description: 'Search, create, and update pages, databases, and workspace knowledge.' },
  { name: 'Google Sheets', logo: 'googlesheets', category: 'Data', description: 'Read, transform, and update spreadsheet data and ranges.' },
  { name: 'Slack', logo: 'slack', category: 'Communication', description: 'Search conversations and work with channels, threads, and messages.' },
  { name: 'Supabase', logo: 'supabase', category: 'Data', description: 'Work with approved database, storage, auth, and project resources.' },
  { name: 'Outlook', logo: 'outlook', category: 'Communication', description: 'Handle Outlook mail, calendar, contacts, and folders.' },
  { name: 'Perplexity AI', logo: 'perplexityai', category: 'Research', description: 'Run cited web research and retrieve current information.' },
  { name: 'Twitter', logo: 'twitter', category: 'Communication', description: 'Search, publish, and manage authorized social activity.' },
  { name: 'Google Drive', logo: 'googledrive', category: 'Productivity', description: 'Find, organize, upload, and use files from Drive.' },
  { name: 'Google Docs', logo: 'googledocs', category: 'Productivity', description: 'Create, read, and update collaborative documents.' },
  { name: 'HubSpot', logo: 'hubspot', category: 'CRM', description: 'Work with contacts, companies, deals, tickets, and engagement data.' },
  { name: 'Linear', logo: 'linear', category: 'Developer', description: 'Manage issues, projects, cycles, roadmaps, and product workflows.' },
  { name: 'Airtable', logo: 'airtable', category: 'Data', description: 'Read and update records, bases, tables, and views.' },
  { name: 'Code Interpreter', logo: 'codeinterpreter', category: 'Developer', description: 'Run isolated calculations and data-processing tasks.' },
  { name: 'SerpApi', logo: 'serpapi', category: 'Research', description: 'Search web, local, image, news, shopping, and other result indexes.' },
  { name: 'Jira', logo: 'jira', category: 'Developer', description: 'Search and manage issues, projects, boards, and engineering workflows.' },
  { name: 'Firecrawl', logo: 'firecrawl', category: 'Research', description: 'Crawl and extract structured content from websites.' },
  { name: 'Tavily', logo: 'tavily', category: 'Research', description: 'Search and extract web sources for research-focused tasks.' },
  { name: 'YouTube', logo: 'youtube', category: 'Communication', description: 'Search videos and work with authorized channel and video data.' },
  { name: 'Slackbot', logo: 'slackbot', category: 'Automation', description: 'Automate Slack notifications and bot-led workspace actions.' },
  { name: 'Canvas', logo: 'canvas', category: 'Productivity', description: 'Work with courses, assignments, users, and learning content.' },
  { name: 'Bitbucket', logo: 'bitbucket', category: 'Developer', description: 'Use repositories, branches, commits, pull requests, and pipelines.' },
  { name: 'Google Tasks', logo: 'googletasks', category: 'Productivity', description: 'Create and organize personal task lists and due dates.' },
  { name: 'Discord', logo: 'discord', category: 'Communication', description: 'Work with authorized servers, channels, threads, and messages.' },
  { name: 'Figma', logo: 'figma', category: 'Productivity', description: 'Access files, projects, components, comments, and design metadata.' },
  { name: 'Reddit', logo: 'reddit', category: 'Communication', description: 'Search communities and work with authorized posts and comments.' },
  { name: 'Cal', logo: 'cal', category: 'Productivity', description: 'Manage scheduling links, bookings, availability, and event types.' },
  { name: 'Wrike', logo: 'wrike', category: 'Productivity', description: 'Work with projects, folders, tasks, owners, and progress.' },
  { name: 'Composio', logo: 'composio', category: 'Automation', description: 'Inspect and manage the connected Composio tool environment.' },
  { name: 'Composio Search', logo: 'composio_search', category: 'Research', description: 'Discover the right Composio tools for a requested action.' },
]

export const connectorCategories = ['All', 'Productivity', 'Communication', 'Developer', 'Data', 'CRM', 'Research', 'Automation'] as const

export const featuredGens = [
  { name: 'Architect Core', category: 'Programming', mandala: 'green', description: 'Software architecture, system design, and scalable infrastructure planning.' },
  { name: 'Creative Muse', category: 'Writing', mandala: 'pink', description: 'A writing companion for scriptwriting, world-building, and storytelling.' },
  { name: 'Quant Advisor', category: 'Research & Analysis', mandala: 'cyan', description: 'Financial modeling, market analysis, and economic forecasting.' },
]

export const mandalas = ['silver', 'green', 'brown', 'pink', 'purple', 'blue', 'yellow', 'cyan', 'orange']

export const astraPlans = [
  {
    name: 'Astra Lite',
    caption: 'A focused workspace for small teams beginning with Astra.',
    cta: 'Get started',
    href: '/company/contact',
    features: ['Astra Work powered by NGen', 'Projects, tasks, and document context', 'Connected app access through Composio', 'Workspace approvals and team controls'],
  },
  {
    name: 'Astra Pro',
    caption: 'More capacity and control for teams running Astra every day.',
    cta: 'Upgrade to Pro',
    href: '/company/contact',
    popular: true,
    features: ['Everything in Astra Lite', 'Full connector catalogue and agent workflows', 'Higher-capacity document and project context', 'Priority model and tool execution', 'Advanced approval and planning controls'],
  },
  {
    name: 'Astra Enterprise',
    caption: 'Usage-based access for organizations with custom operating needs.',
    cta: 'Talk to TNSA',
    href: '/company/contact',
    features: ['Pay only for the model and tool usage you consume', 'Organization-wide governance and deployment controls', 'Private connectors and custom integrations', 'Dedicated implementation and support', 'Enterprise security and procurement support'],
  },
]
