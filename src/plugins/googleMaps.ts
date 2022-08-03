import { Loader, type LoaderOptions } from 'google-maps'

const options: LoaderOptions = {}
const loader = new Loader(undefined, options)

export async function loadGoogleMaps() {
  const google = await loader.load()
  return google
}
