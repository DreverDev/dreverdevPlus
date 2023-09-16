"use client";
import { useState } from "react";
import Section from "../layout/Section";
import { useForm } from "@/hooks/useForm";
import { useMail } from "@/hooks/useMail";

const CustomInput = ({ name, placeholder, value, onChange }: { name: string, placeholder: string, value:string, onChange: React.ChangeEventHandler<HTMLInputElement> }) => {
    const [isFocused, setIsFocused] = useState(false);

    return <input className="w-full bg-background border-2 border-subtext text-subtext px-5 py-3 rounded-xl
    focus:outline-none
    focus:border-white
    transition-colors
    "
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required />
}

export default function Contact() {

    const {values, handleChange, resetForm} = useForm({
        name: '',
        email: '',
        message: ''
    })
    const { sendMail } = useMail();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMail(values.name, values.email, values.message);
    }

    return (
        <Section>
            <div className="mb-[15px] md:mb-auto">
                <h2 className="text-3xl text-title font-medium">
                    <span className="font-mono text-xl">03.</span>
                    <span>Get In Touch</span>
                </h2>
                <p className="text-xl text-white">Do you have a question or proposal? Go ahead and send me a message.</p>
            </div>
            <div className="w-full flex justify-center">
                <form className="w-full flex flex-col gap-5 px-1" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-5 md:gap-y-0">
                        <CustomInput name="name" placeholder="Your name:" value={values.name} onChange={handleChange} />
                        <CustomInput name="email" placeholder="Your email:" value={values.email} onChange={handleChange} />
                    </div>
                    <CustomInput name="message" placeholder="Your message:" value={values.message} onChange={handleChange} />
                    <div className="flex justify-center">
                        <input
                            type="submit"
                            value="Send"
                            className="bg-background border-2 border-title text-title/90 px-5 py-3 rounded-full
                            cursor-pointer
                            transition-colors
                            hover:bg-title/5
                            " />
                    </div>

                </form>
            </div>
        </Section>
    )
}