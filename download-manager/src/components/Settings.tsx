import React, { useEffect, useState } from 'react';
import { PreferedStorage } from './PreferedStorage';
import { MaxSimultaneousDownloads } from './MaxSimultaneousDownloads';

export const Settings = () => {
    return(
        <div className='flex flex-col gap-2'>
            <PreferedStorage />
            <hr />
            <MaxSimultaneousDownloads />
        </div>
    );
}