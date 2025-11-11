import ServiceSection from "@/component/ServicesPage";

export default function AcupuncturePage() {
    return (
        <ServiceSection
            title="Acupuncture"
            description="Acupuncture is a time-honoured healing therapy rooted in Traditional Chinese Medicine, designed to restore harmony within the body’s natural energy flow. Using fine, sterile needles at specific points, acupuncture helps relieve pain, reduce stress, boost immunity, and enhance overall wellbeing."
            image="/assets/img/GettyImages-146788068 (1).jpg"
            phone="0417 794 279"
            howItWorks={[
                {
                    title: "Initial Consultation",
                    text: "Your session begins with a comprehensive consultation to understand your health concerns, lifestyle, and wellness goals.",
                },
                {
                    title: "Diagnosis & Treatment Plan",
                    text: "Your acupuncturist identifies energy blockages (Qi imbalances) and creates a personalized treatment plan to support healing.",
                },
                {
                    title: "Acupuncture Session",
                    text: "Ultra-fine needles are gently inserted at precise points to stimulate the body’s natural healing response and promote energy balance.",
                },
                {
                    title: "Relaxation & Recovery",
                    text: "Each session offers deep relaxation, improving circulation, and reducing tension and stress in both mind and body.",
                },
                {
                    title: "Follow-Up & Healing Progress",
                    text: "Ongoing treatments help maintain energy balance, support chronic conditions, and promote lasting wellness.",
                },
            ]}
            whyChooseUs={[
                {
                    title: "Traditional Expertise",
                    text: "Our practitioners are trained in Classical and Modern Chinese Medicine techniques, ensuring authentic care.",
                },
                {
                    title: "Holistic Wellness Focus",
                    text: "Treatments are tailored not just for symptoms but for the whole person—body, mind, and spirit.",
                },
                {
                    title: "Pain & Stress Relief",
                    text: "Effective for back pain, headaches, anxiety, insomnia, and many chronic conditions.",
                },
                {
                    title: "Safe & Gentle Approach",
                    text: "Single-use, sterile needles ensure comfort and safety during every session.",
                },
                {
                    title: "Personalized Care",
                    text: "Every treatment is adapted to your body’s needs, rhythm, and healing pace.",
                },
            ]}
            details={{
                description:
                    "Experience the restorative power of acupuncture to realign your body’s energy, relieve tension, and support optimal health naturally.",
                duration: "60 min",
                price: "from $120 per session",
                schedule: {
                    weekday: "Mon - Sat: 8:00 AM – 10:00 PM",
                    weekend: "Sun: 9:00 AM – 8:00 PM",
                },
            }}
        />
    );
}
