import React from "react";
import Navbar from "../Navbar/Navbar";
import FaqItem from "./FaqItem.jsx";
import Footer from "../Footer";


const faqs = [
    {
    question: "What is MindConnect?",
    answer: `MindConnect is an online platform designed to support college students in managing their mental health. It provides access to expert advice, informative blogs, practical tips, and allows anonymous consultations with mental health professionals.
`,
    },
    {
    question: "What services does MindConnect offer?",
    answer: `MindConnect offers a variety of services including expert-written blogs, mental health tips, anonymous counseling sessions, and a journaling feature to help students manage stress and maintain their mental well-being.`,
    },
    {
    question: "How can I connect with a counselor anonymously?",
    answer: `You can connect with a counselor anonymously on MindConnect by using our secure platform.You just signup on the platform, and you’ll be able to chat with a mental health professional without sharing any personal information.`,
    },
    {
    question: "What are the advantages of journaling on MindConnect?",
    answer: `Journaling on MindConnect allows you to privately express your thoughts and feelings, helping you to process emotions, reduce stress, and gain clarity. Regular journaling can also improve self-awareness and mental well-being.`,
    },
    {
        question: "How can I maintain good mental health while in college?",
        answer: `Maintaining good mental health in college involves balancing academic responsibilities with self-care practices. Using resources like MindConnect, engaging in regular physical activity, staying connected with friends, and seeking help when needed are all key strategies.`,
    },
    {
        question: "Is my information secure on MindConnect?",
        answer: ` Yes, your information is completely secure on MindConnect. We prioritize your privacy and ensure that all your interactions on the platform are confidential and protected by robust security measures.`,
    },
    {
        question: "Can I access MindConnect's resources anytime?",
        answer: `Absolutely! MindConnect is available 24/7, so you can access blogs, tips, and other mental health resources whenever you need them.`,
    },
    {
        question: "Do I have to pay to use MindConnect's services?",
        answer: `No, MindConnect is completely free for college students. All resources, including expert blogs, tips, anonymous counseling sessions, and journaling, are available at no cost.`,
    },
    {
        question: "How can MindConnect help me manage stress during exams?",
        answer: ` MindConnect offers tips and strategies specifically designed to help you manage stress during exams. You can also talk to a counselor anonymously to get personalized advice on handling exam-related anxiety.`,
    },
    {
        question: "How can I start journaling on MindConnect?",
        answer: `To start journaling, simply sign in to your MindConnect account, navigate to the journaling section, and begin writing. The platform provides a secure space for you to regularly document your thoughts and experiences.`,
    },
];

const Faq = () => {
    return (
        <div className="min-h-screen">
            <div className="relative bg-customYellow">
                <Navbar />
            </div>
            <div className="h-96 bg-customYellow text-center pt-64 ">
                <span className="font-extrabold text-8xl">FAQs</span>
            </div>
            <div>
            <div className="max-w-2xl mx-auto mt-32">
                <div className="flex flex-col gap-2">
                {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
                </div>
                </div>
            </div>
            
            <div className="mt-28">
            <Footer />
            </div>
        </div>
    );
}

export default Faq;