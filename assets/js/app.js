

const cl = console.log;

// const postForm = document.getElementById('postForm')
// const titleConrol = document.getElementById('title')
// const contentControl = document.getElementById('content')
// const userIdControl = document.getElementById('userId')
// const addpostbtn = document.getElementById('addpostbtn')
// const updatepostbtn = document.getElementById('updatepostbtn')

// const postcontaner = document.getElementById('postcontaner')

// let BASE_URL = `https://jsonplaceholder.typicode.com`

// let POST_URL = `${BASE_URL}/posts`

// function snackBar(title,icon){
//     Swal.fire({
//         title,
//         icon,
//         timer :1000
//     })
// }

// function fetchAllposts(){
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET',POST_URL)

//     xhr.onload = function(){
//         if(xhr.status >=200 && xhr.status < 300){
//             let data = JSON.parse(xhr.response)
//             cl(data)

//             //templating
//             createCards(data)
//         }
//     }
//     xhr.send(null)
// }
// fetchAllposts()



// function createCards(arr){
//     let result = arr.map(post=>{
//         return `<div class="card mb-3 shadow rounded" id = "${post.userId}">
//                     <div class="card-header">
//                         <h3 class="m-0">${post.title}</h3>
//                     </div>
//                     <div class="card-body">
//                         <p class="m-0">
//                             ${post.body}
//                         </p>
//                     </div>
//                     <div class="card-footer d-flex justify-content-between">
//                         <button class="btn btn-sm btn-outline-primary">Edit</button>
//                         <button class="btn btn-sm btn-outline-danger" onclick = "onRemove(this)">Remove</button>
//                     </div>
//                 </div>`
//     }).join('')
// postcontaner.innerHTML = result

// }



// function onPostSubmit(eve){
//     eve.preventDefault()

//     let postObj = {
//         title : titleConrol.value,
//         body : contentControl.value,
//         userId : userIdControl.value
//     }

//     cl(postObj)

//     eve.target.reset()

//     //Api call

//     let xhr = new XMLHttpRequest();

//     xhr.open('POST',POST_URL)

//     xhr.onload = function(){
//         if(xhr.status >=200 && xhr.status <300){
//             let res = JSON.parse(xhr.response)
//             cl(res)

//             let card = document.createElement('div')
//             card.className = `card mb-3 shadow rounded`
//             card.id = res.id
//             card.innerHTML = `<div class="card-header">
//                         <h3 class="m-0">${postObj.title}</h3>
//                     </div>
//                     <div class="card-body">
//                         <p class="m-0">
//                             ${postObj.body}
//                         </p>
//                     </div>
//                     <div class="card-footer d-flex justify-content-between">
//                         <button class="btn btn-sm btn-outline-primary">Edit</button>
//                         <button class="btn btn-sm btn-outline-danger">Remove</button>
//                     </div>`

//                     postcontaner.append(card)
//                     snackBar(`card created successfully`,`success`)
//         }else{
//         snackBar(`error`,`error`)
//     }
//     }

//     xhr.send(JSON.stringify(xhr.postObj))

// }


// function onRemove(ele){

//     let REMOVE_Id = ele.closest('.card').id;
//     cl(REMOVE_Id)

//     let REMOVE_URL =`${BASE_URL}/posts/${REMOVE_Id}`

//     let xhr = new XMLHttpRequest();

//     xhr.open('DELETE',REMOVE_URL)

//     xhr.onload = function(){
//         if(xhr.status >=200 && xhr.status <300){
//             let res = xhr.response
//             cl(res)
//             snackBar(`The card is removed successfully`,`success`)
//             ele.closest('.card').remove()
//         }else{
//             snackBar(`card not deleted`,`error`)
//         }
//     }

// xhr.send(null)
// }






// postForm.addEventListener('submit',onPostSubmit)


const postForm = document.getElementById('postForm')
const titleControl = document.getElementById('title')
const contentControl = document.getElementById('content')
const userIdControl = document.getElementById('userId')
const addpostbtn = document.getElementById('addpostbtn')
const updatepostbtn = document.getElementById('updatepostbtn')

const postcontaner = document.getElementById('postcontaner')

let BASE_URL = `https://jsonplaceholder.typicode.com`

let POST_URL = `${BASE_URL}/posts`


function snackBar(title,icon){
    Swal.fire({
        title,
        icon,
        timer:1000
    })
}

function fetchAllpost(){
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET',POST_URL)

    xhr.onload = function(){
        if(xhr.status>=200 && xhr.status<300){
            let data = JSON.parse(xhr.response)
            cl(data)

            //templating
            createCards(data)

        }
    }
    xhr.send(null)
}
fetchAllpost()

