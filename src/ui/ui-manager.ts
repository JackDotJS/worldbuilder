export async function loadInterface(url: string) {
  try {
    const result = await fetch(url);

    if (result.status !== 200) throw new Error(`Got status ${result.status} while attempting to load interface from ${url}`)

    const markup = await result.text();
    const doc = new DOMParser().parseFromString(markup, `text/html`);

    document.querySelector(`main`)!.replaceWith(doc.querySelector(`main`)!);
  }

  catch (e) {
    console.error(e);
    return false;
  }

  return true;
}