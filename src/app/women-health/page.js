import ServiceSection from "@/component/ServicesPage";

export default function WomensHealthPage() {
  return (
    <ServiceSection
      title="Women's Health"
      description="Our Women’s Health treatments are designed to support every stage of life — from menstrual health and fertility to pregnancy, menopause, and emotional wellbeing. Using the wisdom of Traditional Chinese Medicine, we restore balance, regulate hormones, and nurture your body’s natural rhythms."
      image="/assets/img/facial+acu+copy+3.webp"
      phone="0417 794 279"
      howItWorks={[
        {
          title: "Comprehensive Consultation",
          text: "Your journey begins with a detailed discussion of your menstrual, reproductive, and emotional health to identify underlying imbalances.",
        },
        {
          title: "Personalized Treatment Plan",
          text: "A tailored combination of acupuncture, herbal medicine, and dietary guidance is designed to regulate your cycle, relieve symptoms, and promote overall balance.",
        },
        {
          title: "Targeted Acupuncture Sessions",
          text: "Gentle, precise acupuncture points help regulate hormones, improve circulation, and ease symptoms such as PMS, cramps, or menopausal discomfort.",
        },
        {
          title: "Emotional & Stress Support",
          text: "Our approach supports not only the physical body but also emotional harmony, reducing stress, anxiety, and fatigue.",
        },
        {
          title: "Ongoing Care & Lifestyle Guidance",
          text: "We provide continual support with follow-up sessions and holistic lifestyle recommendations to help maintain long-term wellbeing.",
        },
      ]}
      whyChooseUs={[
        {
          title: "Holistic Women’s Wellness",
          text: "We address hormonal, emotional, and physical health together to promote lasting vitality.",
        },
        {
          title: "Fertility & Reproductive Care",
          text: "Natural support for fertility, pregnancy, postpartum recovery, and menopause.",
        },
        {
          title: "Expert Practitioners",
          text: "Qualified therapists with experience in Traditional Chinese Medicine for women’s health.",
        },
        {
          title: "Gentle & Natural Healing",
          text: "Safe, non-invasive treatments that work in harmony with your body’s natural processes.",
        },
        {
          title: "Personalized, Compassionate Approach",
          text: "Each session is uniquely designed around your body’s needs, comfort, and healing goals.",
        },
      ]}
      details={{
        description:
          "Our Women’s Health treatments blend ancient Chinese wisdom with modern understanding to help you feel balanced, empowered, and connected at every stage of life.",
        duration: "60–75 min",
        price: "from $130 per session",
        schedule: {
          weekday: "Mon - Sat: 8:00 AM – 10:00 PM",
          weekend: "Sun: 9:00 AM – 8:00 PM",
        },
      }}
    />
  );
}
