export async function GET(request){
    const users = [
        { id: 1, name:'John'},
        { id: 2, name:'Doe'},
        { id: 3, name:'Jane'},
    ];

    return new Response(JSON.stringify(users))
}