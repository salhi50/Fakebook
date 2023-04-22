const redirect = (href: string) => {
  const a = document.createElement("a");
  a.href = href;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export {
  redirect
}