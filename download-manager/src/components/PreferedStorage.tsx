import React, { useEffect, useState, useCallback } from "react";

export const PreferedStorage = () => {
    const [preferedStorage, setPreferedStorage] = useState(0)

    const fetchData = useCallback(async()=> {
        const data = await getData();
        setPreferedStorage(data)
      }, [])

    const getData = async () => {
        const res = await fetch('https://localhost:7090/getPreferedHistoryStorage')
        const json = await res.json()
        
        return json
    }

    const updateData = async (newValue: number) => {
        const url = 'https://localhost:7090/setPreferedHistoryStorage?preferedStorage=' + newValue
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
        setPreferedStorage(changeEvent.target.value)
    }    

    return(
        <div className="flex flex-col">
            <p>
                Select prefered history storage option
            </p>
            <div>
                <div>
                    <input name="preferedStorage" value={0} type="radio" checked={preferedStorage == 0} onChange={handleChange}/>
                    <label>Firebase</label>
                </div>

                <div>
                    <input name="preferedStorage" value={1} type="radio" checked={preferedStorage == 1} onChange={handleChange}/>
                    <label>Local Storage</label>
                </div>
            </div>
        </div>
    )
}