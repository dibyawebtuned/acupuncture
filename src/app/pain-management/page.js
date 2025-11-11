import ServiceSection from "@/component/ServicesPage";

export default function MusculoskeletalPainManagementPage() {
    return (
        <ServiceSection
            title="Musculoskeletal Pain Management"
            description="Our Musculoskeletal Pain Management treatments combine the principles of Traditional Chinese Medicine with modern therapeutic techniques to relieve pain, restore mobility, and enhance physical wellbeing. We address the root cause of pain — not just the symptoms — to promote long-term healing and balance."
            image="/assets/img/moxibustion-cones-moxa-treatment-points-top-needles.webp"
            phone="0417 794 279"
            howItWorks={[
                {
                    title: "Detailed Assessment",
                    text: "We begin with a thorough consultation to understand your pain history, posture, and lifestyle factors affecting your muscles and joints.",
                },
                {
                    title: "Acupuncture & Meridian Therapy",
                    text: "Fine, sterile needles are applied to specific acupuncture points to relieve muscle tension, improve circulation, and promote natural pain relief.",
                },
                {
                    title: "Manual & Soft Tissue Techniques",
                    text: "Depending on your condition, gentle cupping, gua sha, or massage may be included to release tightness and enhance muscle recovery.",
                },
                {
                    title: "Holistic Healing Approach",
                    text: "We work on restoring energy flow (Qi) throughout the body to support internal balance and prevent recurring pain.",
                },
                {
                    title: "Rehabilitation & Self-Care Advice",
                    text: "Personalized exercises, stretching routines, and lifestyle recommendations are provided to maintain long-term pain-free movement.",
                },
            ]}
            whyChooseUs={[
                {
                    title: "Comprehensive Pain Relief",
                    text: "Effective treatments for neck, shoulder, back, knee, and joint pain — addressing both acute and chronic conditions.",
                },
                {
                    title: "Holistic Healing Philosophy",
                    text: "We treat the root cause of discomfort through a combination of acupuncture, herbal support, and bodywork.",
                },
                {
                    title: "Qualified Practitioners",
                    text: "Our therapists are trained in Traditional Chinese Medicine and musculoskeletal therapy, ensuring safe and effective care.",
                },
                {
                    title: "Natural & Non-Invasive",
                    text: "A drug-free, gentle approach that stimulates the body’s own healing mechanisms.",
                },
                {
                    title: "Tailored Treatment Plans",
                    text: "Each session is adapted to your pain level, condition, and healing progress for optimal results.",
                },
            ]}
            details={{
                description:
                    "Our Musculoskeletal Pain Management program is ideal for anyone seeking relief from chronic pain, injury recovery, or tension caused by stress and posture. Feel restored, mobile, and balanced through the power of acupuncture and natural therapy.",
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
