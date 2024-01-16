export async function fetchNews() {
  const endpoint = process.env.CMS_URL + "/news?limit=4";
  const res = await fetch(endpoint, {
    method: "GET",
  });

  if (!res.ok) throw new Error("Couldn't fetch data");
  const data = await res.json();

  return data.docs;
}

export async function fetchContainers() {
  const endpoint =
    process.env.CMS_URL +
    "/containers?where[slug][equals]=galleryinstalll&depth=2";
  const res = await fetch(endpoint, {
    method: "GET",
  });

  if (!res.ok) throw new Error("Couldn't fetch data");
  const data = await res.json();

  return data.docs;
}
