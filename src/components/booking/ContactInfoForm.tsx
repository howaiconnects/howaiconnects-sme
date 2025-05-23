
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface ContactInfoFormProps {
  form: UseFormReturn<{
    name: string;
    email: string;
    phone: string;
    company: string;
  }>;
}

const ContactInfoForm = ({ form }: ContactInfoFormProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input {...field} className="mt-1" required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input {...field} type="email" className="mt-1" required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} className="mt-1" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input {...field} className="mt-1" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default ContactInfoForm;
