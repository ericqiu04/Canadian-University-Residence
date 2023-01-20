const getTest = async() => {
    const res = await fetch("https://localhost:8080/test");
    const data = await res.json()
    return data;
}

export default getTest;