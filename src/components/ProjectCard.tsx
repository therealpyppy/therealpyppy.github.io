import { Tag } from '@/components/tag'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  title: string
  description: string
  githubUrl?: string
  liveUrl?: string
  externalUrl?: string
  externalUrlText?: string
  tags?: Array<{
    text: string
    variant?: 'default' | 'live'
    size?: 'default' | 'sm' | 'lg' | 'icon'
  }>
  className?: string
}

export function ProjectCard({
  title,
  description,
  githubUrl,
  liveUrl,
  externalUrl,
  externalUrlText = "View Project",
  tags = [],
  className = ""
}: ProjectCardProps) {
  return (
    <div className={`bg-black/50 p-5 sm:p-8 rounded-[10px] shadow w-[90%] max-w-xl text-center flex flex-col items-center ${className}`}>
      <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-white text-base mb-4">{description}</p>
      
      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-row gap-3 justify-center items-center mb-4">
          {tags.map((tag, index) => (
            <Tag key={index} variant={tag.variant || 'default'} size={ tag.size || 'default' }>
              <strong>{tag.text}</strong>
            </Tag>
          ))}
        </div>
      )}
      
      <div className="flex flex-row gap-3 justify-center">
        {liveUrl && (
          <Button asChild variant="liveUrl">
            <a target='_blank' href={liveUrl}>
            View Demo
            </a>
          </Button>
        )}
        
        {githubUrl && (
          <Button asChild variant="githubUrl">
            <a target='_blank' href={githubUrl}>
            View Project
            </a>
          </Button>
        )}
        
        {externalUrl && !githubUrl && (
          <Button asChild variant="extendedUrl">
            <a target='_blank' href={externalUrl}>
                {externalUrlText}
            </a>
          </Button>
        )}
      </div>
    </div>
  )
} 