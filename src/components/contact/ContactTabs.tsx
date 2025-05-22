
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "../ContactForm";
import BookAssessment from "../BookAssessment";
import SupportTab from "./SupportTab";

const ContactTabs = () => {
  return (
    <Tabs defaultValue="contact" className="max-w-4xl mx-auto">
      <TabsList className="grid grid-cols-3 mb-8">
        <TabsTrigger value="contact">Send a Message</TabsTrigger>
        <TabsTrigger value="assessment">Book Assessment</TabsTrigger>
        <TabsTrigger value="support">Customer Support</TabsTrigger>
      </TabsList>
      
      <TabsContent value="contact">
        <ContactForm />
      </TabsContent>
      
      <TabsContent value="assessment">
        <BookAssessment />
      </TabsContent>
      
      <TabsContent value="support">
        <SupportTab />
      </TabsContent>
    </Tabs>
  );
};

export default ContactTabs;
