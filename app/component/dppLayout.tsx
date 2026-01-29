import React from "react";

type DppLayoutProps = {
    children?: React.ReactNode;
};

export default function DppLayout({ children }: DppLayoutProps) {
    return <div className="min-w-screen p-2 min-h-screen">{children}</div>;
}