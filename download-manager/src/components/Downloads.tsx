import React, {useEffect, useState} from 'react'
import { Download } from './Download'
import { IDownload } from '../Interfaces/IDownload'
import { AddDownload } from './AddDownload'


export const Downloads = () => {
    const [downloads, setDownloads] = useState<IDownload[]>([])

    const fetchData = async() => {
        const data : IDownload[] = await getDownloads();
        console.log(data)

        setDownloads(data)
      }

    const listItems = downloads.map(download => {
        return (
            <div className='ml-24 w-4/6' key={JSON.stringify(download.whenAdded)}>
                <Download whenAdded={ download.whenAdded} url={download.url} status={download.isDownloaded} />
                <hr />
            </div>
        )
    })

    const getDownloads = async () => {
        const res = await fetch('https://localhost:7090/getDownloadHistory')
        const json = await res.json()
        
        return json
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div className='flex flex-col m-20'>
            <div>
                <AddDownload />
            </div>
            <div>
                <p className='text-l'>History</p>
                <ul>{listItems}</ul>
            </div>
        </div>
    )
}