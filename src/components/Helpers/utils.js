export const formatDuration = (time) => {
    const minutes = time % 60;
    const hours = (time - minutes) / 60;
    return `${hours}:${minutes} hours`
}