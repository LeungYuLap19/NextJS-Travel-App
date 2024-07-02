"use client"
import React from 'react'
import Logo from '../logo/Logo'
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { authFormSchema } from '@/lib/utils'
import Link from 'next/link'
import CustomInput from './CustomInput'
import { useRouter } from 'next/navigation'

export default function AuthForm({ type }: AuthFormProps) {
    const router = useRouter();
    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            city: "",
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        router.push('/discover');
    }

    return (
        <div className='auth-wrapper'>
            <Logo 
                height={60} width={60}
                style='!text-3xl'
            />

            <div className='auth-col my-10 px-5'>
                <p className='header-text'>
                    { type === 'sign-in' ? 'Login' : 'Sign Up' }
                </p>
                <p className='text-customBlack-200'>
                    {
                        type === 'sign-in' ?
                        'Welcome back!  Enter your details to continue.':
                        'Enter your details to continue.'
                    }
                </p>
            </div>

            <div className='auth-col mb-6 px-5'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className='flex flex-col gap-7 mb-10'>
                            {
                                type === 'sign-up' &&
                                <>
                                    <CustomInput 
                                        control={form.control} name='username'
                                        label='Username' placeholder='Enter your username'
                                    />

                                    <CustomInput 
                                        control={form.control} name='city'
                                        label='City' placeholder='Enter your city'
                                    />
                                </>
                            }
                            <CustomInput 
                                control={form.control} name='email'
                                label='Email' placeholder='Enter your email'
                            />

                            <CustomInput 
                                control={form.control} name='password'
                                label='Password' placeholder='Enter your password'
                            />
                        </div>

                        <div className='auth-col'>
                            <Button 
                                type='submit' 
                                className='auth-button' 
                                // disabled={}
                            >
                                { type === 'sign-in' ? 'Login' : 'Sign Up' }
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>

            <div className='auth-footer'>
                <p className='text-sm text-customBlack-200'>
                    {
                        type === 'sign-in' ?
                        "Don't have an account?" :
                        "Already have an account?"
                    }
                </p>
                <Link
                    className='!text-sm logo-text !font-semiBold'
                    href={ type === 'sign-in' ? '/sign-up' : 'sign-in' }
                >
                    { type === 'sign-in' ? 'Sign Up' : 'Login' }
                </Link>
            </div>
        </div>
    )
}
