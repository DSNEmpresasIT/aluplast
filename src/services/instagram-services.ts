const url:string = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=`;

export async function getInstagramImages(token: string) {
  try {
    const dataFetched = await fetch(url+token)
    const dataParsed = (await dataFetched.json()).data;

    return dataParsed.filter(
      (photo:any) => photo.media_type === 'IMAGE' || photo.media_type === "CAROUSEL_ALBUM" 
    );
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getInstagramVideos (token: string) {
  try {
    const dataFetched = await fetch(url+token)
    const dataParsed = (await dataFetched.json()).data;

    return dataParsed.filter((data:any) => data.media_type === 'VIDEO');
  } catch (error) {
    console.log(error)
    return undefined
  }
}

export async function getTheLastInstagramVideo (token: string) {
  try {
    return (await getInstagramVideos(token))[0];
  } catch (error) {
    console.log(error)
    return undefined;
  }
}
