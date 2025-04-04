import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO : OTP VERIFICATION | PASSKEYMODAL*/}
     <section className="remove-scrolbar container m">
      <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
      <Image
      src="/assets/icons/logo-icon.svg" 
      height={1000}
      width={1000}
      alt="patient"
      className="mb-12 h-10 w-fit"
      />
      <h1 className="text-32-bold text-dark-600">
        Welcome to GoArogya
      </h1>

       <PatientForm />
       <div className="text-14-regular mt-20 flex justify-between">
       <p className="copyright py-12"> 
        © 2025   GoArogya. All rights reserved.</p>
        <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
      </div>
      </div>
     </section>
     <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}