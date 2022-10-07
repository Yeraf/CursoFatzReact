export const Post = () => {

   const url = "https://jsonplaceholder.typicode.com/posts";

    return <button onClick={() => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }}>
        Consultar Api
    </button>
}