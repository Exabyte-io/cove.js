import React from "react";
export default function UploadButton({ id, label, file, accept, onFileUpload, buttonProps, }: {
    id: string;
    label: string | React.ReactNode;
    file: File | null;
    accept?: string;
    onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    buttonProps?: object;
}): React.JSX.Element;
