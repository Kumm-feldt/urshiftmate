const API = "http://localhost:8000/google/api"
const CRUD_API = "http://localhost:8000/user/config"

function formatDate(inputDate){
    const date = new Date(inputDate);

    const formatted = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
    }).format(date);

    return formatted;
}


function formatDateWeek(inputDate){
    const date = new Date(inputDate); // This will likely work but is fragile
    if (isNaN(date)) {
        console.warn("Invalid date input:", inputDate);
        return inputDate;
    }

    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
    }).format(date);
}

export async function fetchDetailedEvents (){

  try {
    const response = await fetch(`${API}/detailedEvents`, {
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

export async function fetchSummarizedEvents () {
    try {
      const response = await fetch(`${API}/summaryEvents`, {
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

export async function fetchUserSummary () {
    try {
      const response = await fetch(`${API}/summaryUser`, {
        credentials: "include",
      });
 

        if(response.ok){
            const data = await response.json();
            data.checkDay = formatDate(data.checkDay);
            data.from = formatDateWeek(data.from);
            data.to = formatDateWeek(data.to);
            return data;
        }else{
            console.log(response.json());
        }


    } catch (error) {
      console.error("Error fetching events:", error);
    }
};

export async function insertWorkplace (workplace, wage, userId) {
  try {
     fetch(`${CRUD_API}/workplace`, {
      method: "POST",

      body: JSON.stringify({
        userId: userId,
        workplace: workplace,
        wage: wage
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },

    });


 

  } catch (error) {
    console.error("Error fetching events:", error);
  }
};
