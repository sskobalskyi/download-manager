import React, { useState } from 'react'
import { IAddDownloadRequest } from '../Interfaces/IAddDownloadRequest'

export const AddDownload = () => {
    const [downloads, setDownloads] = useState<IAddDownloadRequest[]>([])

    const [url, setUrl] = useState("");
    const [fileName, setFilename] = useState("");
    const [downloadSpeed, setDownloadSpeed] = useState(0);

    const submit = (submitEvent: any) => {
        submitEvent.preventDefault()
        
        setDownloads([...downloads, {
            fileName: fileName,
            downloadSpeed: downloadSpeed,
            url: url
        }])
        
        clearForm()
    }

    const clearForm = () => {
        setUrl("")
        setFilename("")
        setDownloadSpeed(0)
    }

    const clearDownloads = () => {
        setDownloads([])
    }
    
    const sendDownloads = async () => {
        await fetch('https://localhost:7090/addDownloads', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body:  JSON.stringify(downloads)
        })
        clearDownloads()
    }

    return (
        <div>
            <div>
                {downloads.map((download) => {
                    return(
                        <div className='flex' key={download.fileName}> 
                            <span>
                                {download.url}
                            </span>
                            <span>
                                {download.fileName}
                            </span>
                            <span>
                                {download.downloadSpeed}
                            </span>
                        </div>
                    );
                })}
            </div>
                <div className='flex flex-col'>
                    <div>
                        <input value={url} placeholder={'url'} type="text" onChange={ (e) => setUrl(e.target.value)}/>
                        <input value={fileName} placeholder={'filename'} type="text" onChange={(e) => setFilename(e.target.value)}/>
                        <select value={downloadSpeed} onChange={(e) => setDownloadSpeed(+e.target.value)}>
                            <option value={1}>Slow</option>
                            <option value={0}>Fast</option>
                        </select>
                    </div>
                    <div className='flex flex-row-reverse'>
                        <button onClick={submit}>
                            Add
                        </button>
                    </div>
                    <button onClick={sendDownloads}>
                        Start Downloading
                    </button>
                </div>
        </div>
    )
}