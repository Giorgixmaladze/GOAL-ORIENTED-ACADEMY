const os = require('os')

const info = {
    //აბრუნებს ოპერაციული სისტემის ტიპს
    type:os.type(),
    //აბრუნებს პროცესორის არქიტექტურას
    arch:os.arch(),
    //აბრუნებს ობიექტს, რომელიც შეიცავს ქსელებთან დაკავშირებულ ინფორმაციას
    network:os.networkInterfaces(),
    //აბრუნებს მომხმარებლის მთავარი ფოლდერის user ის მისამართს
    homedir:os.homedir(),
    //აბრუნებს კომპიუტერის სახელს 
    hostName:os.hostname(),
    //აბრუნებს რამდენი წამია სისტემა მუშაობს
    uptime:os.uptime()
}


console.log(info)


