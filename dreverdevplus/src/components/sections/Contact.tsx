"use client";
import { useState } from "react";
import Section from "../layout/Section";
import { useForm } from "@/hooks/useForm";
import { useMail } from "@/hooks/useMail";

const CustomInput = ({ name, placeholder, value, onChange }: { name: string, placeholder: string, value: string, onChange: React.ChangeEventHandler<HTMLInputElement> }) => {
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

    const { values, handleChange, resetForm } = useForm({
        name: '',
        email: '',
        message: ''
    })
    const { sendMail } = useMail();
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMail(values.name, values.email, values.message);
        resetForm();
        setSent(true);
    }

    return (
        <Section>
            <div id="contact" className="fade-in">
                <div className="mb-[15px] md:mb-auto">
                    <h2 className="text-3xl text-title font-medium">
                        <span className="font-mono text-xl">03.</span>
                        <span>Get In Touch</span>
                    </h2>
                    <p className="text-xl text-white">Do you have a question or proposal? Go ahead and send me a message.</p>
                </div>
                <div className="w-full md:grid md:grid-cols-[1fr_1fr] gap-12">
                    <form className="w-full flex flex-col gap-5 px-1 justify-center" onSubmit={handleSubmit}>
                        {
                            sent && (
                                <span className="w-full px-4 py-2 border-2 border-title rounded-xl
                                text-title font-bold bg-[#C194FE]/20
                                "
                                >
                                    Message sent succesfully
                                </span>
                            )
                        }


                        <CustomInput name="name" placeholder="Your name:" value={values.name} onChange={handleChange} />
                        <CustomInput name="email" placeholder="Your email:" value={values.email} onChange={handleChange} />
                        <CustomInput name="message" placeholder="Your message:" value={values.message} onChange={handleChange} />
                        <div className="flex justify-start">
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
                    <div>
                        <img className="w-full h-full" src={'/images/other/message.svg'} alt="Dreverdev Avatar" />
                    </div>
                </div>
            </div>
        </Section>
    )
}