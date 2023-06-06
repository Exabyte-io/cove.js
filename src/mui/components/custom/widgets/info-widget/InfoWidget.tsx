import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

import { Content, Header, InfoWidgetContainer } from "./InfoWidget.styled";

export interface InfoWidgetProps {
    title: string;
    description: string;
    button: React.ReactNode;
    content: React.ReactNode;
}

export default function InfoWidget({ title, description, button, content }: InfoWidgetProps) {
    return (
        <InfoWidgetContainer>
            <Header>
                <Box>
                    <Box>
                        <Typography variant="h6">{title}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2">{description}</Typography>
                    </Box>
                </Box>
                {button}
            </Header>
            <Content>{content}</Content>
        </InfoWidgetContainer>
    );
}
