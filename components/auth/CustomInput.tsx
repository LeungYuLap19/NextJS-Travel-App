import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { authFormSchema } from '@/lib/utils';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '../ui/input';

const formSchema = authFormSchema('sign-up');
interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
}

export default function CustomInput({ control, name, label, placeholder }: CustomInputProps) {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => {
            return (
                <div className='flex flex-col gap-2'>
                    <FormLabel className='auth-form-label'>
                        {label}
                    </FormLabel>  

                    <div>
                        <FormControl>
                            <Input 
                                placeholder={placeholder}
                                type={name === 'password' ? 'password' : 'text'}
                                className='auth-form-input'
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className='text-red-600 mt-2' />
                    </div>
                </div>
            )
        }}
    >

    </FormField>
  )
}
