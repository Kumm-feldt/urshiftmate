const API_BASE = import.meta.env.VITE_API_URL || "https://urshiftmate.onrender.com";

// Split APIs based on your app.js routes
const GOOGLE_API = `${API_BASE}/google`;
const CRUD_API = `${API_BASE}/user/config`;

// ------------- JWT token helpers -------------
const getAuthToken = () => localStorage.getItem('authToken');

const authHeaders = () => {
  const token = getAuthToken();
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

export async function logout() {
  try {
    const response = await fetch(`${API_BASE}/logout`, {
      credentials: "include",
      headers: {
        ...authHeaders()
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      return {logout: true}
    }
  } catch (e) {
    console.error('Logout failed:', e);
    return { logout: false };
  }
}

// ------------- Date formatting helpers -------------
function formatDate(inputDate) {
  const date = new Date(inputDate);
  const formatted = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
  return formatted;
}

function formatDateWeek(isoDate, locale = "en-US") {
  const [y, m, d] = isoDate.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString(locale, { month: "long", day: "numeric"});
}

// ------------- Paycheck API (uses /google routes) -------------

// NEW: Get detailed shift events for both weeks
export async function fetchDetailedEvents(index) {
  try {
    const response = await fetch(`${GOOGLE_API}/paychecks/details?index=${index}`, {
      credentials: "include",
      headers: {
        ...authHeaders()
      }
    });
    
    const data = await response.json().catch(() => null);
    
    if (!response.ok) {
      const msg = data?.error?.message || data?.message || response.statusText || "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    
    // Backend returns: { weekOne: [...], weekTwo: [...] }
    return data;
  } catch (networkErr) {
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;
  }
}

// NEW: Get complete paycheck summary with both weeks' data
export async function fetchSummarizedEvents(index) {
  try {
    const response = await fetch(`${GOOGLE_API}/paychecks/summary?index=${index}`, {
      credentials: "include",
      headers: {
        ...authHeaders()
      }
    });
    
    const data = await response.json().catch(() => null);
    
    if (!response.ok) {
      const msg = data?.error?.message || data?.message || response.statusText || "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    
    // Backend returns: { summary: {...}, weekOne: {...}, weekTwo: {...} }
    return data;
  } catch (networkErr) {
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;
  }
}

// NEW: Get basic user info and date ranges (replaces fetchUserSummary)
export async function fetchUserSummary(index) {
  try {
    const response = await fetch(`${GOOGLE_API}/paychecks/overview?index=${index}`, {
      credentials: "include",
      headers: {
        ...authHeaders()
      }
    });
    
    const data = await response.json().catch(() => null);
    
    if (!response.ok) {
      const msg = data?.error?.message || data?.message || response.statusText || "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    } else {
      // Format dates
      data.checkDay = formatDate(data.checkDay);
      data.weekOne.start = formatDateWeek(data.weekOne.start);
      data.weekOne.end = formatDateWeek(data.weekOne.end);
      data.weekTwo.start = formatDateWeek(data.weekTwo.start);
      data.weekTwo.end = formatDateWeek(data.weekTwo.end);
    }
    
    return data;
  } catch (networkErr) {
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;
  }
}

// NEW: Alias for fetchUserSummary (for Dashboard.jsx compatibility)
export async function fetchUserInfo(index) {
  return fetchUserSummary(index);
}

// NEW: Get payment data for a specific week (uses summary endpoint)
export async function fetchPaymentPerWeek(index) {
  try {
    const response = await fetch(`${GOOGLE_API}/paychecks/summary?index=${index}`, {
      credentials: "include",
      headers: {
        ...authHeaders()
      }
    });
    
    const data = await response.json().catch(() => null);
    
    if (!response.ok) {
      const msg = data?.error?.message || data?.message || response.statusText || "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    
    return data;
  } catch (networkErr) {
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;
  }
}

// ------------- Workplace API (uses /user/config routes) -------------

export async function insertWorkplace(workplace, wage) {
  try {
    const response = await fetch(`${CRUD_API}/workplace`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders(),
      },
      body: JSON.stringify({
        workplace: workplace,
        hourlyRate: wage
      }),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to insert workplace");
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error inserting workplace:", error);
    throw error;
  }
}

export async function deleteWorkplace(workplaceId) {
  try {
    const response = await fetch(`${CRUD_API}/workplace/${workplaceId}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        ...authHeaders()
      }
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to delete workplace");
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error deleting workplace:", error);
    throw error;
  }
}

export async function fetchWorkplaces() {
  try {
    const response = await fetch(`${CRUD_API}/workplace`, {
      headers: {
        ...authHeaders()
      },
      credentials: "include"
    });
    
    const data = await response.json().catch(() => null);
    
    if (!response.ok) {
      const msg = data?.error?.message || data?.message || response.statusText || "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    
    return data;
  } catch (networkErr) {
    const err = new Error("Network error while fetching workplaces");
    err.cause = networkErr;
    err.status = 0;
    throw err;
  }
}

// ------------- Calendar API (uses /user/config routes) -------------

// NEW: Fixed to use proper HTTP methods (POST/DELETE instead of PUT)
export async function toggleCalendar(calendarId, summary, active, primary) {
  if (active) {
    // Delete calendar - using DELETE method
    try {
      const res = await fetch(`${CRUD_API}/calendars`, {
        credentials: "include",
        method: "DELETE",
        body: JSON.stringify({
          calendarId: calendarId,
          primary: primary
        }),
        headers: { 
          "Content-Type": "application/json",
          ...authHeaders()
        },
      });
      
      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        const error = await res.json();
        console.error("Error deleting calendar:", error);
        throw new Error(error.message || "Failed to delete calendar");
      }
    } catch (err) {
      console.error("Network error deleting calendar:", err);
      throw err;
    }
  } else {
    // Add calendar - using POST method
    try {
      const res = await fetch(`${CRUD_API}/calendars`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
          calendarId: calendarId,
          summary: summary
        }),
        headers: { 
          "Content-Type": "application/json",
          ...authHeaders()
        },
      });
      
      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        const error = await res.json();
        console.error("Error adding calendar:", error);
        throw new Error(error.message || "Failed to add calendar");
      }
    } catch (err) {
      console.error("Network error adding calendar:", err);
      throw err;
    }
  }
}

export async function fetchCalendars() {
  try {
    const response = await fetch(`${CRUD_API}/calendars`, {
      headers: {
        ...authHeaders()
      },
      credentials: "include"
    });
    
    const data = await response.json().catch(() => null);
    
    if (!response.ok) {
      const msg = data?.error?.message || data?.message || response.statusText || "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    
    return data;
  } catch (networkErr) {
    const err = new Error("Network error while fetching calendars");
    err.cause = networkErr;
    err.status = 0;
    throw err;
  }
}

export async function fetchActiveCalendars() {
  try {
    const response = await fetch(`${CRUD_API}/calendars/active`, {
      headers: {
        ...authHeaders()
      },
      credentials: "include"
    });
    
    const data = await response.json().catch(() => null);
    
    if (!response.ok) {
      const msg = data?.error?.message || data?.message || response.statusText || "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    
    return data;
  } catch (networkErr) {
    const err = new Error("Network error while fetching active calendars");
    err.cause = networkErr;
    err.status = 0;
    throw err;
  }
}

// NEW: Fixed endpoint from /existCalendars to /calendars/exists
export async function calendarExists() {
  try {
    const res = await fetch(`${CRUD_API}/calendars/exists`, {
      headers: {
        ...authHeaders()
      },
      credentials: "include"
    });
    
    const data = await res.json();
    return data.exists; // Changed from calendarExists to exists
  } catch (error) {
    console.error("Error checking calendar existence:", error);
    return false;
  }
}

// ------------- Other API -------------

export async function getSessionUserId() {
  const res = await fetch(`${API_BASE}/user/session`, {
    headers: {
      ...authHeaders()
    },
    credentials: "include"
  });
  
  const data = await res.json();
  return data.userId;
}

export async function randomPhrase(type) {
  try {
    const response = await fetch(`${CRUD_API}/randomPhrase?phraseType=${type}`, {
      headers: {
        ...authHeaders()
      },
      credentials: "include"
    });
    
    const data = await response.json().catch(() => null);
    
    if (!response.ok) {
      const msg = data?.error?.message || data?.message || response.statusText || "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    
    return data;
  } catch (networkErr) {
    const err = new Error("Network error while fetching phrase");
    err.cause = networkErr;
    err.status = 0;
    throw err;
  }
}
