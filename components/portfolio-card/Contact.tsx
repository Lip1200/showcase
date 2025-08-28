"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "./useTranslation";

const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
  const getX = () => {
    if (direction === "left") return 100;
    if (direction === "right") return -100;
    return 0;
  };
  
  const getY = () => {
    if (direction === "up") return 100;
    if (direction === "down") return -100;
    return 0;
  };

  return {
    hidden: {
      x: getX(),
      y: getY(),
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const staggerContainer = () => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
});

const ContainerSlideIn = motion.div;

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-[58%] h-[60%] text-content absolute top-[25%] right-[5%] font-mono z-[100]">
      {/* Fade gradient en haut */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-bg to-transparent z-10 pointer-events-none"></div>
      
      <motion.div 
        className="h-full overflow-y-auto overflow-x-hidden p-4 portfolio-scroll"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <ContainerSlideIn variants={fadeIn("left", "tween", 1.4, 1)}>
          {status === 'success' ? (
            <div className="text-center space-y-4">
              <h2 className="text-xl text-primary">{t.contact.thankYou}</h2>
              <p className="text-content">{t.contact.successMessage}</p>
              <button
                onClick={() => setStatus('idle')}
                className="text-accent hover:text-primary transition-colors underline"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : status === 'error' ? (
            <div className="text-center space-y-4">
              <h2 className="text-xl text-red-500">{t.contact.errorMessage}</h2>
              <button
                onClick={() => setStatus('idle')}
                className="text-accent hover:text-primary transition-colors underline"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-transparent border border-content text-content focus:border-primary focus:outline-none text-sm font-mono"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-transparent border border-content text-content focus:border-primary focus:outline-none text-sm font-mono"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-transparent border border-content text-content focus:border-primary focus:outline-none text-sm font-mono"
                  placeholder={t.contact.subjectPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 bg-transparent border border-content text-content focus:border-primary focus:outline-none text-sm font-mono resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-bg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-mono text-sm"
              >
                {isSubmitting ? t.contact.sending : t.contact.send}
              </button>
            </form>
          )}
        </ContainerSlideIn>
      </motion.div>
      
      {/* Fade gradient en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Contact;
