import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-theme-dark mb-8">
        Privacy Policy
      </h1>
      <div className="max-w-4xl prose prose-lg">
        <p className="text-theme-neutral mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-theme-dark mb-4">
            Information We Collect
          </h2>
          <p className="text-theme-neutral">
            We collect information you provide directly to us when using our
            services.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-theme-dark mb-4">
            How We Use Your Information
          </h2>
          <p className="text-theme-neutral">
            We use the information we collect to provide and improve our
            services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
