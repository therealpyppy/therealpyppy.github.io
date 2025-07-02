import { Button } from '@/components/ui/button'

interface ContactSectionProps {
    email: string
    resumeUrl: string
}

export default function ContactSection({ email, resumeUrl }: ContactSectionProps) {
    return (
        <div className="flex flex-row gap-4 mt-4">
            <Button variant="contact" asChild>
                <a href={`mailto:${email}`}>
                    Contact Me
                </a>
            </Button>
            <Button variant="hidden" asChild>
                <a href={resumeUrl}>
                    View Resume
                </a>
            </Button>
        </div>
    )
} 