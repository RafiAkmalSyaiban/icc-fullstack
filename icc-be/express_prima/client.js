import axios from 'axios'
const getData =async ()=>{
    try {
        const {data} = await axios.get('http://localhost:8000/registration')
        console.log(data)
    } catch (error) {
        console.log(error) 
    }
}
getData();

const createData = async (fullname,nim,email,phoneNumber,address)=>{
    try {
        const res = await axios.post('http://localhost:8000//registration',{
            fullName,
            nim,
            email,
            phoneNumber,
            address
    })
    console.log(res)
        }catch (error) {
        console.log(error.message)  
    }
}

