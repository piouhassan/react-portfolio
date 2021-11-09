const validations = (form) => {
     let errorMessage = ""
    if (!form.name || !form.email  || !form.subject || !form.message) {
        errorMessage = "please complete all fields"
    }

    else {
        errorMessage = "success";
    }

    return errorMessage
    
}

export default validations