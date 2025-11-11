import ServiceSection from "@/component/ServicesPage";

export default function FertilityIVFSupportPage() {
    return (
        <ServiceSection
            title="Fertility & IVF Support"
            description="Our Fertility & IVF Support treatments combine the wisdom of Traditional Chinese Medicine with modern reproductive care to enhance fertility naturally and improve IVF outcomes. Through acupuncture, herbal therapy, and emotional balance, we help prepare your body and mind for conception."
            image="/assets/img/Traditional-Chinese-Medicine-is-diagnosing-women's-pulse-.webp"
            phone="0417 794 279"
            howItWorks={[
                {
                    title: "Holistic Consultation",
                    text: "We begin with a comprehensive health assessment to understand your cycle, lifestyle, and fertility journey, identifying both physical and emotional factors that influence conception.",
                },
                {
                    title: "Personalized Treatment Plan",
                    text: "A tailored blend of acupuncture, herbal support, and lifestyle guidance is designed to improve hormonal balance, egg quality, and uterine health.",
                },
                {
                    title: "Acupuncture for Fertility",
                    text: "Gentle acupuncture points are used to regulate menstrual cycles, reduce stress, and enhance blood flow to the reproductive organs, optimizing your body’s natural fertility potential.",
                },
                {
                    title: "IVF & Assisted Reproduction Support",
                    text: "Acupuncture treatments are coordinated around your IVF cycle to support implantation, reduce medication side effects, and improve success rates.",
                },
                {
                    title: "Ongoing Guidance & Emotional Support",
                    text: "We provide ongoing care throughout your fertility journey — from pre-conception to pregnancy — with compassionate emotional support and holistic advice.",
                },
            ]}
            whyChooseUs={[
                {
                    title: "Integrated Care Approach",
                    text: "Combines Traditional Chinese Medicine with modern reproductive science for optimal results.",
                },
                {
                    title: "Fertility-Experienced Practitioners",
                    text: "Our acupuncturists have specialized experience supporting natural conception and IVF preparation.",
                },
                {
                    title: "Hormonal & Cycle Regulation",
                    text: "Helps balance hormones, improve menstrual regularity, and strengthen reproductive health.",
                },
                {
                    title: "Stress Reduction & Emotional Support",
                    text: "Our treatments calm the nervous system, reducing anxiety and emotional strain during fertility treatment.",
                },
                {
                    title: "Personalized Fertility Journey",
                    text: "We understand every fertility path is unique — treatments are tailored to your body, stage, and goals.",
                },
            ]}
            details={{
                description:
                    "Our Fertility & IVF Support therapies nurture your body’s natural potential while complementing medical fertility treatments, helping create a calm, balanced foundation for conception and healthy pregnancy.",
                duration: "60–75 min",
                price: "from $140 per session",
                schedule: {
                    weekday: "Mon - Sat: 8:00 AM – 10:00 PM",
                    weekend: "Sun: 9:00 AM – 8:00 PM",
                },
            }}
        />
    );
}
