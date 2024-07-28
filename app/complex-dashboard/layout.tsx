import Card from "@/components/Card";

export default function RootLayout({
    children,
    users,
    revenue,
    notification
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notification: React.ReactNode,
}) {
    return (
        <div>
            <div>{children}</div>

            <div className="flex justify-center items-center">
                <div className="flex">
                    <div>
                        <Card>{users}</Card>
                        <Card>{revenue}</Card>
                    </div>
                    <div style={{ display: 'flex', flex: 1 }}>
                        <Card>{notification}</Card>
                    </div>
                </div>
            </div>

        </div>
    );
}