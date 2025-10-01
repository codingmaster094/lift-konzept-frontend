export default async function GetSiteMap(params) {
  try {
    const response = await fetch(
      `${
        `${process.env.PAYLOAD_DOAMIN}/${params}` ||
        `https://lift-konzept-backend.vercel.app/${params}`
      }`,
      { next: { revalidate: 0 } }
    );
    if (!response) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data.docs[0];
  } catch (error) {
    console.error("Error in Alldata:", error);
    throw error; // Rethrow the error to be caught in the calling component
  }
}
