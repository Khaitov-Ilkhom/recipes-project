import Header from "../../components/header/Header.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store/store.ts";
import {Recipe} from "../../types";
import Card from "../../components/card/Card.tsx";
import Container from "../../components/container/Container.tsx";

const Liked = () => {
  const {products}: { products: Recipe[] } = useSelector((state: RootState) => state.like);


  return (
      <div className="w-full bg-gray-500 min-h-screen">
        <Header/>
        <Container>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {products.map((recipe) => (
                  <Card key={recipe.id} recipe={recipe}/>
              ))}
            </div>
          </div>
        </Container>
      </div>
  )
}
export default Liked
