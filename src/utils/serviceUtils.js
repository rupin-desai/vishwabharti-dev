import serviceData from "../data/serviceData.json";

/**
 * Get service data by slug
 * @param {string} slug - Service slug
 * @returns {Object|null} - Service data or null if not found
 */
export const getServiceData = (slug) => {
  if (!slug) return null;
  return serviceData[slug] || null;
};

/**
 * Get all services data
 * @returns {Object} - All services data
 */
export const getAllServicesData = () => {
  return serviceData;
};
