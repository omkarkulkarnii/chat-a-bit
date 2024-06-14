const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        password: {

            type: String,
            required: true
        },
        pic: {
            type: String,
            default: "https://imgs.search.brave.com/XffF_54fB8FydC6Dy_83VuVvEU3MciLI2_Ie5VPTUn4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/OTM5MDExMS9waG90/by9sb25kb24tbXIt/YmVhbi1wb3Nlcy13/aXRoLXJlZC1ub3Nl/LWZvci1yZWQtbm9z/ZS1kYXktMTk5MS1p/bi1hLXN0dWRpby1v/bi0xNS1tYXJjaC0x/OTkxLWluLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1zTWtZ/R2ZqbE1sNm85WjJo/OE9uT3BHdDI5SE0x/ckN4eXVRQWp5OWxK/bjU0PQ",
        },
        
    },
    {timestamps: true}
)

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}




userSchema.pre('save', async function(next){
if(!this.isModified){
    next()
}else{
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
}
})


const User = mongoose.model("User", userSchema)
module.exports = {User};