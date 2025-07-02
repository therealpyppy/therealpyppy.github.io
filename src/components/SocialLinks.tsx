import { Button } from '@/components/ui/button'

interface SocialLink {
    platform: string
    url: string
    iconSrc: string
    alt: string
    variant?: 'default' | 'hidden'
}

interface SocialLinksProps {
    links: SocialLink[]
}

export default function SocialLinks({ links }: SocialLinksProps) {
    return (
        <div className="flex flex-row gap-4 mt-4 justify-center items-center">
            {links.map((link) => (
                <Button 
                    key={link.platform}
                    size="icon" 
                    variant={link.variant || 'default'}
                    asChild
                >
                    <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={link.iconSrc} 
                            alt={link.alt} 
                            className="w-7 h-7" 
                        />
                    </a>
                </Button>
            ))}
        </div>
    )
} 