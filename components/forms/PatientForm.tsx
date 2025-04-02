"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form,} from "@/components/ui/form"

// import { createUser } from "@/lib/actions/patient.actions";
import { Input } from "@/components/ui/input"
import { useState } from "react"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton";
import { UserFormValidation } from "@/lib/validation"

export enum FormFieldType {
  INPUT = "input",
TEXTAREA = 'textarea',
PHONE_INPUT = 'phone_input',
CHECKBOX = 'checkbox',
DATE_PICKER = 'date_picker',
SELECT = 'select',
SKELETON = 'skeleton',}
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const PatientForm = () => {
  // 1. Define your form.
  const [isLoading, setIsLoading] = useState(false);

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
        <section className="mb-6  spcae-y-4 flex items-center justify-between">
        
          <p className="text-dark-700">Get started with appointments 🗓️.</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="Gaurav Chaudhary"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="email"
        label="Full name"
        placeholder="gauravchaudhary@gmail.com"
        iconSrc="/assets/icons/email.svg"
        iconAlt="email"
        
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(555) 123-4567"
        />
       
      
       <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
    </form>
  </Form>
  )
}

export default PatientForm