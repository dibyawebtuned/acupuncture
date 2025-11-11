import ServiceSection from "@/component/ServicesPage";

export default function ConstitutionalFacialAcupuncturePage() {
    return (
        <ServiceSection
            title="Constitutional Facial Acupuncture"
            description="Constitutional Facial Acupuncture is a holistic, non-surgical treatment that rejuvenates your face while balancing the body from within. It enhances natural radiance, improves skin tone, and promotes overall wellness by stimulating collagen production and harmonizing the body's energy flow."
            image="/assets/img/facial+acu+copy+3.webp"
            phone="0417 794 279"
            howItWorks={[
                {
                    title: "Comprehensive Consultation",
                    text: "Your treatment begins with a full-body health assessment to identify internal imbalances that may affect your skin and vitality.",
                },
                {
                    title: "Acupuncture Session",
                    text: "Fine, sterile needles are gently inserted into facial and body points to increase circulation, stimulate collagen, and release tension.",
                },
                {
                    title: "Energy Balancing",
                    text: "Beyond skin rejuvenation, the session promotes balance in the body’s energy (Qi), supporting internal organs and emotional harmony.",
                },
                {
                    title: "Natural Glow Activation",
                    text: "Increased blood flow nourishes the skin, softens fine lines, and enhances your natural complexion without chemicals or injections.",
                },
                {
                    title: "Follow-Up & Maintenance",
                    text: "Ongoing sessions help sustain results, improve tone, and maintain youthful, radiant skin over time.",
                },
            ]}
            whyChooseUs={[
                {
                    title: "Holistic Anti-Aging",
                    text: "Addresses both external appearance and internal wellness for long-lasting radiance.",
                },
                {
                    title: "Non-Invasive & Natural",
                    text: "A safe, chemical-free alternative to cosmetic procedures like Botox or fillers.",
                },
                {
                    title: "Experienced Practitioners",
                    text: "Performed by certified acupuncturists with expertise in both facial and constitutional acupuncture.",
                },
                {
                    title: "Enhanced Wellbeing",
                    text: "Promotes relaxation, better sleep, and reduced stress while revitalizing your skin.",
                },
                {
                    title: "Customized Treatment Plan",
                    text: "Tailored sessions based on your skin condition, health goals, and energy balance.",
                },
            ]}
            details={{
                description:
                    "This rejuvenating therapy combines ancient Chinese medicine with modern beauty care, helping you achieve a naturally youthful glow from the inside out.",
                duration: "75 min",
                price: "from $160 per session",
                schedule: {
                    weekday: "Mon - Sat: 8:00 AM – 10:00 PM",
                    weekend: "Sun: 9:00 AM – 8:00 PM",
                },
            }}
        />
    );
}
