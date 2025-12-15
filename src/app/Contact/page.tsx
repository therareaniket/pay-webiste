import ContactHero from "@/components/Contactpage/ContactHero";
import ContactForm from "@/components/Contactpage/ContactForm";
import { fetchGraphQL } from "@/lib/graphql";

type ContactpageData = {
    page: {
        contactpage: {
            contactHeroTitle: string;
            contactHeroSubtitle: string;

            contactFormTitle: string;
            contactFormSubtitle: string;

            contactEmail: string;
            contactPhone: string;
            contactLocation: string;
        };
    };
};

export default async function Contact () {

    const Contact = await fetchGraphQL<ContactpageData>(`
        query {
            page(id: "/contact", idType: URI) {
                contactpage {
                    contactHeroTitle
                    contactHeroSubtitle

                    contactFormTitle
                    contactFormSubtitle
                    contactEmail
                    contactPhone
                    contactLocation
                }
            }
        }`);
    
        const ContactFetch = Contact.page.contactpage;
    return (
        <>
            <ContactHero contactHeroTitle={ContactFetch.contactHeroTitle} contactHeroSubtitle={ContactFetch.contactHeroSubtitle} />

            <ContactForm contactFormTitle={ContactFetch.contactFormTitle} contactFormSubtitle={ContactFetch.contactFormSubtitle} contactEmail={ContactFetch.contactEmail} contactPhone={ContactFetch.contactPhone} contactLocation={ContactFetch.contactLocation} />

        </>
    );
}