import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Email Us",
            details: "hello@stratxcel.ai",
            description: "Get in touch via email"
        },
        {
            icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Call Us",
            details: "+1 (555) 123-4567",
            description: "Speak with our team"
        },
        {
            icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Visit Us",
            details: "San Francisco, CA",
            description: "Our headquarters"
        },
        {
            icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Business Hours",
            details: "Mon-Fri 9AM-6PM PST",
            description: "We're here to help"
        }
    ];

    const faqs = [
        {
            question: "How does the AI analysis work?",
            answer: "Our AI analyzes your business data using advanced machine learning algorithms to identify patterns, opportunities, and strategic recommendations tailored to your specific industry and situation."
        },
        {
            question: "Is my business data secure?",
            answer: "Absolutely. We use enterprise-grade encryption and security measures to protect your data. We're SOC 2 compliant and never share your information with third parties."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
        },
        {
            question: "Do you offer custom solutions?",
            answer: "Yes, we offer custom AI solutions and enterprise packages for larger organizations with specific needs. Contact us to discuss your requirements."
        }
    ];

    return (
        <>
            <section id="contact" className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                            Get In Touch
                        </div>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                Contact Us
                            </span>
                        </h2>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-snug sm:leading-relaxed">
                            Ready to transform your business? Get in touch with our team and let's discuss how we can help you achieve your strategic goals.
                        </p>
                    </motion.div>

                    {/* Form and Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 md:gap-12 mb-16 sm:mb-20">
                        {/* Form */}
                        <motion.div
                            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-5 sm:p-8 order-2 lg:order-1"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send us a message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                                        placeholder="Your Company"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none"
                                        placeholder="Tell us about your business and how we can help..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="group w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-green-500/25 flex items-center justify-center text-sm sm:text-base active:scale-95"
                                >
                                    Send Message
                                    <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>

                        {/* Info */}
                        <motion.div
                            className="order-1 lg:order-2"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get in touch</h3>
                            <div className="space-y-4 sm:space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="text-green-400 mt-1 flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="text-sm sm:text-lg font-semibold text-white mb-1">{info.title}</h4>
                                            <p className="text-green-400 font-medium text-xs sm:text-base mb-1 break-all sm:break-normal">
                                                {info.details}
                                            </p>
                                            <p className="text-gray-400 text-xs sm:text-sm">{info.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Live Chat CTA */}
                            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg sm:rounded-xl p-4 sm:p-6 mt-6 sm:mt-8">
                                <h4 className="text-base sm:text-xl font-semibold text-white mb-3 sm:mb-4">Need immediate help?</h4>
                                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-snug sm:leading-relaxed">
                                    Our support team is available 24/7 to assist you with any questions or technical issues.
                                </p>
                                <button className="group inline-flex items-center text-green-400 hover:text-green-300 font-medium text-sm sm:text-base active:scale-95 transition-all">
                                    Start Live Chat
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* FAQ */}
                    <motion.div
                        className="mt-12 sm:mt-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Frequently Asked Questions</h3>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
                            initial="hidden"
                            whileInView="visible"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.15 } }
                            }}
                            viewport={{ once: true }}
                        >
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-green-500/50 transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h4 className="text-sm sm:text-lg font-semibold text-white mb-2 sm:mb-3 leading-tight">
                                        {faq.question}
                                    </h4>
                                    <p className="text-gray-400 text-xs sm:text-base leading-snug sm:leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Contact;