function createCards(arr){
    let result = arr.map(post=>{
        return `<div class="card mb-3 shadow rounded" id = "${post.id}">
                    <div class="card-header">
                        <h3 class="m-0">${post.title}</h3>
                    </div>
                    <div class="card-body">
                        <p class="m-0">
                            ${post.body}
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <button class="btn btn-sm btn-outline-primary" onclick = "onEdit(this)">Edit</button>
                        <button class="btn btn-sm btn-outline-danger" onclick = "onRemove(this)">Remove</button>
                    </div>
                </div>`
    }).join('')
    postcontaner.innerHTML = result
}


// function onEdit(ele){

//     let EDIT_ID = ele.closest('.card').id
//     cl(EDIT_ID)

//     localStorage.setItem('EDIT_ID',EDIT_ID)
   
//     let EDIT_URL = `${POST_URL}/${EDIT_ID}`

//     let xhr = new XMLHttpRequest();

//     xhr.open('GET',EDIT_URL)

//     xhr.onload = function(){
//         if(xhr.status>=200 && xhr.status<300){
//             let res = JSON.parse(xhr.response)
//             cl(res)

//             titleControl.value = res.title;
//             contentControl.value = res.body;
//             userIdControl.value = res.userId;
//         }else{
//             snackBar(`something went wrong`)
//         }
//     }

//     xhr.send(null)

// }

// function onEdit(ele){
//     let EDIT_ID = ele.closest('.card').id;

//     localStorage.setItem('EDIT_ID',EDIT_ID)

//     let EDIT_URL = `${POST_URL}/${EDIT_ID}`

//     let xhr = new XMLHttpRequest();

//     xhr.open('GET',EDIT_URL)

//     xhr.onload = function(){
//         if(xhr.status>=200 && xhr.status<300){
//             let res = JSON.parse(xhr.response)
//             cl(res)

//             titleControl.value = res.title;
//             contentControl.value = res.body;
//             userIdControl.value = res.userId;
//         }else{
//             snackBar('something wrong','error')
//         }
//     }
//     xhr.send(null)
// }



// function onSubmitpost(eve){
//     eve.preventDefault()

//     let postObj = {
//         title : titleControl.value,
//         body : contentControl.value,
//         userId : userIdControl.value
//     }

//     cl(postObj)


//     eve.target.reset()

//     let xhr = new XMLHttpRequest();

//     xhr.open('POST',POST_URL)

//     xhr.onload = function(){
//         if(xhr.status >=200 && xhr.status <300){
//             let res = JSON.parse(xhr.response)
//             cl(res)

//             let card = document.createElement('div')
//             card.className = 'card mb-3 shadow ronded'
//             card.id = res.id
//             card.innerHTML = `<div class="card-header">
//                         <h3 class="m-0">${postObj.title}</h3>
//                     </div>
//                     <div class="card-body">
//                         <p class="m-0">
//                            ${postObj.body}
//                         </p>
//                     </div>
//                     <div class="card-footer d-flex justify-content-between">
//                         <button class="btn btn-sm btn-outline-primary">Edit</button>
//                         <button class="btn btn-sm btn-outline-danger" onclick = "onRemove(this)">Remove</button>
//                     </div>`
//                     postcontaner.append(card)
//                     snackBar(`card created successfully`,'success')

//         }else{
//             snackBar('something went wrong','error')
//         }

//     }
//     xhr.send(JSON.stringify(postObj))
// }

// function onSubmitpost(eve){
//     eve.preventDefault()

//     let postObj = {
//         title : titleControl.value,
//         body : contentControl.value,
//         userId : userIdControl.value
//     }

//     cl(postObj)


//     eve.target.reset()

//     let xhr = new XMLHttpRequest();

//     xhr.open('POST',POST_URL)

//     xhr.onload = function(){
//         if(xhr.status >=200 && xhr.status <300){
//             let res = JSON.parse(xhr.response)
//             cl(res)

//             let card = document.createElement('div')
//             card.className = 'card mb-3 shadow ronded'
//             card.id = res.id
//             card.innerHTML = `<div class="card-header">
//                         <h3 class="m-0">${postObj.title}</h3>
//                     </div>
//                     <div class="card-body">
//                         <p class="m-0">
//                            ${postObj.body}
//                         </p>
//                     </div>
//                     <div class="card-footer d-flex justify-content-between">
//                         <button class="btn btn-sm btn-outline-primary">Edit</button>
//                         <button class="btn btn-sm btn-outline-danger" onclick = "onRemove(this)">Remove</button>
//                     </div>`
//                     postcontaner.append(card)
//                     snackBar(`card created successfully`,'success')

//         }else{
//             snackBar('something went wrong','error')
//         }

//     }
//     xhr.send(JSON.stringify(postObj))
// }

