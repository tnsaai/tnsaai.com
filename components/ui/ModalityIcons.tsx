import type { LucideIcon } from 'lucide-react'
import { FileText, Image as ImageIcon, Mic, Sparkles, Type, Video } from 'lucide-react'

// Same icon vocabulary as the model pages on platform.tnsaai.com.
const icons: Record<string, LucideIcon> = {
  text: Type,
  image: ImageIcon,
  images: ImageIcon,
  audio: Mic,
  speech: Mic,
  video: Video,
  file: FileText,
  files: FileText,
}

export function modalityIcon(label: string): LucideIcon {
  return icons[label.trim().toLowerCase()] ?? Sparkles
}

/** True when every comma-separated item is a known modality, e.g. "Text, image". */
export function isModalityList(value: string) {
  const items = value.split(',').map((item) => item.trim().toLowerCase()).filter(Boolean)
  return items.length > 0 && items.every((item) => item in icons)
}

/** Renders a list like "Text, image, audio, video" as labelled icon chips. */
export function ModalityIcons({ value, className = '' }: { value: string; className?: string }) {
  const items = value.split(',').map((item) => item.trim()).filter(Boolean)

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label={value}>
      {items.map((item) => {
        const Icon = modalityIcon(item)
        return (
          <li key={item} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-black">
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="capitalize">{item}</span>
          </li>
        )
      })}
    </ul>
  )
}
