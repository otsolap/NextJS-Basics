exports.handler = async (event, context) => {
    const guides = [
        { title: "epic", author: 'mario' },
        { title: "ghostbusting", author: 'luigi' },
        { title: "get away with murder", author: 'alec baldwin' },
    ]

    if (context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify(guides)
        }
    }

    return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Must be logged in.' })
    }

}