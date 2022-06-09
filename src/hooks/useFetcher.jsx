import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then(res => res.data).catch(error => console.log(error))

const useFetcher = (baseUrl) => {
  return useSWR(baseUrl, fetcher, { suspense: true })
}

export default useFetcher
