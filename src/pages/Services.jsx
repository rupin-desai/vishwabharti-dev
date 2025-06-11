import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesInfo from "../components/Services/ServicesInfo";
import ServicesAbout from "../components/Services/ServicesAbout";
import ServicesBenefits from "../components/Services/ServicesBenefits";
import ServicesOfferings from "../components/Services/ServicesOfferings";
import ServicesClients from "../components/Services/ServicesClients";
import { getServiceData } from "../utils/serviceUtils";

const Services = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If no service slug is provided, redirect to the default service
    if (!serviceSlug) {
      navigate("/services/business-consulting", { replace: true });
      return;
    }

    // Fetch service data
    const data = getServiceData(serviceSlug);

    // If no data found for this slug, redirect to not found or default service
    if (!data) {
      navigate("/services/business-consulting", { replace: true });
      return;
    }

    // Set service data
    setServiceData(data);
    setLoading(false);
  }, [serviceSlug, navigate]);

  if (loading || !serviceData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#e6b400]"></div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <ServicesHero data={serviceData.hero} />
      <ServicesInfo data={serviceData.info} />
      {serviceData.about && <ServicesAbout data={serviceData.about} />}
      {serviceData.benefits && <ServicesBenefits data={serviceData.benefits} />}
      {serviceData.offerings && (
        <ServicesOfferings data={serviceData.offerings} />
      )}
      {serviceData.clients && <ServicesClients data={serviceData.clients} />}
    </div>
  );
};

export default Services;
