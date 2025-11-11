import ServiceSection from "@/component/ServicesPage";

export default function MassageCuppingPage() {
  return (
    <ServiceSection
      title="Massage & Cupping"
      description="Our Massage & Cupping therapy combines the soothing benefits of therapeutic massage with the ancient healing power of cupping. This treatment relieves muscle tension, improves circulation, and detoxifies the body — leaving you relaxed, balanced, and rejuvenated."
      image="/assets/img/massage-cupping.jpg"
      phone="0417 794 279"
      howItWorks={[
        {
          title: "Initial Consultation",
          text: "Your session begins with a discussion about your areas of tension, lifestyle, and wellness goals to customize your treatment.",
        },
        {
          title: "Therapeutic Massage",
          text: "Our skilled therapists use a blend of deep tissue, Swedish, and acupressure techniques to release tight muscles and restore relaxation.",
        },
        {
          title: "Cupping Therapy",
          text: "Glass or silicone cups are gently placed on the skin to create suction, stimulating blood flow, easing stiffness, and promoting detoxification.",
        },
        {
          title: "Energy Flow & Balance",
          text: "Cupping helps clear stagnation along energy pathways (meridians), restoring the body’s natural flow of Qi and vitality.",
        },
        {
          title: "Post-Treatment Care",
          text: "We provide self-care guidance, hydration tips, and aftercare advice to maximize the healing effects of your treatment.",
        },
      ]}
      whyChooseUs={[
        {
          title: "Traditional Meets Modern",
          text: "A perfect fusion of ancient Chinese cupping therapy and modern massage techniques for comprehensive healing.",
        },
        {
          title: "Effective Pain Relief",
          text: "Targets muscle soreness, back pain, fatigue, and stress-related tension with noticeable results.",
        },
        {
          title: "Experienced Therapists",
          text: "All treatments are performed by qualified practitioners trained in both TCM and therapeutic bodywork.",
        },
        {
          title: "Detox & Circulation Boost",
          text: "Cupping promotes lymphatic drainage, toxin release, and improved oxygen flow throughout the body.",
        },
        {
          title: "Relaxation & Rejuvenation",
          text: "Experience deep physical relief and mental calm — a reset for both body and mind.",
        },
      ]}
      details={{
        description:
          "Our Massage & Cupping therapy is ideal for relieving tension, improving mobility, and restoring balance. Whether you seek relaxation or therapeutic recovery, this treatment harmonizes your body’s energy while deeply nourishing your muscles.",
        duration: "60–90 min",
        price: "from $130 per session",
        schedule: {
          weekday: "Mon - Sat: 8:00 AM – 10:00 PM",
          weekend: "Sun: 9:00 AM – 8:00 PM",
        },
      }}
    />
  );
}
