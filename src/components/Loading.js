import React from 'react'
import { useGitHubContext } from '../GitHubContext/GitHubContext'
import LinearProgress from '@material-ui/core/LinearProgress';
export default function Loading() {
    const {loading} =useGitHubContext();
    return (
        <div style={{marginTop:"20px"}}>
        <LinearProgress />
        </div>
    )
}
