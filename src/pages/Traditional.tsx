import ProfileHeader from "@/components/ProfileHeader"
import ProfileCard from "@/components/ProfileCard"
import ContactSection from "@/components/ContactSection"
import SocialLinks from "@/components/SocialLinks"
import BackgroundWrapper from "@/components/BackgroundWrapper"

export default function Trad() {
    const socialLinks = [
        {
            platform: "GitHub",
            url: "https://github.com/therealpyppy",
            iconSrc: "assets/icons/github.svg",
            alt: "GitHub"
        },
        {
            platform: "Discord",
            url: "https://discord.com/users/therealpeppy",
            iconSrc: "assets/icons/discord.svg",
            alt: "Discord"
        },
        {
            platform: "LinkedIn",
            url: "./",
            iconSrc: "assets/icons/linkedin.svg",
            alt: "LinkedIn",
            variant: "hidden" as const
        }
    ]

    return (
        <BackgroundWrapper backgroundImage="assets/bg3.jpg">
            <ProfileHeader />
            
            <div className="fixed left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 bg-card rounded-lg p-8 w-auto h-auto flex items-center justify-center shadow-2xl">
                <div className="flex flex-col items-center gap-6 w-full">
                    <ProfileCard
                        name="Iain Fox"
                        title="Software Engineer"
                        education="Highschool Freshman"
                        location="Houston, TX"
                        imageSrc="assets/pfp.png"
                    />

                    <ContactSection
                        email="iainpfox@gmail.com"
                        resumeUrl="/resume.pdf"
                    />

                    <SocialLinks links={socialLinks} />
                </div>
            </div>
        </BackgroundWrapper>
    )
}