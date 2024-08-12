import React from "react";
import Navbar from "../Navbar/Navbar";
import FaqItem from "./FaqItem.jsx";
import Footer from "../Footer";


const faqs = [
    {
    question: "What's Brightline?",
    answer: `Brightline offers virtual behavioral health coaching and therapy for families with kids ages 0 to 17 years old. Brightline's expert team of coaches, therapists, and prescribers, offer live sessions for your child with no long waitlists. Coaching programs are also available for parents and caregivers.`,
    },
    {
    question: "Where are Brightline services available?",
    answer: `Brightline services are available in various locations. You can check the availability in your area on their website.`,
    },
    {
    question: "Do you have physical locations?",
    answer: `Brightline primarily offers virtual services but also has physical locations in some areas.`,
    },
    {
    question: "Can I download the Brightline app? What's different between the app and desktop experience?",
    answer: `Yes, the Brightline app is available for download on both Android and iOS. The app offers a similar experience to the desktop version, with added convenience for mobile use.`,
    },
];

const Faq = () => {
    return (
        <div className="h-auto">
            <div className="relative -top-9 bg-customYellow">
                <Navbar />
            </div>
            <div className="h-80 bg-customYellow text-center  pt-48 ">
                <span className="font-extrabold text-8xl">FAQs</span>
            </div>
            <div>
            <div className="max-w-2xl mx-auto mt-40">
                <h2 className="text-6xl font-bold text-center text-gray-900 mb-16">
                    Getting started
                </h2>
                <div className="flex flex-col gap-2">
                {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
                </div>
                </div>
            </div>
            <div>
            <div className="max-w-2xl mx-auto mt-40">
                <h2 className="text-6xl font-bold text-center text-gray-900 mb-16">
                    Getting started
                </h2>
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