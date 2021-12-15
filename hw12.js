//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//

// let divposts=document.getElementsByClassName('posts')[0]
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         console.log(value)
//         for (const postElement of value) {
//             let divPost=document.createElement('div')
//             divPost.classList.add('post')
//             let userid=document.createElement('div')
//             userid.innerText=`userid ${postElement.userId}`
//             let id=document.createElement('div')
//             id.innerText=`id ${postElement.id}`
//             divPost.appendChild(id)
//             let title=document.createElement('h2')
//             title.innerText=`${postElement.title}`
//             divPost.appendChild(title)
//             let body=document.createElement('p')
//             body.innerText=`${postElement.body}`
//             divPost.appendChild(body)
//             divposts.appendChild(divPost)
//         }
//     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


// let comments=document.getElementsByClassName('comments')[0]
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(value => {
//         console.log(value)
//         for (const comment of value) {
//             let divComment=document.createElement('div')
//             divComment.classList.add('comment')
//             let postId=document.createElement('div')
//             postId.innerText=`postid ${comment.postId}`
//             divComment.appendChild(postId)
//             let id=document.createElement('div')
//             id.innerText=comment.id
//             divComment.appendChild(id)
//             let name=document.createElement('div')
//             name.innerText=comment.name
//             divComment.appendChild(name)
//             let email=document.createElement('div')
//             email.innerText=comment.email
//             divComment.appendChild(email)
//             comments.appendChild(divComment)
//         }
//     })





