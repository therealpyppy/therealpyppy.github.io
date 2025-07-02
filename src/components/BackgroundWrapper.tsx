interface BackgroundWrapperProps {
    children: React.ReactNode
    backgroundImage: string
}

export default function BackgroundWrapper({ children, backgroundImage }: BackgroundWrapperProps) {
    return (
        <div>
            <div
                className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
                style={{
                    backgroundImage: `url('${backgroundImage}')`
                }}>
            </div>
            {children}
        </div>
    )
} 