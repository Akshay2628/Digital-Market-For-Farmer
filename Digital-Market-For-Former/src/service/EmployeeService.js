import axios from 'axios';

const baseUrl="http://localhost:8080/"

class EmployeeService{
   
    //receive data from  node webservice by sending get request
    customerLoginValidation(){
        return axios.post(baseUrl+"customers/signin")
    }
    getById(id){
        console.log("in get by id")
        return axios.get(baseUrl+"customers/"+id)
    }

    addNewEmployee(emp){
        return axios.post(baseUrl+"customers",emp);

    }
    updateEmployee(emp){
        return axios.put(baseUrl+"customers/"+emp.empid,emp);

    }
    deleteemp(id){
        return axios.delete(baseUrl+"customers/"+id)
    }

}

export default new EmployeeService();