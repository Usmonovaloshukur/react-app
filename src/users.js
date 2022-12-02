function load(page = 1){
    const data = fetch(`https://reqres.in/api/users?page=${page}`)
    .then(response => {
        return response.json()
    })
    // .then(results => results.data)
    .catch(err => {
        console.log(err);
    })
    return data
}

export default load;