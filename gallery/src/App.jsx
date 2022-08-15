import { useState } from "react"
import { Formik, Form, Field } from 'formik'
import "./App.css"

function App() {

  const [photos, setPhotos] = useState([])

  async function searchImage({ name }) {
    const res = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${name}`, {
      headers: {
        "Authorization": "Client-ID km5m4NtAQ-9Mc5csblhzWq7hqHiSzxXyI-5rFddHMfs",
        "Accept-Version": "v1",
      },
    })

    const photos = await res.json()
    setPhotos(photos.results)
  }



  console.log(photos)

  return (
    <div className="App">
      <div className="header">
        <div className="header-form">
          <Formik
            initialValues={{ name: "" }}
            onSubmit={searchImage}
          >
            <Form>
              <Field name="name" />
              <button type="submit"> Send </button>
            </Form>
          </Formik>
        </div>
      </div>

      <div className="card">
        <div className="center">
          {photos.map(item =>
            <article key={item.id} onClick={() => window.open(item.links.html)}>
              <img src={item.urls.regular} />
              <p> {[item.description, item.alt_description].join(" - ")}</p>
            </article>
          )}
        </div>
      </div>

    </div>
  )
}

export default App
