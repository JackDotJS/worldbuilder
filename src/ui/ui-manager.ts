export async function loadInterface(markup: string) {
  try {
    const doc = new DOMParser().parseFromString(markup, `text/html`);

    const main = document.querySelector(`main`);
    const newMain = doc.querySelector(`main`);

    if (main == null) throw Error(`loadInterface: Could not find main element in current document.`);
    if (newMain == null) throw Error(`loadInterface: Could not find main element in replacement document.`);

    main.replaceWith(newMain);
  }

  catch (e) {
    console.error(e);
    return false;
  }

  return true;
}