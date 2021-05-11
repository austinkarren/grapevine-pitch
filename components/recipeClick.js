import recipesPage from "../pages/posts/recipes"

export default function eventListener () {

    handleClick = () => {
        console.log("Hello")
    }

    render() {
        return(
            <RecipesPage
                handleClick={this.handleClick}
            />

            
        )
    }



}