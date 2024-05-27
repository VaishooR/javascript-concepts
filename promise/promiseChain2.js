const doProjects = () => {
    return new Promise((resolve, reject) => {
        let projectsDone = true;
        if(projectsDone){
            resolve("Projects done ")
        }else(
            reject("No projects")
        )
    })
}

const techInterview = () => {
    return new Promise((resolve, reject) => {
        let techInterview = false;
        if(techInterview){
            resolve("TechInterview Cleared")
        }else{
            reject("Tech Interview Failed")
        }
    })
}

const hrInterview = () => {
    return new Promise ((resolve,reject)=>{
        let hrInterview = true;
        if(hrInterview){
            resolve("Hr Interview Cleared")
        }else{
            reject("Hr Interview Failed")
        }
    })
}

const interviewResults = () => {
    return new Promise((resolve,reject)=>{
        let results = false;
        if(results){
            resolve("Congrats.. You have got Job.. 😍")
        }else{
            reject("Sorry.. Better Luck Next Time.. 😞")
        }
    })
}

doProjects()
.then((data)=>{
    console.log(data)
    return techInterview()
.then((data)=>{
    console.log(data)
    return hrInterview()
.then((data) => {
    console.log(data)
    return interviewResults()
.then((data)=>{
    console.log(data)
})
.catch((err)=>{console.log(err)})
}).catch((err)=>{console.log(err)})
}).catch((err)=>{console.log(err)})
}).catch((err)=>{console.log(err)})
.finally(()=>{console.log("Interview Process Over")})


// doProjects().then((data)=>{
//     console.log(data)
//     return techInterview().then((data)=>{
//             console.log(data)
//             return hrInterview().then((data) => {
//                 console.log(data)
//                 return interviewResults().then((data)=>{
//                     console.log(data)
//                 }).catch((err)=>{console.log(err)})
//             }).catch((err)=>{console.log(err)})
//     }).catch((err)=>console.log(err))
// }).catch((err)=>{console.log(err)})