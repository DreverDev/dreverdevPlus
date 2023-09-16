import { useState } from "react";

interface FormValues {
    [key: string]: string
}

export const useForm = (initialValues: FormValues) => {
    const [values, setValues] = useState<FormValues>(initialValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const resetForm = () => {
        setValues(initialValues);
    }

    return {
        values,
        handleChange,
        resetForm,
    }
}