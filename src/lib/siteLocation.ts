export type SiteLocation = "india" | "dubai";

export const SITE_LOCATION_KEY = "site-location";

const WHATSAPP_NUMBERS: Record<SiteLocation, { display: string; wa: string }> = {
  india: {
    display: "+91 93605 00020",
    wa: "919360500020",
  },
  dubai: {
    display: "+971 55 942 1943",
    wa: "971559421943",
  },
};

export const getStoredSiteLocation = (): SiteLocation | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(SITE_LOCATION_KEY);
  return value === "india" || value === "dubai" ? value : null;
};

export const setStoredSiteLocation = (location: SiteLocation) => {
  window.localStorage.setItem(SITE_LOCATION_KEY, location);
};

export const getWhatsAppNumber = (location = getStoredSiteLocation() ?? "india") => {
  return WHATSAPP_NUMBERS[location];
};

export const getWhatsAppUrl = (message: string, location = getStoredSiteLocation() ?? "india") => {
  return `https://wa.me/${WHATSAPP_NUMBERS[location].wa}?text=${message}`;
};
