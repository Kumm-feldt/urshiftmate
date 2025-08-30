const API = "http://localhost:8000/google/api"
const CRUD_API = "http://localhost:8000/user/config"
const AUTH_API = "http://localhost:8000/auth"


/*
// ---- JWT token helpers ----
let authToken = sessionStorage.getItem("jwt") || null;

export function setAuthToken(token) {
  authToken = token || null;
  if (authToken) {
    sessionStorage.setItem("jwt", authToken);
  } else {
    sessionStorage.removeItem("jwt");
  }
}

export function getAuthToken() {
  return authToken;
}

function authHeader() {
  return authToken ? { Authorization: `Bearer ${authToken}` } : {};
}
*/

// ---------------------------

export async function ensureAuth() {
  try {
    const response = await fetch(`${AUTH_API}/status`, {
      credentials: "include",
    });
    
    if (response.ok) {
      const data = await response.json();
      return { isAuthenticated: data.isAuthenticated, user: data.user };
    } else {
      return { isAuthenticated: false };
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

export async function fetchDetailedEvents (index){

  try {
    const response = await fetch(`${API}/detailedEvents?index=${index}`, {
      credentials: "include",
    });

    if(response.ok){
        return response.json();
    }else{
        console.log(response.json());
    }


  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

export async function fetchSummarizedEvents (index) {
    try {
      const response = await fetch(`${API}/summaryEvents?index=${index}`, {
        credentials: "include",
      });

        if(response.ok){

            return response.json();
        }else{
                console.log(response.json());
        }


    } catch (error) {
      console.error("Error fetching events:", error);
    }
};

export async function fetchUserSummary (index) {
    try {
      const response = await fetch(`${API}/summaryUser?index=${index}`, {
        credentials: "include",
      });
 
        if(response.ok){
            const data = await response.json();

            data.checkDay = formatDate(data.checkDay);
            data.startWeekOne = formatDateWeek(data.startWeekOne);

            data.endWeekOne = formatDateWeek(data.endWeekOne);
            data.startWeekTwo = formatDateWeek(data.startWeekTwo);
            data.endWeekTwo = formatDateWeek(data.endWeekTwo);
            return data;
        }else{
            console.log(response.json());
        }


    } catch (error) {
      console.error("Error fetching events:", error);
    }
};

export async function insertWorkplace (workplace, wage) {
  try {

     fetch(`${CRUD_API}/workplace`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        workplace: workplace,
        hourlyRate: wage
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },

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
        method: "POST", 
        body: JSON.stringify({
            calendarId : calendarId,
            summary : summary
        }),


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
    const res = await fetch(`${CRUD_API}/workplace`, {
      credentials: "include"
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const error = await res.json(); // wait for the JSON before logging
      console.error("Error fetching workplaces:", error);
    }
  } catch (err) {
    console.error("Network error fetching workplaces:", err);
  }
}


export async function getSessionUserId() {
  const res = await fetch("http://localhost:8000/user/session", {
    credentials: "include" 
  });
  const data = await res.json();
  return data.userId;
}


export async function fetchCalendars(){
  try {
    const res = await fetch(`${CRUD_API}/calendars`, {
      credentials: "include"
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const error = await res.json(); // wait for the JSON before logging
      console.error("Error fetching calendars:", error);
    }
  } catch (err) {
    console.error("Network error fetching workplaces:", err);
  }
}

export async function fetchActiveCalendars(){
  try{
      const res = await fetch(`${CRUD_API}/calendars/active`,{
        credentials:"include"
      });

      if(res.ok){
        const data = await res.json()
        return data;
      }else{
        const error = await res.json()
        console.error("Problem fetching active calendars: ", error)
      }


  }catch(err){
    console.log("Error fetching active calendars")
  }
}

export async function randomPhrase(type){
  try{
    const res = await fetch(`${CRUD_API}/randomPhrase?phraseType=${type}`, {
        credentials:"include"
      })
    if(res.ok){
        const data = await res.json()
        return data;
      }else{
        const error = await res.json()
        console.error("Problem fetching random phrase: ", error)
      }
      
  }catch(err){
        console.error("Problem fetching random phrase: ", err)

  }
}