import yaml from 'yaml'

type Ingredient =
{ ingredient:string,
    qty: string}

export type RecipeType ={ 
    title: string,
    link:  string,
    ingredients:Ingredient[]
    steps?:string
}

const convertMarkdownRecipe= function(mdData:string):{err:string|null,data: {yml:string,md:string}} {

    const startYamlPosition = mdData.indexOf('---');
    if (startYamlPosition <0) return {err:'no Yaml Data at the beginning of the markdown document',data:{yml:"",md:""}}
    
    const endYamlPosition = mdData.indexOf('...');
    if (endYamlPosition<startYamlPosition) return {err:'no Yaml Data at the beginning of the markdown document',data:{yml:"",md:""}}

    const extractYmlPart= mdData.substring(0, endYamlPosition + 3);   
    const extractMdPart= mdData.substring(endYamlPosition + 3);
    // console.log(extractMdPart)
    return {err:null,data:{yml:extractYmlPart,md:extractMdPart}}
}

export function parseRecipe(recipe:string):Recipe{
    const {data}=convertMarkdownRecipe(recipe)
    const dataParsed= yaml.parse(data.yml)
    const ParsedRecipe:RecipeType= {
        title: dataParsed.title,
        link:  dataParsed.link,
        ingredients:dataParsed.ingredients,
        steps: data.md
    }
    return ParsedRecipe
}

export default {parseRecipe}
