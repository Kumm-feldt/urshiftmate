const API_BASE = import.meta.env.VITE_API_URL || "https://urshiftmate.onrender.com";

const API = `${API_BASE}/google/api`
const CRUD_API = `${API_BASE}/user/config`
const AUTH_API = `${API_BASE}/auth`


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
    console.error('Auth check failed:', e);
    return { isAuthenticated: false };
  }
}

function formatDate(inputDate){
    const date = new Date(inputDate);

    const formatted = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
    }).format(date);

    return formatted;
}

function formatDateWeek(isoDate, locale = "en-US"){

  const [y, m, d] = isoDate.split("-").map(Number);
  const dt = new Date(y, m - 1, d); // local time constructor (no timezone shift)
  return dt.toLocaleDateString(locale, { month: "long", day: "numeric"});

}

export async function fetchPaymentPerWeek(index){
  try {
    const response = await fetch(`${API}/paymentPerWeek?index=${index}`, {
            credentials: "include",
      headers: {
        ...authHeaders()
      }
    });

    const data = await response.json().catch(()=>null)

    if(!response.ok){
      const msg =
        data?.error?.message ||
        data?.message ||
        response.statusText ||
        "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    return data

  } catch (networkErr) {
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;  }
}

export async function fetchDetailedEvents (index){
  try {
    const response = await fetch(`${API}/detailedEvents?index=${index}`, {
            credentials: "include",
      headers: {
        ...authHeaders()
      }
    });

    const data = await response.json().catch(()=>null)

    if(!response.ok){
      const msg =
        data?.error?.message ||
        data?.message ||
        response.statusText ||
        "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    return data

  } catch (networkErr) {
    // Network / CORS / DNS / offline
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;  }
}

export async function fetchSummarizedEvents (index) {
    try {
      const response = await fetch(`${API}/summaryEvents?index=${index}`, {
      credentials: "include",
      headers: {
        ...authHeaders()
      }
      });

    const data = await response.json().catch(()=>null)

    if(!response.ok){
      const msg =
        data?.error?.message ||
        data?.message ||
        response.statusText ||
        "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    return data

  } catch (networkErr) {
    // Network / CORS / DNS / offline
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;  }
}

export async function fetchUserSummary (index) {
    try {
      const response = await fetch(`${API}/summaryUser?index=${index}`, {
              credentials: "include",
      headers: {
        ...authHeaders()
      }
      });
 
    const data = await response.json().catch(()=>null)

    if(!response.ok){

      const msg =
        data?.error?.message ||
        data?.message ||
        response.statusText ||
        "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }else{
      data.checkDay = formatDate(data.checkDay);
      data.startWeekOne = formatDateWeek(data.startWeekOne);

      data.endWeekOne = formatDateWeek(data.endWeekOne);
      data.startWeekTwo = formatDateWeek(data.startWeekTwo);
      data.endWeekTwo = formatDateWeek(data.endWeekTwo);
    }
    return data

  } catch (networkErr) {
    // Network / CORS / DNS / offline
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;  }
}

export async function fetchUserInfo (index) {
    try {
      const response = await fetch(`${API}/user/info?index=${index}`, {
              credentials: "include",
      headers: {
        ...authHeaders()
      }
      });
 
    const data = await response.json().catch(()=>null)

    if(!response.ok){
      const msg =
        data?.error?.message ||
        data?.message ||
        response.statusText ||
        "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }else{
      data.checkDay = formatDate(data.checkDay);
      data.startWeekOne = formatDateWeek(data.startWeekOne);

      data.endWeekOne = formatDateWeek(data.endWeekOne);
      data.startWeekTwo = formatDateWeek(data.startWeekTwo);
      data.endWeekTwo = formatDateWeek(data.endWeekTwo);
    }
    return data

  } catch (networkErr) {
    // Network / CORS / DNS / offline
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;  }
}


export async function insertWorkplace (workplace, wage) {
  try {

     fetch(`${CRUD_API}/workplace`, {
      method: "POST",
            credentials: "include",
      headers: {
        ...authHeaders()
      },
      body: JSON.stringify({
        workplace: workplace,
        hourlyRate: wage
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        ...authHeaders(),
      },

    });


  } catch (error) {
    console.error("Error inserting:", error);
  }
};


export async function deleteWorkplace (workplaceId) {
  try {

     fetch(`${CRUD_API}/workplace/${workplaceId}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        ...authHeaders()
      }
    });


  } catch (error) {
    console.error("Error inserting:", error);
  }
};



export async function toggleCalendar(calendarId, summary, active, primary){
  // delete calendar

  if(active){
    try {
          const res = await fetch(`${CRUD_API}/calendars/delete`, {
                  credentials: "include",
            method: "PUT", 
            body: JSON.stringify({
              calendarId : calendarId,
              primary: primary
            }),
              headers: { "Content-Type": "application/json", 
                ...authHeaders()
               }, // ✅ important


          });

          if (res.ok) {
            const data = await res.json();
            return data;
          } else {
            const error = await res.json(); // wait for the JSON before logging
            console.error("Error deleting calendar:", error);
          }
        } catch (err) {
          console.error("Network error deleting calendar:", err);
        }
  }else{
  
    // add calendar
    try {
      const res = await fetch(`${CRUD_API}/calendars/add`, {
              credentials: "include",
        method: "PUT", 
        body: JSON.stringify({
            calendarId : calendarId,
            summary : summary
        }),
          headers: { "Content-Type": "application/json" ,
             ...authHeaders()}, // ✅ important
       


      });
      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        const error = await res.json(); // wait for the JSON before logging
        console.error("Error adding calendar:", error);
      }
    } catch (err) {
      console.error("Network error adding calendar:", err);
    }
  }

}

export async function fetchWorkplaces() {
  try {
    const response = await fetch(`${CRUD_API}/workplace`, {
       headers: {
        ...authHeaders()
      } ,
      credentials: "include"
    });

    const data = await response.json().catch(()=>null)

    if(!response.ok){
      const msg =
        data?.error?.message ||
        data?.message ||
        response.statusText ||
        "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    return data

  } catch (networkErr) {
    // Network / CORS / DNS / offline
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;  }
}


export async function getSessionUserId() {
  const res = await fetch(`${API_BASE}/user/session`, {
     headers: {
        ...authHeaders()
      } ,
    credentials: "include" 
  });
  const data = await res.json();
  return data.userId;
}

export async function calendarExists() {
  const res = await fetch(`${API}/existCalendars`, {
     headers: {
        ...authHeaders()
      } ,
    credentials: "include" 
  });
  const data = await res.json();
  return data.calendarExists;
}


export async function fetchCalendars(){
  try {
    const response = await fetch(`${CRUD_API}/calendars`, {
       headers: {
        ...authHeaders()
      } ,
      credentials: "include"
    });

    const data = await response.json().catch(()=>null)

    if(!response.ok){
      const msg =
        data?.error?.message ||
        data?.message ||
        response.statusText ||
        "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    return data

  } catch (networkErr) {
    // Network / CORS / DNS / offline
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;  }
}

export async function fetchActiveCalendars(){
  try{
      const response = await fetch(`${CRUD_API}/calendars/active`,{
         headers: {
        ...authHeaders()
      } ,
        credentials:"include"
      });

    const data = await response.json().catch(()=>null)

    if(!response.ok){
      const msg =
        data?.error?.message ||
        data?.message ||
        response.statusText ||
        "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    return data

  } catch (networkErr) {
    // Network / CORS / DNS / offline
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;  }
}

export async function randomPhrase(type){
  try{
    const response = await fetch(`${CRUD_API}/randomPhrase?phraseType=${type}`, {
       headers: {
        ...authHeaders()
      } ,
        credentials:"include"
      })
    const data = await response.json().catch(()=>null)

    if(!response.ok){
      const msg =
        data?.error?.message ||
        data?.message ||
        response.statusText ||
        "Request failed";
      const err = new Error(msg);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    return data

  } catch (networkErr) {
    // Network / CORS / DNS / offline
    const err = new Error("Network error while fetching events");
    err.cause = networkErr;
    err.status = 0;
    throw err;  }
}
