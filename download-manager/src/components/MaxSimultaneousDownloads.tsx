import React, { useEffect, useState, useCallback } from "react";

export const MaxSimultaneousDownloads = () => {
    const [maxSimultaneousDownloads, setMaxSimultaneousDownloads] = useState(0)

    const fetchData = useCallback(async()=> {
        const data = await getData();
        setMaxSimultaneousDownloads(data)
      }, [])

    const getData = async () => {
        const res = await fetch('https://localhost:7090/getMaximumSimultaneous')
        const json = await res.json()
        
        return json
    }

    const updateData = async (newValue: number) => {
        const url = 'https://localhost:7090/setMaximumSimultaneous?maxSimultaneousDownloads=' + newValue
        const res = await fetch(url, {
            method: "PUT"
        })

        console.log("update")
    }

    useEffect(() =>{
        fetchData()
    }, [fetchData])
    
    const handleChange = (changeEvent: any) => {
        updateData(changeEvent.target.value)
        setMaxSimultaneousDownloads(changeEvent.target.value)
    }

    return (
        <div className="flex flex-col">
            <label>Set maximum amount of simultaneous downloads</label>
            <input type="number" min={1} max={10} value={maxSimultaneousDownloads} onChange={handleChange}/>
        </div>
    );
}