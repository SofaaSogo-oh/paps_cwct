
export const useHandleChange = (set_FormData) => (e) => {
    set_FormData({...FormData, [e.target.name]: e.target.value})
}