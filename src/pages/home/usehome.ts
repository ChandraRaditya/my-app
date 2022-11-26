function useHome() {
    const nama = 'chandra'
    const stack = 'front end'

    const activity = () => {
        return 'hallo semuanya'
    }

    return {
        data: {
            nama,
            stack
        },
        method: {
            activity
        }
    }
}

export default useHome;