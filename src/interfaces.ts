export interface FormField {
    label: string;
    name: string;
    type: "text" | "email" | "textarea";
    modelValue: string;
    placeholder?: string;
}