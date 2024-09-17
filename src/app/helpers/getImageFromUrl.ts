import baseInstance from "../api";

async function getImageFromUrl(route: string): Promise<Buffer | null> {
  try {
    //const response = await baseInstance.get(url, { responseType: "arraybuffer" });
    const response = await baseInstance.get(route, {
        /*headers: {
          Authorization: `Bearer ${token}`,
        }, */
    });

    if (response.status !== 200) {
      console.error(`Failed to fetch image: ${response.statusText}`);
      return null;
    }

    // Convert array buffer to Buffer
    const buffer = Buffer.from(response.data, "binary");
    return buffer;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}

export default getImageFromUrl;
