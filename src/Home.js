
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const {data,isPending,error} = useFetch("http://localhost:8000/blogs")



    // when rendering or state is change useEffect cll its function for every rendering
    // second parameter is array where we can specify dependencies
    // when dependencies changes then useEffect function is called
    

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading.......</div>}
            {data && <BlogList blogs={data} heading={"All Blogs"} />}

            
        </div>
    );
}
 
export default Home;