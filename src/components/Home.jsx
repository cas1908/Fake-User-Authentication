import { Verify } from "../App"
import useDocumentTitle from "./useDocumentTitle"

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