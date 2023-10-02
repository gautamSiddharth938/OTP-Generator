console.log("Script is running.");


const generateOTP = () => {
    // var otp1 = Math.floor(100 + (Math.random() * 900));
    // var otp2 = Math.floor(100 + (Math.random() * 900));
    let otp = 0
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 9)
        otp += ""
    }
    document.getElementById('root').innerText = otp
    setTimeout(() => {
        document.getElementById('root').innerText = " "
    }, 2000)
}
document.getElementById('button').addEventListener('click', generateOTP)