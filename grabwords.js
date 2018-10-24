let scrapewords = startIndex => {
  let rows = [
    ...document.querySelector(".topwords").querySelectorAll("tr")
  ].slice(1)

  let data = rows.map(row =>
    [...row.querySelectorAll("td")].slice(startIndex).map(el => el.textContent.trim())
  )

  return data
}
