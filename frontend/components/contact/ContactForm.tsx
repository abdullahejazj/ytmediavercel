"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type TFormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export default function ContactForm() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<TFormData>();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState<string | null>(null);

    const onSubmit = async (data: TFormData) => {
        try {
            setIsSubmitting(true);

            const response = await fetch('https://formspree.io/f/xgeglobd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                router.push('/thankyou');
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            setSubmissionError('Failed to submit form. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="vstack gap-8">
            <div className="">
                <label htmlFor="name" className="form-label fs-lg fw-medium mb-4">
                    Your name*{" "}
                </label>
                <div className="input-group with-icon">
                    <span className="icon">
                        <i className="ti ti-user fs-5"></i>
                    </span>
                    <input
                        type="text"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required",
                            },
                        })}
                        id="name"
                        placeholder="What's your name?"
                        className="form-control rounded-2"
                    />
                </div>
                {errors.name?.message && (
                    <p className="fs-sm text-warning mb-0">{errors.name?.message}</p>
                )}
            </div>
            <div className="">
                <label htmlFor="email" className="form-label fs-lg fw-medium mb-4">
                    Email Address*{" "}
                </label>
                <div className="input-group with-icon">
                    <span className="icon">
                        <i className="ti ti-email fs-5"></i>
                    </span>
                    <input
                        type="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                        })}
                        id="email"
                        placeholder="Enter your email"
                        className="form-control rounded-2"
                    />
                </div>
                {errors.email?.message && (
                    <p className="fs-sm text-warning mb-0">{errors.email?.message}</p>
                )}
            </div>
            <div className="">
                <label htmlFor="phone" className="form-label fs-lg fw-medium mb-4">
                    Phone Number
                </label>
                <div className="input-group with-icon">
                    <span className="icon">
                        <i className="ti ti-mobile fs-5"></i>
                    </span>
                    <input
                        type="tel"
                        {...register("phone")}
                        id="phone"
                        placeholder="Enter your phone number"
                        className="form-control rounded-2"
                    />
                </div>
                {errors.phone?.message && (
                    <p className="fs-sm text-warning mb-0">{errors.phone?.message}</p>
                )}
            </div>
            <div className="">
                <label htmlFor="message" className="form-label fs-lg fw-medium mb-4">
                    Your Message*{" "}
                </label>
                <textarea
                    {...register("message", {
                        required: {
                            value: true,
                            message: "Message is required",
                        },
                    })}
                    id="message"
                    placeholder="Enter your message"
                    rows={4}
                    className="form-control rounded-2"
                ></textarea>
                {errors.message?.message && (
                    <p className="fs-sm text-warning mb-0">{errors.message?.message}</p>
                )}
            </div>
            <div className="">
                <button type="submit" className="btn btn-primary-dark" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
                {submissionError && <p className="text-danger">{submissionError}</p>}
            </div>
        </form>
    );
}
