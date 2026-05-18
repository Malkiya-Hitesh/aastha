import Reviews from "./Reviws"




const REVIEW_SHEET_URL = 'https://script.google.com/macros/s/AKfycbw8_Gm_VwqpyHPbUG_tg4h1NLnlYR6K6Kfpj-m3gMoIpl58xZ1-lt0dKEn9467XmsSc/exec'

export default async function ReviwsServer() {
  let reviews = []

  try {
    const res = await fetch(REVIEW_SHEET_URL, {
      next: { revalidate: 43200 }, 
    })
    const json = await res.json()

    
    reviews = json
      .filter((row) => row['Name'] && row['Rating'])
      .map((row, i) => ({
        id:      `sheet-${i}`,
        name:    row['Name']           || '',
        role:    row['Role']           || 'Student',
        rating:  Number(row['Rating']) || 5,
        title:   row['Review Title']   || '',
        content: row['Review Content'] || row['Content'] || '',
      }))
  } catch (err) {
    console.error('Failed to fetch reviews:', err)
  }

  return < Reviews reviews={reviews} />
}