const useLocalStorage = {
    setUser: (token) => localStorage.setItem('online-exam-user', token),
    getUser: () => localStorage.getItem('online-exam-user'),
    removeUser: () => localStorage.removeItem('online-exam-user'),
    setAdmin: (token) => localStorage.setItem('online-exam-admin', token),
    getAdmin: () => localStorage.getItem('online-exam-admin'),
    removeAdmin: () => localStorage.removeItem('online-exam-admin'),
    // setBacktrackUrl: (data) => localStorage.setItem('online-exam-backtrack-url', data),
    // getBacktrackUrl: () => localStorage.getItem('online-exam-backtrack-url')
};

export default useLocalStorage