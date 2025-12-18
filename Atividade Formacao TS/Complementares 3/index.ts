enum UserStatus {
    Admin = 1,
    User = 2,
    Guest = 3
}

function checkStatus(status: number){
    switch(status){
        case UserStatus.Admin:
            console.log('é admin')
            break
        case UserStatus.User:
            console.log('é user')
            break
        case UserStatus.Guest:
            console.log('é convidado')
            break
    }
}
checkStatus(2)