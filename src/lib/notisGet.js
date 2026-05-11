


export const notisGet = async () => {
  try {
    const response = await fetch("/api/notis");
    
    const data = await response.json();
    console.log(data);
    return data;
    } catch (error) {
    console.error("Error fetching notis:", error);
    return [];
  } 
}


