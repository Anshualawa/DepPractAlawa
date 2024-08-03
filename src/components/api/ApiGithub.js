export const ApiGithub = async () => {
    const response = await fetch('https://api.github.com/users/Anshualawa')
    return response.json()
}