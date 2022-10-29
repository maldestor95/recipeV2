
import yaml from 'yaml'

type Ingredient =
    {
        ingredient: string,
        qty: string
    }

export type RecipeType = {
    title: string,
    link: string,
    ingredients: Ingredient[]
    steps?: string
}

const convertMarkdownRecipe = function (mdData: string): { err: string | null, data: { yml: string, md: string } } {

    const startYamlPosition = mdData.indexOf('---');
    if (startYamlPosition < 0) return { err: 'no Yaml Data at the beginning of the markdown document', data: { yml: "", md: "" } }

    const endYamlPosition = mdData.indexOf('...');
    if (endYamlPosition < startYamlPosition) return { err: 'no Yaml Data at the beginning of the markdown document', data: { yml: "", md: "" } }

    const extractYmlPart = mdData.substring(0, endYamlPosition + 3);
    const extractMdPart = mdData.substring(endYamlPosition + 3);
    // console.log(extractMdPart)
    return { err: null, data: { yml: extractYmlPart, md: extractMdPart } }
}


export class Recipe {
    #recipeDetails: RecipeType
    #validData: boolean

    constructor(markdownRecipe: string) {
        const { data, err } = convertMarkdownRecipe(markdownRecipe)
        const dataParsed = yaml.parse(data.yml)
        this.#validData = err ? true : false
        this.#recipeDetails = {
            title: err ? "" : dataParsed.title,
            link: err ? "" : dataParsed.link,
            ingredients: err ? [] : dataParsed.ingredients,
            steps: err ? "" : data.md
        }
    }

    get title():string {
        return this.#recipeDetails.title?"":this.#recipeDetails.title
    }
    get link():string {
        return this.#recipeDetails.link?"":this.#recipeDetails.link
    }
    get steps():string {
        return this.#recipeDetails.steps?"":<string>this.#recipeDetails.steps
    }
    /**
     * return an array of Ingredients
     * @returns Array of Ingredients
     */
    get ingredients():Ingredient[] {
        return this.#recipeDetails.ingredients
    }
    /** @returns true if recipe is valid; false otherwise */
    get isRecipeValid() { return this.#validData }

}

