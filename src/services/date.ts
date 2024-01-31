const calculateDaysLeft = (date: string | number | Date) => {
    let d = new Date()
    let presentDate = new Date(d)
    let requiredDate = new Date(date)

    if (requiredDate.setHours(0, 0, 0, 0) <= presentDate.setHours(0, 0, 0, 0)) {
        return null
    } else {
        let difference = requiredDate.getTime() - presentDate.getTime()
        let totalDays = Math.ceil(difference / (1000 * 3600 * 24))

        return totalDays
    }
}

export {
    calculateDaysLeft
}