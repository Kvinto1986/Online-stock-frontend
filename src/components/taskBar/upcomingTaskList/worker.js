const workerLogic = () => {
    const workercode = () => {
        const filterByTime = (tasks, time) => {
            return tasks.filter(a => {
                const subMs = new Date(a.deadlineData).getTime() - new Date().getTime()
                return subMs <= time
            })
        }
    
        const getMS = (hours) => hours * 3600 * 1000
    
        onmessage = function(e) {
            const { barData, hours } = e.data
            const HOURS_IN_MS = getMS(hours)
    
            const responseData = filterByTime(barData, HOURS_IN_MS)
            postMessage(responseData)
        }
    }
    
    let code = workercode.toString()
    code = code.substring(code.indexOf('{')+1, code.lastIndexOf('}'))
    const blob = new Blob([code], {type: 'application/javascript'})

    return URL.createObjectURL(blob)
}

export default workerLogic