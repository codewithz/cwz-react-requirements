 const errorsClone = { ...errors };
        const errorMessage = validateProperty({id,value});
        if (errorMessage) {
            errorsClone[id] = errorMessage;
        }
        else {
            delete errorsClone[name];
        }
        setErrors(errorsClone)