function onSubmitpost(eve){
    eve.preventDefault()

    let postObj = {
        title : titleControl.value,
        body : contentControl.value,
        userId : userIdControl.value
    }

    cl(postObj)


    eve.target.reset()

    let xhr = new XMLHttpRequest();

    xhr.open('POST',POST_URL)

    xhr.onload = function(){
        if(xhr.status >=200 && xhr.status <300){
            let res = JSON.parse(xhr.response)
            cl(res)

            let card = document.createElement('div')
            card.className = 'card mb-3 shadow ronded'
            card.id = res.id
            card.innerHTML = `<div class="card-header">
                        <h3 class="m-0">${postObj.title}</h3>
                    </div>
                    <div class="card-body">
                        <p class="m-0">
                           ${postObj.body}
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <button class="btn btn-sm btn-outline-primary">Edit</button>
                        <button class="btn btn-sm btn-outline-danger" onclick = "onRemove(this)">Remove</button>
                    </div>`
                    postcontaner.append(card)
                    snackBar(`card created successfully`,'success')

        }else{
            snackBar('something went wrong','error')
        }

    }
    xhr.send(JSON.stringify(postObj))
}



// function onRemove(ele){

//     let REMOVE_Id = ele.closest('.card').id;
//     cl(REMOVE_Id)

//     let REMOVE_URL = `${BASE_URL}/posts/${REMOVE_Id}`
    
//     let xhr = new XMLHttpRequest();

//     xhr.open('DELETE',REMOVE_URL)

//     xhr.onload = function(){
//         if(xhr.status>=200 && xhr.status<300){
//             let res = xhr.response
//             cl(res)
//             snackBar(`Card Deleted `,'success')
//             ele.closest('.card').remove()
//         }else{
//         snackBar(`something went wrong`,`error`)
//     }
//     }
//     xhr.send(null)
// }

function onRemove(ele){

    let REMOVE_Id = ele.closest('.card').id;

    let REMOVE_URL = `${BASE_URL}/posts/${REMOVE_Id}`

    let xhr = new XMLHttpRequest();

    xhr.open('DELETE',REMOVE_URL)

    xhr.onload = function(){
        if(xhr.status>=200 && xhr.status<300){
            let res = xhr.response
            cl(res)
            snackBar(`Card Deleted `,'success')
            ele.closest('.card').remove()
        }else{
            snackBar('something went wrong')
        }
    }
    xhr.send(null)
}

// function onEdit(ele){

//     let EDIT_ID = ele.closest('.card').id
//     cl(EDIT_ID)

//     localStorage.setItem('EDIT_ID',EDIT_ID)
   
//     let EDIT_URL = `${POST_URL}/${EDIT_ID}`

//     let xhr = new XMLHttpRequest();

//     xhr.open('GET',EDIT_URL)

//     xhr.onload = function(){
//         if(xhr.status>=200 && xhr.status<300){
//             let res = JSON.parse(xhr.response)
//             cl(res)

//             titleControl.value = res.title;
//             contentControl.value = res.body;
//             userIdControl.value = res.userId;
//         }else{
//             snackBar(`something went wrong`)
//         }
//     }

//     xhr.send(null)

// }

function onEdit(ele){
    let EDIT_ID = ele.closest('.card').id;

    localStorage.setItem('EDIT_ID',EDIT_ID)

    let EDIT_URL = `${POST_URL}/${EDIT_ID}`

    let xhr = new XMLHttpRequest();

    xhr.open('GET',EDIT_URL)

    xhr.onload = function(){
        if(xhr.status>=200 && xhr.status<300){
            let res = JSON.parse(xhr.response)
            cl(res)

            titleControl.value = res.title;
            contentControl.value = res.body;
            userIdControl.value = res.userId;

            updatepostbtn.classList.remove('d-none')
            addpostbtn.classList.add('d-none')
        }else{
            snackBar('something wrong','error')
        }
    }
    xhr.send(null)
}

function onUpdatepost(){

    let UPDATED_ID = localStorage.getItem('EDIT_ID')

    let UPDATE_URL = `${POST_URL}/${UPDATED_ID}`

    let UpdatedObj = {
        title : titleControl.value,
        body : contentControl.value,
        userId : userIdControl.value
    }

    let xhr = new XMLHttpRequest();

    xhr.open('PUT',UPDATE_URL)

    xhr.onload = function(){
        if(xhr.status>=200 && xhr.status<300){
            let res = JSON.parse(xhr.response)
            cl(res)

            let card = document.getElementById(UPDATED_ID)
            card.querySelector('.card-header h3').innerHTML = UpdatedObj.title
            card.querySelector('.card-body p').innerHTML = UpdatedObj.body

            updatepostbtn.classList.add('d-none')
            addpostbtn.classList.remove('d-none')

            snackBar(`card updated successfully`,'success')

            postForm.reset()
        }
    }
    xhr.send(JSON.stringify(UpdatedObj))
}




postForm.addEventListener("submit",onSubmitpost)
updatepostbtn.addEventListener('click',onUpdatepost)


