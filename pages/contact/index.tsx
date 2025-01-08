import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import ProductHero from "@/components/ProductHero";

const Contact = () => {
  return (
    <section>
      <ProductHero
        backgroundImage="/images/contact.jpg"
        title="Contact"
        subtitle="Get in Touch. We're Here to Help!"
      />
      <ContactDetails />
      <ContactForm />
    </section>
  );
};

export default Contact;
