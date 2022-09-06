const STORAGE_kEY="currentUser"


const storage ={
    get(){
        return JSON.parse(localStorage.getItem(STORAGE_kEY))||[]
    },
    set(currentUser) {
        localStorage.setItem(STORAGE_kEY,JSON.stringify(currentUser))
    },
    delete(){
        localStorage.removeItem(STORAGE_kEY)
    }
}
export default storage