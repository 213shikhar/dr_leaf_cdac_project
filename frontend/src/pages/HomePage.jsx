import React from "react";
import { motion } from "framer-motion";
import { Leaf, Camera, ArrowRight } from "lucide-react";
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="min-vh-100 hero-bg d-flex flex-column w-100">
      {/* Hero Section */}
      <section className="container-fluid py-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-5 px-0 px-md-5">
        <div className="flex-fill px-3 px-md-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="display-4 fw-bold hero-title lh-sm"
          >
            Detect Plant Diseases<br /> With Precision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-3 fs-5 text-dark"
          >
            Upload a leaf image and let the AI-powered Dr. Leaf instantly analyze it
            for diseases. Fast, reliable, and built for farmers & researchers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-4 d-flex gap-3 flex-wrap"
          >
            <button className="btn upload-btn d-flex align-items-center gap-2 px-4 py-2 shadow-sm">
              <Camera size={20} /> Upload Leaf
            </button>

            <button className="btn learn-btn d-flex align-items-center gap-2 px-4 py-2 shadow-sm">
              Learn More <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Right illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-fill text-center px-3 px-md-0"
        >
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60"
            alt="Leaf"
            className="rounded-4 shadow-lg img-fluid w-100"
            style={{ maxWidth: '600px' }}
          />
        </motion.div>
      </section>
      {/*  */}

      {/* Features Section */}
      <section className="py-5 features-bg">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center fw-bold display-6 mb-5 features-title"
          >
            What Dr. Leaf Offers
          </motion.h2>

        <div className="container-fluid px-3 px-md-5">
          <div className="row g-4">
            {['Fast Detection', 'Accurate Results', 'Disease Information'].map((title, i) => (
              <div className="col-md-4" key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="p-4 rounded-4 shadow-sm text-center h-100 feature-card border"
                >
                  <Leaf className="feature-icon mb-3" size={40} />
                  <h3 className="fs-5 fw-semibold text-dark">{title}</h3>
                  <p className="text-dark mt-2">
                    AI-powered analysis helps farmers detect plant issues quickly
                    and reliably.
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}