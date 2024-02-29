import HornedBeast from './HornedBeast.jsx'
import Data from './src/data.json'

function Gallery() {
    return (
        <>
            function App() {
                return (
                    <div>
                    {data.map((item) => (
                        <HornedBeast
                        key={item._id}
                        title={item.title}
                        image_url={item.image_url}
                        description={item.description}
                        keyword={item.keyword}
                        horns={item.horns}
                        />
                    ))}
    </div>
  );
}
        </>
    )
}

export default Gallery 