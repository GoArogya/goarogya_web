"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { z } from "zod"
import { Button } from "@/components/ui/button"


import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectItem } from "@/components/ui/select";
import {
  Doctors,
  GenderOptions,
  IdentificationTypes,
  PatientFormDefaultValues,
} from "@/constants";


import { createUser } from "@/lib/actions/patient.actions";
import { Input } from "@/components/ui/input"
import { useState } from "react"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton";
import { UserFormValidation } from "@/lib/validation"

import { FormFieldType } from "./PatientForm";
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const RegisterForm = ({user} : {user : User }) => {
  // 1. Define your form.
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })
 
  // 2. Define a submit handler.
  
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
        setIsLoading(true);
    
        try {
          const user = {
            name: values.name,
            email: values.email,
            phone: values.phone,
          };
    
          const newUser = await createUser(user);
    
          if (newUser) {
            router.push(`/patients/${newUser.$id}/register`);
          }
        } catch (error) {
          console.log(error);
        }
    
        setIsLoading(false);
      };
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flx-1">
        <section className="spcae-y-4 ">
        <h1 className="header">Namaste 🙏 </h1>
          <p className="text-dark-700">Lets know more about yourself.</p>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>
          </section>

          
          
        

        {/* NAME */}

        <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Full Name"
            placeholder="Enter your name "
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          {/* EMAIL & PHONE */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="Email address"
              placeholder="enter your email"
              iconSrc="/assets/icons/email.svg"
              iconAlt="email"
            />

            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="phone"
              label="Phone Number"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* BirthDate & Gender */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="birthDate"
              label="Date of birth"
            />
            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="gender"
              label="Gender"
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex h-11 gap-6 xl:justify-between"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {GenderOptions.map((option, i) => (
                      <div key={option + i} className="radio-group">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            />
            </div>
       
      
       <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
    </form>
  </Form>
  )
}

export default RegisterForm