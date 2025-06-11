import industriesData from "../data/industriesData.json";

/**
 * Get industry data by slug
 * @param {string} slug - Industry slug
 * @returns {Object|null} - Industry data or null if not found
 */
export const getIndustryData = (slug) => {
  if (!slug) return null;
  return industriesData[slug] || null;
};

/**
 * Get all industries data
 * @returns {Object} - All industries data
 */
export const getAllIndustriesData = () => {
  return industriesData;
};
