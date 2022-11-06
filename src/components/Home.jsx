import { Verify } from "../App"


const Home = ()=>{
    useDocumentTitle('Home - fakeuserAuth')
    return (
        <div>
            <h1>Hello</h1>
            <Verify />
        </div>
    )
}

export default Home