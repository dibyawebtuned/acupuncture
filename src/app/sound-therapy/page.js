import ServiceSection from "@/component/ServicesPage";

export default function SoundTherapyPage() {
    return (
        <ServiceSection
            title="Sound Therapy"
            description="Sound Therapy harnesses the healing power of vibration and frequency to restore balance and harmony to the body, mind, and spirit. Using instruments like Tibetan singing bowls, gongs, and tuning forks, this therapy promotes deep relaxation, stress reduction, and emotional release."
            image="/assets/img/7515-1-Tuning-Forks.jpg"
            phone="0417 794 279"
            howItWorks={[
                {
                    title: "Personalized Sound Assessment",
                    text: "Each session begins with a short consultation to understand your emotional and physical state, setting the intention for your healing journey.",
                },
                {
                    title: "Immersive Sound Journey",
                    text: "You’ll be surrounded by soothing tones from Tibetan bowls, gongs, and other instruments designed to resonate with your body’s energy centers (chakras).",
                },
                {
                    title: "Vibrational Alignment",
                    text: "Sound frequencies gently entrain your brainwaves, guiding you into a meditative state that supports inner balance, clarity, and calm.",
                },
                {
                    title: "Energy Release & Healing",
                    text: "As the sound waves move through your body, they help release energetic blockages, tension, and stagnant emotions — promoting deep restoration.",
                },
                {
                    title: "Grounding & Reflection",
                    text: "The session concludes with quiet grounding and reflection, allowing you to absorb the vibrations and integrate the healing experience.",
                },
            ]}
            whyChooseUs={[
                {
                    title: "Holistic Healing Experience",
                    text: "Our Sound Therapy integrates ancient vibrational healing techniques with modern wellness principles for total mind-body harmony.",
                },
                {
                    title: "Stress & Anxiety Relief",
                    text: "The frequencies calm the nervous system, lower stress hormones, and help relieve anxiety and insomnia.",
                },
                {
                    title: "Certified Sound Healers",
                    text: "All sessions are led by certified sound healing practitioners trained in energy work and vibrational medicine.",
                },
                {
                    title: "Enhanced Mental Clarity",
                    text: "Sound waves promote deep relaxation and heightened awareness, helping clear mental fog and emotional heaviness.",
                },
                {
                    title: "Safe & Restorative Environment",
                    text: "Experience a peaceful, immersive environment designed to nurture your senses and promote deep rejuvenation.",
                },
            ]}
            details={{
                description:
                    "Sound Therapy is a non-invasive, deeply calming treatment ideal for anyone seeking emotional balance, stress relief, or spiritual alignment. It helps clear energetic blockages, restore harmony, and awaken inner peace through the healing resonance of sound.",
                duration: "45–75 min",
                price: "from $120 per session",
                schedule: {
                    weekday: "Mon - Sat: 8:00 AM – 10:00 PM",
                    weekend: "Sun: 9:00 AM – 8:00 PM",
                },
            }}
        />
    );
}
