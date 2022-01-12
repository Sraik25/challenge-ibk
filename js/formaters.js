//@ts-check

export function getContentFormater(arr = []) {
  const format = arr.map((item) => `<p>${item}</p>`);

  return format.join('<br />');
}

export function getModalContainer(arr = []) {
  if (window.innerWidth >= 1400) {
    return getContentFormater(arr);
  } else {
    return getContentFormater(arr.concat(arr[0]));
  }
}
