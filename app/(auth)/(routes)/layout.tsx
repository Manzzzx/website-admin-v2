export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full w-screen flex justify-center items-center">
            {children}
        </div>
    )
}