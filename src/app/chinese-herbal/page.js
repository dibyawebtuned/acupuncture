import ServiceSection from "@/component/ServicesPage";

export default function ChineseHerbalMedicinePage() {
    return (
        <ServiceSection
            title="Chinese Herbal Medicine"
            description="Chinese Herbal Medicine is an ancient healing practice that uses natural plant, mineral, and sometimes animal-based ingredients to restore balance and promote wellness. Each formula is tailored to strengthen immunity, improve digestion, and enhance overall vitality."
            image="/assets/img/three.jpg"
            phone="0417 794 279"
            howItWorks={[
                {
                    title: "Consultation",
                    text: "Begin your session with a detailed consultation to understand your health, lifestyle, and wellness goals.",
                },
                {
                    title: "Custom Herbal Formula",
                    text: "Receive a unique herbal blend prepared specifically for you in teas, powders, or capsules.",
                },
                {
                    title: "Personalized Treatment",
                    text: "Each formula targets specific imbalances in your body for long-term wellness.",
                },
                {
                    title: "Safe & Natural Ingredients",
                    text: "We combine centuries-old Chinese medicine knowledge with modern understanding.",
                },
                {
                    title: "Follow-Up & Adjustment",
                    text: "Regular follow-ups ensure your body continues to heal and maintain balance.",
                },
            ]}
            whyChooseUs={[
                {
                    title: "Personalized Consultation",
                    text: "In-depth discussions to uncover your preferences and goals.",
                },
                {
                    title: "Custom Aromatherapy Experience",
                    text: "Curated essential oils to enhance your treatment.",
                },
                {
                    title: "Masterful Techniques",
                    text: "Therapists combine Swedish, deep tissue, and therapeutic strokes.",
                },
                {
                    title: "Warm Towel Therapy",
                    text: "Heated towels promote muscle relaxation and comfort.",
                },
                {
                    title: "Gentle Scalp and Foot Care",
                    text: "Optional scalp and foot massages for full restoration.",
                },
            ]}
            details={{
                description:
                    "Our Revitalizing Facial restores a youthful glow and nourishes your skin with the finest products.",
                duration: "50 min",
                price: "from $100 per person",
                schedule: {
                    weekday: "Mon - Sat: 8:00 AM – 10:00 PM",
                    weekend: "Sun: 9:00 AM – 8:00 PM",
                },
            }}
        />
    );
}
