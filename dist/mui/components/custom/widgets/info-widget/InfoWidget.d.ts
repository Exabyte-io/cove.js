import React from "react";
export interface InfoWidgetProps {
    title: string;
    description: string;
    button: React.ReactNode;
    content: React.ReactNode;
}
export default function InfoWidget({ title, description, button, content }: InfoWidgetProps): React.JSX.Element;
