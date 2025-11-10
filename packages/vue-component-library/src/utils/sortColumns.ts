
/*
 * Takes an array of items and sorts them equally across n new arrays. Great for sorting items into columns.
 */
function sortColumns<T>(items: T[], count: number = 2): T[][] {
  const buckets: T[][] = Array(count)
      .fill(0)
      .map(() => [])

  let pointer = 0

  items.forEach((item) => {
      buckets[pointer].push(item)
      pointer = (pointer + 1) % count
  });

  return buckets
}

export default sortColumns