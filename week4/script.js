/*let arr=['cvr',20,'hyd']
let name=arr[0]
let age=arr[1]
let add=arr[2]
console.log(name,age,add)
// after destructing 
//let user=['cvr', ,'hyd']
//let[name,age=0,add]=user
console.log(name,age,add)
//object destructuring
let user={
    name:'dora',
    age:6,
    loc:'hyd',
    "user details"(){
        console.log("details")
    }

}
user[ "user details"]()
//
let user={
    name:'dora',
    //age:6,
    loc:'hyd',
    "user details"(){
        console.log("details")
    }

}
let{name:na,age=7,loc}=user
console.log(na,age,loc)
//
let user={
    name:'dora',
    loc:'hyd',
    phone:{
       home:23558,
       office:457637

    }

}
let{name,loc,phone}=user
console.log(name,loc,phone)
/*
 let user={
            name:'dora',
            loc:'hyd',
            phone:{
               home:23558,
               office:457637

            }

        }
      let{name,loc,phone:{home,office}}=user
      console.log(name,loc,office)

///////////
classes
class Myclass{
            constructor(){
                console.log("inheritance")
            }

            getName(){ return this.name ='chimptu'}
        }
        class child extends Myclass{}
        let o=new child()
        console.log(o.getName())

ASYNC
async function sample(){
            console.log("sam")
            return 'cvrce'
        }
         console.log(sample())
        console.log("after")

async function sample(){
            console.log("sam")
            return 'cvrce'
        }
         console.log(sample().then(res=>console.log(res)))
        console.log("after")

      */
