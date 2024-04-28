// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

async function fetchUserList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    let userNames = users.map(user => user.name)
    
    console.log(userNames)
}

fetchUserList()

